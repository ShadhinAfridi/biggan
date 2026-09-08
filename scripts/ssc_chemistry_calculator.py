#!/usr/bin/env python3
"""
SSC Chemistry Solutions & Equation Calculator
Interactive CLI Agent compliant with NCTB Bangladesh (Classes 9-10) Chemistry syllabus.
Covers all quantitative modules across Chapters 1-12 with physical validations.
"""

import math
import sys
import re

# Ensure UTF-8 output across Windows consoles and PowerShell
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except AttributeError:
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
        sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# ==========================================
# PHYSICAL & CHEMICAL CONSTANTS (NCTB Standards)
# ==========================================
AVOGADRO_NUMBER = 6.023e23   # NCTB textbook standard
MOLAR_VOLUME_STP = 22.4      # Liters / mol at STP
PLANCK_CONSTANT = 6.626e-34  # J·s
ELECTRON_MASS = 9.11e-31     # kg

ATOMIC_WEIGHTS = {
    'H': 1.008, 'He': 4.003, 'Li': 6.941, 'Be': 9.012, 'B': 10.81, 'C': 12.011,
    'N': 14.007, 'O': 15.999, 'F': 18.998, 'Ne': 20.18, 'Na': 22.99, 'Mg': 24.305,
    'Al': 26.982, 'Si': 28.085, 'P': 30.974, 'S': 32.06, 'Cl': 35.45, 'Ar': 39.948,
    'K': 39.098, 'Ca': 40.078, 'Sc': 44.956, 'Ti': 47.867, 'V': 50.942, 'Cr': 51.996,
    'Mn': 54.938, 'Fe': 55.845, 'Co': 58.933, 'Ni': 58.693, 'Cu': 63.546, 'Zn': 65.38,
    'Br': 79.904, 'Ag': 107.87, 'I': 126.9, 'Ba': 137.33, 'Pb': 207.2
}

BOND_ENERGIES = {
    'C-H': 414, 'C-Cl': 326, 'C-C': 344, 'C=C': 615, 'C#C': 812,
    'N#N': 946, 'Br-Br': 193, 'O-O': 143, 'H-Cl': 431, 'H-I': 299,
    'C=O': 724, 'N-H': 391, 'O-H': 464, 'O=O': 498, 'Cl-Cl': 244,
    'I-I': 151, 'H-H': 436, 'H-Br': 366, 'H-F': 563, 'C-O': 350
}

def print_header(title):
    print("\n" + "="*70)
    print(f" {title.upper()} ".center(70, "="))
    print("="*70)

def press_enter_to_continue():
    input("\nPress [Enter] to return to the menu...")

def get_float_input(prompt, condition=None, error_msg="Invalid input. Please enter a valid positive number."):
    while True:
        try:
            val = float(input(prompt))
            if condition and not condition(val):
                print(f"Error: {error_msg}")
                continue
            return val
        except ValueError:
            print("Error: Input must be a valid number. Please try again.")

def get_int_input(prompt, condition=None, error_msg="Invalid input. Must be an integer."):
    while True:
        try:
            val = int(input(prompt))
            if condition and not condition(val):
                print(f"Error: {error_msg}")
                continue
            return val
        except ValueError:
            print("Error: Input must be an integer. Please try again.")

# Simple formula parser supporting parentheses and hydrates
def parse_formula(formula_str):
    clean = formula_str.strip().replace('·', '.').replace('*', '.')
    parts = re.split(r'(?<=[a-zA-Z\d\)\}\]])\.(?=\d*[A-Z])|\s+(?=\d*H2O)', clean)
    total_counts = {}

    for part in parts:
        part = part.strip()
        if not part: continue
        coeff_match = re.match(r'^(\d+)(.*)$', part)
        coeff = int(coeff_match.group(1)) if coeff_match and coeff_match.group(1) and coeff_match.group(2) else 1
        sub_formula = coeff_match.group(2) if coeff_match and coeff_match.group(1) and coeff_match.group(2) else part

        # Parse simple tokens or parentheses
        def parse_chunk(s):
            counts = {}
            # Match (sub)n or Symbol[count]
            tokens = re.findall(r'([A-Z][a-z]?)(\d*)|\((.*?)\)(\d*)', s)
            for sym, c1, group, c2 in tokens:
                if group:
                    mult = int(c2) if c2 else 1
                    inner_counts = parse_chunk(group)
                    for isym, icount in inner_counts.items():
                        counts[isym] = counts.get(isym, 0) + icount * mult
                elif sym:
                    cnt = int(c1) if c1 else 1
                    counts[sym] = counts.get(sym, 0) + cnt
            return counts

        chunk_counts = parse_chunk(sub_formula)
        for sym, cnt in chunk_counts.items():
            total_counts[sym] = total_counts.get(sym, 0) + cnt * coeff

    molar_mass = sum(ATOMIC_WEIGHTS.get(sym, 0) * cnt for sym, cnt in total_counts.items())
    return total_counts, molar_mass

# --- MODULE A: GAS DIFFUSION (CHAPTER 2) ---
def run_module_a():
    while True:
        print_header("Module A: Gas Diffusion & Graham's Law (গ্যাসের ব্যাপন - ২য় অধ্যায়)")
        print("1. Compare Two Gases (r1/r2 = sqrt(M2/M1))")
        print("2. Solve for Diffusion Ratio or Unknown Molar Mass")
        print("3. Back to Main Menu")
        choice = input("\nSelect an option (1-3): ").strip()

        if choice == '1':
            f1 = input("Enter 1st gas formula (e.g. NH3, CH4, CO2): ").strip()
            f2 = input("Enter 2nd gas formula (e.g. HCl, O2, SO2): ").strip()
            _, m1 = parse_formula(f1)
            _, m2 = parse_formula(f2)
            if m1 == 0 or m2 == 0:
                print("Error: Could not parse gas formulas. Ensure valid symbols are used.")
            else:
                ratio = math.sqrt(m2 / m1)
                print(f"\n[Molar Masses]: M({f1}) = {m1:.3f} g/mol, M({f2}) = {m2:.3f} g/mol")
                print(f"[Graham's Law]: r1 / r2 = sqrt(M2 / M1) = sqrt({m2:.3f} / {m1:.3f}) = {ratio:.4f}")
                if ratio > 1:
                    print(f"  Result: {f1} diffuses {ratio:.2f} times FASTER than {f2} (lighter gas diffuses faster).")
                else:
                    print(f"  Result: {f2} diffuses {1/ratio:.2f} times FASTER than {f1}.")
            press_enter_to_continue()
        elif choice == '2':
            m1 = get_float_input("Enter molar mass M1 (g/mol): ", lambda x: x > 0)
            m2 = get_float_input("Enter molar mass M2 (g/mol): ", lambda x: x > 0)
            ratio = math.sqrt(m2 / m1)
            print(f"\n[Result]: Diffusion Ratio r1/r2 = sqrt({m2}/{m1}) = {ratio:.4f}")
            press_enter_to_continue()
        elif choice == '3':
            break

# --- MODULE B: ATOMIC STRUCTURE (CHAPTER 3) ---
def run_module_b():
    while True:
        print_header("Module B: Atomic Structure & Bohr Model (পদার্থের গঠন - ৩য় অধ্যায়)")
        print("1. Average Relative Atomic Mass from Isotope Percentages")
        print("2. Bohr's Electron Angular Momentum (mvr = n*h / 2*pi)")
        print("3. Back to Main Menu")
        choice = input("\nSelect an option (1-3): ").strip()

        if choice == '1':
            print("Example: Chlorine (Cl-35 at 75%, Cl-37 at 25%)")
            count = get_int_input("Enter number of isotopes (e.g. 2 or 3): ", lambda x: x >= 2)
            total_sum = 0
            total_pct = 0
            for i in range(1, count + 1):
                mass = get_float_input(f"Enter mass number of isotope {i}: ", lambda x: x > 0)
                pct = get_float_input(f"Enter percentage abundance (%) of isotope {i}: ", lambda x: x >= 0)
                total_sum += mass * pct
                total_pct += pct
            if abs(total_pct - 100) > 0.5:
                print(f"Warning: Sum of abundances ({total_pct:.2f}%) does not equal 100%. Adjusting to 100% basis.")
            avg_mass = total_sum / total_pct if total_pct > 0 else 0
            print(f"\n[Formula]: Average Atomic Mass = Sum(Mass * Abundance) / 100")
            print(f"  Calculated Average Relative Atomic Mass = {avg_mass:.3f} amu")
            press_enter_to_continue()
        elif choice == '2':
            n = get_int_input("Enter principal quantum number / orbit n (1, 2, 3, 4...): ", lambda x: x >= 1)
            h = PLANCK_CONSTANT
            momentum = (n * h) / (2 * math.pi)
            print(f"\n[Bohr Postulate]: mvr = n*h / (2*pi)")
            print(f"  mvr = ({n} * 6.626e-34) / (2 * 3.14159) = {momentum:.4e} kg·m^2/s (or J·s)")
            press_enter_to_continue()
        elif choice == '3':
            break

# --- MODULE C1: UNIFIED MOLE CONVERTER (CHAPTER 6) ---
def run_module_c1():
    while True:
        print_header("Module C1: Unified Mole Converter (মোলের সমন্বিত সমীকরণ - ৬ষ্ঠ অধ্যায়)")
        print("Formula: n = W/M = V/22.4 = N / (6.023 x 10^23)")
        print("1. Convert from Mass W (grams)")
        print("2. Convert from Moles n")
        print("3. Convert from Volume V at STP (Liters)")
        print("4. Convert from Particle Count N")
        print("5. Back to Main Menu")
        choice = input("\nSelect an option (1-5): ").strip()

        if choice in ['1', '2', '3', '4']:
            f_str = input("Enter compound formula (e.g. H2O, CO2, Na2CO3) [or press Enter for M=18]: ").strip()
            if not f_str:
                molar_mass = 18.0
            else:
                _, molar_mass = parse_formula(f_str)
                if molar_mass == 0:
                    molar_mass = get_float_input("Could not parse formula. Enter molar mass M manually: ", lambda x: x > 0)

            moles = 0
            if choice == '1':
                w = get_float_input("Enter mass in grams (W): ", lambda x: x > 0)
                moles = w / molar_mass
            elif choice == '2':
                moles = get_float_input("Enter number of moles (n): ", lambda x: x > 0)
            elif choice == '3':
                v = get_float_input("Enter volume at STP in Liters (V): ", lambda x: x > 0)
                moles = v / MOLAR_VOLUME_STP
            elif choice == '4':
                n_count = get_float_input("Enter number of particles (e.g. 6.023e23): ", lambda x: x > 0)
                moles = n_count / AVOGADRO_NUMBER

            w_calc = moles * molar_mass
            v_calc = moles * MOLAR_VOLUME_STP
            n_calc = moles * AVOGADRO_NUMBER

            print(f"\n[Unified Results for {f_str or 'Compound'} (M = {molar_mass:.3f} g/mol)]:")
            print(f"  • Moles (n)          = {moles:.4f} mol")
            print(f"  • Mass in grams (W)  = {w_calc:.4f} g")
            print(f"  • Volume at STP (V)  = {v_calc:.4f} Liters ({v_calc*1000:.1f} mL)")
            print(f"  • Molecule Count (N) = {n_calc:.4e} particles")
            press_enter_to_continue()
        elif choice == '5':
            break

# --- MODULE C2: SOLUTION MOLARITY (CHAPTER 6) ---
def run_module_c2():
    while True:
        print_header("Module C2: Solution Molarity & Lab Prep (দ্রবণের মোলারিটি - ৬ষ্ঠ অধ্যায়)")
        print("Formula: W = (S * V * M) / 1000  <=>  S = (1000 * W) / (V * M)")
        print("1. Solve for Solute Weight W (grams)")
        print("2. Solve for Solution Molarity S (M)")
        print("3. Solve for Solution Volume V (mL)")
        print("4. Back to Main Menu")
        choice = input("\nSelect an option (1-4): ").strip()

        if choice == '1':
            s = get_float_input("Enter desired molarity S (M, e.g. 0.1 for decimolar): ", lambda x: x > 0)
            v = get_float_input("Enter solution volume V (mL, e.g. 250): ", lambda x: x > 0)
            f_str = input("Enter solute formula (e.g. Na2CO3, NaOH, NaCl): ").strip()
            _, m = parse_formula(f_str)
            if m == 0:
                m = get_float_input("Could not parse formula. Enter molar mass M: ", lambda x: x > 0)
            w = (s * v * m) / 1000.0
            print(f"\n[Formula]: W = (S * V * M) / 1000 = ({s} * {v} * {m:.2f}) / 1000")
            print(f"  Required solute mass W = {w:.4f} grams")
            print(f"\n[Laboratory Preparation Note]:")
            print(f"  Weigh exactly {w:.4f} g of {f_str} using an analytical balance.")
            print(f"  Transfer to a {v:.0f} mL volumetric flask, dissolve in distilled water, and fill to the mark.")
            press_enter_to_continue()
        elif choice == '2':
            w = get_float_input("Enter solute mass W (g): ", lambda x: x > 0)
            v = get_float_input("Enter volume V (mL): ", lambda x: x > 0)
            f_str = input("Enter solute formula (e.g. Na2CO3): ").strip()
            _, m = parse_formula(f_str)
            if m == 0:
                m = get_float_input("Could not parse formula. Enter molar mass M: ", lambda x: x > 0)
            s = (1000.0 * w) / (v * m)
            print(f"\n[Formula]: S = (1000 * W) / (V * M) = (1000 * {w}) / ({v} * {m:.2f})")
            print(f"  Solution Molarity S = {s:.4f} M (Molar)")
            press_enter_to_continue()
        elif choice == '3':
            w = get_float_input("Enter solute mass W (g): ", lambda x: x > 0)
            s = get_float_input("Enter molarity S (M): ", lambda x: x > 0)
            m = get_float_input("Enter solute molar mass M (g/mol): ", lambda x: x > 0)
            v = (1000.0 * w) / (s * m)
            print(f"\n[Formula]: V = (1000 * W) / (S * M) = {v:.2f} mL")
            press_enter_to_continue()
        elif choice == '4':
            break

# --- MODULE C3: PERCENTAGE COMPOSITION (CHAPTER 6) ---
def run_module_c3():
    while True:
        print_header("Module C3: Percentage Composition (শতকরা সংযুতি - ৬ষ্ঠ অধ্যায়)")
        f_str = input("Enter chemical formula (e.g. H2SO4, CuSO4.5H2O, Ca(OH)2) [0 to exit]: ").strip()
        if f_str == '0': break
        try:
            counts, m_total = parse_formula(f_str)
            if m_total == 0:
                print("Error: Invalid formula entered.")
                continue
            print(f"\n[Total Molar Mass of {f_str}]: {m_total:.3f} g/mol")
            print("-" * 50)
            print(f"{'Element':<10} {'Count':<8} {'Atomic Wt':<12} {'Percentage (%)':<15}")
            print("-" * 50)
            for sym, cnt in counts.items():
                aw = ATOMIC_WEIGHTS.get(sym, 0)
                mass = aw * cnt
                pct = (mass / m_total) * 100.0
                print(f"{sym:<10} {cnt:<8} {aw:<12.3f} {pct:<15.2f}%")
            print("-" * 50)
        except Exception as e:
            print(f"Error parsing formula: {e}")
        press_enter_to_continue()

# --- MODULE C4: EMPIRICAL & MOLECULAR FORMULA (CHAPTER 6) ---
def run_module_c4():
    while True:
        print_header("Module C4: Empirical & Molecular Formula (স্থূল ও আণবিক সংকেত)")
        print("Example: Carbon = 92.31%, Hydrogen = 7.69%, Molar Mass = 78 (Benzene)")
        num_el = get_int_input("Enter number of elements in compound (e.g. 2 or 3): ", lambda x: x >= 2)
        elements = []
        for i in range(1, num_el + 1):
            sym = input(f"Enter element symbol {i} (e.g. C, H, O): ").strip().capitalize()
            pct = get_float_input(f"Enter percentage of {sym} (%): ", lambda x: x > 0)
            ar = ATOMIC_WEIGHTS.get(sym, 1)
            ratio = pct / ar
            elements.append({'sym': sym, 'pct': pct, 'ar': ar, 'ratio': ratio})

        min_r = min(el['ratio'] for el in elements)
        raw_subs = [el['ratio'] / min_r for el in elements]

        factor = 1
        for s in raw_subs:
            frac = abs(s - round(s))
            if abs(frac - 0.5) < 0.08: factor = max(factor, 2)
            elif abs(frac - 0.33) < 0.08 or abs(frac - 0.67) < 0.08: factor = max(factor, 3)

        integers = [round(s * factor) for s in raw_subs]
        emp_formula = "".join(f"{el['sym']}{cnt if cnt > 1 else ''}" for el, cnt in zip(elements, integers))
        emp_mass = sum(el['ar'] * cnt for el, cnt in zip(elements, integers))

        print(f"\n[Step 1: Mole Ratios]:")
        for el in elements:
            print(f"  {el['sym']}: {el['pct']}% / {el['ar']:.2f} = {el['ratio']:.4f}")

        print(f"[Step 2: Divide by Smallest ({min_r:.4f})]:")
        for el, sub, cnt in zip(elements, raw_subs, integers):
            print(f"  {el['sym']}: {sub:.2f} -> {cnt}")

        print(f"\n[Empirical Formula (স্থূল সংকেত)]: {emp_formula} (Mass = {emp_mass:.2f} g/mol)")

        actual_mass = get_float_input("Enter actual molecular mass of compound (or 0 to skip molecular formula): ")
        if actual_mass > 0:
            n_factor = max(1, round(actual_mass / emp_mass))
            mol_formula = "".join(f"{el['sym']}{cnt * n_factor if cnt * n_factor > 1 else ''}" for el, cnt in zip(elements, integers))
            print(f"[Molecular Formula Multiplier]: n = {actual_mass} / {emp_mass:.2f} = {n_factor}")
            print(f"[Molecular Formula (আণবিক সংকেত)]: {mol_formula}")
        press_enter_to_continue()
        break

# --- MODULE C5: LIMITING REACTANT (CHAPTER 6) ---
def run_module_c5():
    while True:
        print_header("Module C5: Limiting Reactant & Reaction Yield (লিমিটিং বিক্রিয়ক)")
        print("Equation template: a A + b B -> c C")
        print("Example: 2 H2 + 1 O2 -> 2 H2O")
        fA = input("Enter reactant A formula (e.g. H2, Mg): ").strip()
        cA = get_int_input(f"Enter stoichiometric coefficient of {fA}: ", lambda x: x >= 1)
        wA = get_float_input(f"Enter available mass of {fA} in grams: ", lambda x: x > 0)
        _, mA = parse_formula(fA)

        fB = input("Enter reactant B formula (e.g. O2, HCl): ").strip()
        cB = get_int_input(f"Enter stoichiometric coefficient of {fB}: ", lambda x: x >= 1)
        wB = get_float_input(f"Enter available mass of {fB} in grams: ", lambda x: x > 0)
        _, mB = parse_formula(fB)

        fC = input("Enter target product C formula (e.g. H2O, MgCl2): ").strip()
        cC = get_int_input(f"Enter coefficient of {fC}: ", lambda x: x >= 1)
        _, mC = parse_formula(fC)

        molesA = wA / mA
        molesB = wB / mB
        ratioA = molesA / cA
        ratioB = molesB / cB

        is_A_limiting = ratioA < ratioB
        lim_name = fA if is_A_limiting else fB
        excess_name = fB if is_A_limiting else fA

        lim_moles = ratioA if is_A_limiting else ratioB
        theo_moles_C = lim_moles * cC
        theo_mass_C = theo_moles_C * mC

        if is_A_limiting:
            req_moles_B = molesA * (cB / cA)
            excess_left_mol = molesB - req_moles_B
            excess_left_g = excess_left_mol * mB
        else:
            req_moles_A = molesB * (cA / cB)
            excess_left_mol = molesA - req_moles_A
            excess_left_g = excess_left_mol * mA

        print(f"\n[Calculations]:")
        print(f"  • Moles of {fA}: {molesA:.4f} mol (Ratio = {ratioA:.4f})")
        print(f"  • Moles of {fB}: {molesB:.4f} mol (Ratio = {ratioB:.4f})")
        print(f"  • Limiting Reactant (লিমিটিং বিক্রিয়ক): {lim_name}")
        print(f"  • Excess {excess_name} remaining: {excess_left_mol:.4f} mol ({excess_left_g:.3f} grams)")
        print(f"  • Theoretical Yield of {fC}: {theo_mass_C:.3f} grams")

        actual_g = get_float_input(f"Enter experimental mass of {fC} obtained (or 0 to skip): ")
        if actual_g > 0:
            pct_yield = (actual_g / theo_mass_C) * 100.0
            print(f"  • Percentage Yield (শতকরা ফলন): {pct_yield:.2f}%")
        press_enter_to_continue()
        break

# --- MODULE D: OXIDATION STATES (CHAPTER 7) ---
def run_module_d():
    while True:
        print_header("Module D: Oxidation States (জারণ সংখ্যা - ৭ম অধ্যায়)")
        print("Presets: KMnO4 (Mn), K2Cr2O7 (Cr), H2SO4 (S), HNO3 (N), Na2S2O3 (S)")
        f_str = input("Enter compound formula (e.g. KMnO4, H2SO4) [0 to exit]: ").strip()
        if f_str == '0': break
        target = input("Enter target element symbol to solve for (e.g. Mn, S, Cr): ").strip().capitalize()
        counts, _ = parse_formula(f_str)
        if target not in counts:
            print(f"Error: {target} is not in {f_str}.")
            continue

        known_ox = {'H': 1, 'Na': 1, 'K': 1, 'Li': 1, 'Mg': 2, 'Ca': 2, 'Ba': 2, 'Al': 3, 'O': -2, 'F': -1, 'Cl': -1}
        known_sum = 0
        target_count = counts[target]
        terms = []
        for sym, cnt in counts.items():
            if sym == target:
                terms.append(f"{cnt}*x" if cnt > 1 else "x")
            else:
                ox = known_ox.get(sym, 0)
                known_sum += ox * cnt
                terms.append(f"({ox:+d} * {cnt})")

        x = (0 - known_sum) / target_count
        print(f"\n[Equation]: {' + '.join(terms)} = 0")
        print(f"  {target_count}*x + ({known_sum:+d}) = 0 => x = {x:+.2f}")
        print(f"  Oxidation state of {target} in {f_str} = {x:+.0f if x.is_integer() else x:+.2f}")
        press_enter_to_continue()

# --- MODULE E: BOND ENERGY (CHAPTER 8) ---
def run_module_e():
    while True:
        print_header("Module E: Reaction Enthalpy Delta H (বন্ধন শক্তি - ৮ম অধ্যায়)")
        print("Formula: Delta H = Sum(Bonds Broken) - Sum(Bonds Formed)")
        print("1. Methane Chlorination (CH4 + Cl2 -> CH3Cl + HCl)")
        print("2. Ethene Hydrogenation (C2H4 + H2 -> C2H6)")
        print("3. Ammonia Synthesis (N2 + 3H2 -> 2NH3)")
        print("4. Custom Broken vs Formed Bonds")
        print("5. Back to Main Menu")
        choice = input("\nSelect an option (1-5): ").strip()

        if choice == '1':
            broken = BOND_ENERGIES['C-H'] + BOND_ENERGIES['Cl-Cl']
            formed = BOND_ENERGIES['C-Cl'] + BOND_ENERGIES['H-Cl']
            delta_h = broken - formed
            print(f"\n[CH4 + Cl2 -> CH3Cl + HCl]:")
            print(f"  • Bonds Broken B1 = 1*(C-H) + 1*(Cl-Cl) = 414 + 244 = {broken} kJ/mol")
            print(f"  • Bonds Formed B2 = 1*(C-Cl) + 1*(H-Cl) = 326 + 431 = {formed} kJ/mol")
            print(f"  • Delta H = B1 - B2 = {broken} - {formed} = {delta_h} kJ/mol")
            print(f"  • Classification: {'Exothermic (তাপোৎপাদী)' if delta_h < 0 else 'Endothermic'}")
            press_enter_to_continue()
        elif choice == '2':
            broken = BOND_ENERGIES['C=C'] + BOND_ENERGIES['H-H']
            formed = BOND_ENERGIES['C-C'] + 2 * BOND_ENERGIES['C-H']
            delta_h = broken - formed
            print(f"\n[C2H4 + H2 -> C2H6]:")
            print(f"  • Bonds Broken B1 = 1*(C=C) + 1*(H-H) = 615 + 436 = {broken} kJ/mol")
            print(f"  • Bonds Formed B2 = 1*(C-C) + 2*(C-H) = 344 + 2*414 = {formed} kJ/mol")
            print(f"  • Delta H = B1 - B2 = {delta_h} kJ/mol (Exothermic)")
            press_enter_to_continue()
        elif choice == '3':
            broken = BOND_ENERGIES['N#N'] + 3 * BOND_ENERGIES['H-H']
            formed = 6 * BOND_ENERGIES['N-H']
            delta_h = broken - formed
            print(f"\n[N2 + 3H2 -> 2NH3]:")
            print(f"  • Bonds Broken B1 = 1*(N#N) + 3*(H-H) = 946 + 3*436 = {broken} kJ/mol")
            print(f"  • Bonds Formed B2 = 6*(N-H) = 6*391 = {formed} kJ/mol")
            print(f"  • Delta H = B1 - B2 = {delta_h} kJ/mol (Exothermic)")
            press_enter_to_continue()
        elif choice == '4':
            b1 = get_float_input("Enter total energy of bonds broken B1 (kJ/mol): ", lambda x: x >= 0)
            b2 = get_float_input("Enter total energy of bonds formed B2 (kJ/mol): ", lambda x: x >= 0)
            delta_h = b1 - b2
            print(f"\nDelta H = B1 - B2 = {b1} - {b2} = {delta_h} kJ/mol")
            print(f"Classification: {'Exothermic (তাপোৎপাদী)' if delta_h < 0 else 'Endothermic (তাপহারী)'}")
            press_enter_to_continue()
        elif choice == '5':
            break

# --- MODULE F: PH & TITRATION (CHAPTER 9) ---
def run_module_f():
    while True:
        print_header("Module F: Acid-Base, pH & Titration (এসিড-ক্ষারক সমতা - ৯ম অধ্যায়)")
        print("1. Calculate pH & pOH from [H+] Concentration")
        print("2. Neutralization Titration ((Va * Sa) / a = (Vb * Sb) / b)")
        print("3. Back to Main Menu")
        choice = input("\nSelect an option (1-3): ").strip()

        if choice == '1':
            conc = get_float_input("Enter [H+] molar concentration (e.g. 0.01 for 0.01M HCl): ", lambda x: x > 0)
            ph = -math.log10(conc)
            poh = 14.0 - ph
            print(f"\n[Results]:")
            print(f"  • pH = -log10({conc}) = {ph:.2f}")
            print(f"  • pOH = 14 - pH = {poh:.2f}")
            nature = "Acidic (অম্লীয়)" if ph < 7 else "Basic (ক্ষারীয়)" if ph > 7 else "Neutral (নিরপেক্ষ)"
            print(f"  • Solution Nature: {nature}")
            press_enter_to_continue()
        elif choice == '2':
            va = get_float_input("Enter Acid Volume Va (mL): ", lambda x: x > 0)
            sa = get_float_input("Enter Acid Molarity Sa (M): ", lambda x: x > 0)
            a = get_int_input("Enter Acid stoichiometric coefficient a: ", lambda x: x >= 1)
            sb = get_float_input("Enter Base Molarity Sb (M): ", lambda x: x > 0)
            b = get_int_input("Enter Base stoichiometric coefficient b: ", lambda x: x >= 1)
            vb = (va * sa * b) / (a * sb)
            print(f"\n[Formula]: Vb = (Va * Sa * b) / (a * Sb)")
            print(f"  Required Base Volume Vb = ({va} * {sa} * {b}) / ({a} * {sb}) = {vb:.2f} mL")
            press_enter_to_continue()
        elif choice == '3':
            break

# --- MODULE G: HYDROCARBONS (CHAPTER 11) ---
def run_module_g():
    prefixes_en = ['', 'Meth', 'Eth', 'Prop', 'But', 'Pent', 'Hex', 'Hept', 'Oct', 'Non', 'Dec']
    prefixes_bn = ['', 'মিথ', 'ইথ', 'প্রোপ', 'বিউট', 'পেন্ট', 'হেক্স', 'হেপ্ট', 'অক্ট', 'নন', 'ডেক']

    while True:
        print_header("Module G: Hydrocarbons (হাইড্রোকার্বন সমগোত্রীয় শ্রেণি - ১১শ অধ্যায়)")
        print("1. Alkanes (C_n H_{2n+2})")
        print("2. Alkenes (C_n H_{2n})")
        print("3. Alkynes (C_n H_{2n-2})")
        print("4. Back to Main Menu")
        choice = input("\nSelect a homologous series (1-4): ").strip()

        if choice in ['1', '2', '3']:
            min_n = 1 if choice == '1' else 2
            n = get_int_input(f"Enter carbon count n ({min_n} to 10): ", lambda x: min_n <= x <= 10)

            if choice == '1':
                h = 2 * n + 2
                name = f"{prefixes_bn[n]}েন ({prefixes_en[n]}ane)"
                condensed = 'CH4' if n == 1 else f"CH3-{'CH2-'*(n-2)}CH3"
            elif choice == '2':
                h = 2 * n
                name = f"{prefixes_bn[n]}িন ({prefixes_en[n]}ene)"
                condensed = 'CH2=CH2' if n == 2 else f"CH2=CH-{'CH2-'*(n-3)}CH3".rstrip('-')
            else:
                h = 2 * n - 2
                name = f"{prefixes_bn[n]}াইন ({prefixes_en[n]}yne)"
                condensed = 'CH≡CH' if n == 2 else f"CH≡C-{'CH2-'*(n-3)}CH3".rstrip('-')

            molar_mass = n * 12.011 + h * 1.008
            carbon_pct = (n * 12.011 / molar_mass) * 100.0

            print(f"\n[Hydrocarbon Properties for n = {n}]:")
            print(f"  • Name: {name}")
            print(f"  • Molecular Formula: C{n}H{h}")
            print(f"  • Condensed Structure: {condensed}")
            print(f"  • Molar Mass: {molar_mass:.2f} g/mol")
            print(f"  • Carbon Mass Percentage: {carbon_pct:.2f}%")
            press_enter_to_continue()
        elif choice == '4':
            break

# ==========================================
# MAIN INTERACTIVE DISPATCHER
# ==========================================
def main():
    while True:
        print_header("Biggan.me - SSC Chemistry Solutions & Equation Engine (NCTB 9-10)")
        print(" 1. Module A:  Gas Diffusion & Graham's Law (গ্যাসের ব্যাপন - ২য় অধ্যায়)")
        print(" 2. Module B:  Atomic Structure & Bohr Model (পদার্থের গঠন - ৩য় অধ্যায়)")
        print(" 3. Module C1: Unified Mole Converter (মোলের সমন্বিত সমীকরণ - ৬ষ্ঠ অধ্যায়)")
        print(" 4. Module C2: Solution Molarity & Lab Prep (দ্রবণের মোলারিটি - ৬ষ্ঠ অধ্যায়)")
        print(" 5. Module C3: Percentage Composition of Compounds (শতকরা সংযুতি - ৬ষ্ঠ অধ্যায়)")
        print(" 6. Module C4: Empirical & Molecular Formula (স্থূল ও আণবিক সংকেত - ৬ষ্ঠ অধ্যায়)")
        print(" 7. Module C5: Limiting Reactant & Reaction Yield (লিমিটিং বিক্রিয়ক - ৬ষ্ঠ অধ্যায়)")
        print(" 8. Module D:  Oxidation State Calculator (জারণ সংখ্যা - ৭ম অধ্যায়)")
        print(" 9. Module E:  Bond Energy Reaction Enthalpy Delta H (বন্ধন শক্তি - ৮ম অধ্যায়)")
        print("10. Module F:  Acid-Base, pH & Titration Neutralization (এসিড-ক্ষারক - ৯ম অধ্যায়)")
        print("11. Module G:  Hydrocarbons Homologous Series (হাইড্রোকার্বন - ১১শ অধ্যায়)")
        print(" 0. Exit")

        choice = input("\nSelect a module (0-11): ").strip()

        if choice == '1': run_module_a()
        elif choice == '2': run_module_b()
        elif choice == '3': run_module_c1()
        elif choice == '4': run_module_c2()
        elif choice == '5': run_module_c3()
        elif choice == '6': run_module_c4()
        elif choice == '7': run_module_c5()
        elif choice == '8': run_module_d()
        elif choice == '9': run_module_e()
        elif choice == '10': run_module_f()
        elif choice == '11': run_module_g()
        elif choice == '0':
            print("\nThank you for using Biggan.me SSC Chemistry Calculator. Goodbye!")
            sys.exit(0)
        else:
            print("Invalid selection. Please enter a number between 0 and 11.")

if __name__ == '__main__':
    main()
