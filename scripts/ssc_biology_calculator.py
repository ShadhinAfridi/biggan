#!/usr/bin/env python3
"""
SSC Biology Solutions & Equation Calculator
Interactive CLI Agent compliant with NCTB Bangladesh (Classes 9-10) Biology syllabus.
Covers all quantitative modules across Chapters 1-14 with physical and biological validations.
"""

import math
import sys

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
# BIOLOGICAL CONSTANTS & PARAMETERS (NCTB Standards)
# ==========================================
ATP_KCAL = 7.3    # kcal per mole of ATP
ATP_KJ = 30.55    # kJ per mole of ATP

ACTIVITY_MULTIPLIERS = {
    '1': ('Sedentary (ব্যায়ামহীন)', 1.2),
    '2': ('Lightly Active (অল্প পরিশ্রমী, সপ্তাহে ১-৩ দিন)', 1.375),
    '3': ('Moderately Active (মাঝারি পরিশ্রমী, সপ্তাহে ৩-৫ দিন)', 1.55),
    '4': ('Very Active (কঠোর পরিশ্রমী, প্রতিদিন)', 1.725),
    '5': ('Extremely Active (অত্যন্ত কঠোর পরিশ্রমী/ক্রীড়াবিদ)', 1.9),
}

BLOOD_DONATIONS = {
    'O-': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    'O+': ['O+', 'A+', 'B+', 'AB+'],
    'A-': ['A+', 'A-', 'AB+', 'AB-'],
    'A+': ['A+', 'AB+'],
    'B-': ['B+', 'B-', 'AB+', 'AB-'],
    'B+': ['B+', 'AB+'],
    'AB-': ['AB+', 'AB-'],
    'AB+': ['AB+'],
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

# --- MODULE 1: BMI & WEIGHT ASSESSMENT (CHAPTER 5) ---
def run_bmi_module():
    print_header("Module 1: Body Mass Index (BMI / দেহ ভর সূচি - ৫ম অধ্যায়)")
    print("Select input unit for weight and height:")
    print("1. Metric (Weight in kg, Height in cm)")
    print("2. Imperial (Weight in lbs, Height in feet & inches)")
    choice = input("Enter choice (1/2): ").strip()

    if choice == '2':
        lbs = get_float_input("Enter weight in pounds (lbs): ", lambda x: x > 0)
        feet = get_int_input("Enter height (feet): ", lambda x: x > 0)
        inches = get_float_input("Enter height (inches): ", lambda x: 0 <= x < 12)
        weight_kg = lbs * 0.453592
        height_cm = (feet * 12 + inches) * 2.54
    else:
        weight_kg = get_float_input("Enter weight in kg: ", lambda x: x > 0)
        height_cm = get_float_input("Enter height in cm: ", lambda x: x > 0)

    height_m = height_cm / 100.0
    bmi = weight_kg / (height_m ** 2)

    # Classification
    if bmi < 18.5:
        category_en = "Underweight"
        category_bn = "ওজন কম (পরিমিত পুষ্টিকর আহার প্রয়োজন)"
    elif bmi < 25.0:
        category_en = "Normal / Healthy Weight"
        category_bn = "স্বাভাবিক ওজন (সুস্বাস্থ্যের আদর্শ মান)"
    elif bmi < 30.0:
        category_en = "Overweight"
        category_bn = "অতিরিক্ত ওজন (ব্যায়াম ও আহার নিয়ন্ত্রণ প্রয়োজন)"
    else:
        category_en = "Obese"
        category_bn = "স্থূলতা (উচ্চ স্বাস্থ্যঝুঁকি, চিকিৎসকের পরামর্শ নিন)"

    healthy_min = 18.5 * (height_m ** 2)
    healthy_max = 24.9 * (height_m ** 2)

    print(f"\n[Calculated BMI]: {bmi:.2f}")
    print(f"[Classification]: {category_en} ({category_bn})")
    print(f"[Ideal Healthy Weight Range for {height_cm:.1f} cm]: {healthy_min:.1f} kg to {healthy_max:.1f} kg")

    if weight_kg < healthy_min:
        diff = healthy_min - weight_kg
        print(f"[Recommendation]: Needs to gain approximately {diff:.1f} kg to enter the healthy weight range.")
    elif weight_kg > healthy_max:
        diff = weight_kg - healthy_max
        print(f"[Recommendation]: Needs to lose approximately {diff:.1f} kg to achieve healthy weight.")
    else:
        print("[Recommendation]: Body weight is currently in the ideal healthy range! Keep it up.")

    press_enter_to_continue()

# --- MODULE 2: BMR & DAILY CALORIC NEEDS (CHAPTER 5) ---
def run_bmr_module():
    print_header("Module 2: BMR & Daily Caloric Needs (মৌলিক বিপাকীয় হার - ৫ম অধ্যায়)")
    gender = input("Enter biological sex (M for Male, F for Female): ").strip().upper()
    while gender not in ['M', 'F']:
        gender = input("Invalid. Enter 'M' for Male or 'F' for Female: ").strip().upper()

    weight_kg = get_float_input("Enter weight in kg: ", lambda x: 20 <= x <= 250, "Weight must be between 20 and 250 kg.")
    height_cm = get_float_input("Enter height in cm: ", lambda x: 50 <= x <= 250, "Height must be between 50 and 250 cm.")
    age = get_float_input("Enter age in years: ", lambda x: 5 <= x <= 120, "Age must be between 5 and 120 years.")

    print("\nSelect Physical Activity Level:")
    for k, (desc, mult) in ACTIVITY_MULTIPLIERS.items():
        print(f" {k}. {desc} (Multiplier: {mult})")
    act_choice = input("Enter activity level (1-5, default 3): ").strip()
    act_desc, multiplier = ACTIVITY_MULTIPLIERS.get(act_choice, ACTIVITY_MULTIPLIERS['3'])

    # Harris-Benedict Formulas
    if gender == 'M':
        bmr = 66 + (13.7 * weight_kg) + (5 * height_cm) - (6.8 * age)
        formula_str = f"66 + (13.7 × {weight_kg}) + (5 × {height_cm}) - (6.8 × {age})"
    else:
        bmr = 655 + (9.6 * weight_kg) + (1.8 * height_cm) - (4.7 * age)
        formula_str = f"655 + (9.6 × {weight_kg}) + (1.8 × {height_cm}) - (4.7 × {age})"

    tdee = bmr * multiplier

    print(f"\n[BMR Formula]: {formula_str}")
    print(f"[Basal Metabolic Rate (BMR)]: {bmr:.2f} kcal/day")
    print(f"[Activity Level]: {act_desc} (Factor {multiplier})")
    print(f"[Total Daily Energy Expenditure (TDEE)]: {tdee:.1f} kcal/day")
    print("\nExplanation:")
    print(f"  At complete rest, your vital organs consume {bmr:.1f} kcal daily.")
    print(f"  To maintain current weight at your activity level, daily intake should equal {tdee:.1f} kcal.")
    press_enter_to_continue()

# --- MODULE 3: BIOENERGETICS & RESPIRATION (CHAPTER 4) ---
def run_respiration_module():
    print_header("Module 3: Bioenergetics & Respiration ATP Yield (জীবনীশক্তি - ৪র্থ অধ্যায়)")
    print("1. NCTB Classical Model (38 ATP / Glucose)")
    print("2. Modern Biochemistry Standard (36 ATP / Glucose)")
    model_choice = input("Select calculation model (1/2, default 1): ").strip()
    model = "classical" if model_choice != '2' else "modern"

    glucose = get_float_input("Enter amount of Glucose (moles/molecules, default 1.0): ", lambda x: x > 0)

    base_atp = 38 if model == "classical" else 36
    total_atp = base_atp * glucose
    total_kcal = total_atp * ATP_KCAL
    total_kj = total_atp * ATP_KJ
    co2_moles = 6 * glucose

    print(f"\n--- AEROBIC RESPIRATION BALANCE SHEET ({glucose} mole Glucose, {model.capitalize()} Model) ---")
    print(f"{'Stage':<25} | {'Direct ATP':<12} | {'NADH':<8} | {'FADH2':<8} | {'Total ATP':<10}")
    print("-" * 72)
    glyc_atp = (8 if model == "classical" else 7) * glucose
    acet_atp = (6 if model == "classical" else 5) * glucose
    kreb_atp = (24 if model == "classical" else 20) * glucose

    print(f"{'1. Glycolysis':<25} | {2*glucose:<12.1f} | {2*glucose:<8.1f} | {0:<8.1f} | {glyc_atp:<10.1f}")
    print(f"{'2. Acetyl-CoA Formation':<25} | {0:<12.1f} | {2*glucose:<8.1f} | {0:<8.1f} | {acet_atp:<10.1f}")
    print(f"{'3. Krebs Cycle':<25} | {2*glucose:<12.1f} | {6*glucose:<8.1f} | {2*glucose:<8.1f} | {kreb_atp:<10.1f}")
    print("-" * 72)
    print(f"{'GRAND TOTAL':<25} | {4*glucose:<12.1f} | {10*glucose:<8.1f} | {2*glucose:<8.1f} | {total_atp:<10.1f}")

    print(f"\n[Summary of Energy Released]:")
    print(f"  • Total ATP Produced: {total_atp:.1f} ATP")
    print(f"  • Total Usable Energy: {total_kcal:.1f} kcal ({total_kj:.1f} kJ)")
    print(f"  • Carbon Dioxide Released: {co2_moles:.1f} moles CO2")
    print(f"  • Anaerobic Comparison: In absence of O2, fermentation yields only {2*glucose:.1f} ATP ({2*glucose*ATP_KCAL:.1f} kcal).")
    press_enter_to_continue()

# --- MODULE 4: MONOHYBRID GENETIC CROSS (CHAPTER 12) ---
def run_monohybrid_module():
    print_header("Module 4: Mendelian Monohybrid Cross (একসংকর জনন - ১২শ অধ্যায়)")
    print("Example traits: T (Tall/লম্বা - Dominant), t (Dwarf/খাটো - Recessive)")
    p1 = input("Enter Parent 1 genotype (e.g., TT, Tt, tt): ").strip()
    p2 = input("Enter Parent 2 genotype (e.g., TT, Tt, tt): ").strip()

    if len(p1) != 2 or len(p2) != 2:
        print("Error: Genotypes must be 2 characters (e.g., Tt).")
        press_enter_to_continue()
        return

    def combine(a, b):
        if a.isupper() and b.islower(): return a + b
        if b.isupper() and a.islower(): return b + a
        return a + b if a <= b else b + a

    c11 = combine(p1[0], p2[0])
    c12 = combine(p1[0], p2[1])
    c21 = combine(p1[1], p2[0])
    c22 = combine(p1[1], p2[1])

    progeny = [c11, c12, c21, c22]
    counts = {}
    dominant = 0
    recessive = 0

    for c in progeny:
        counts[c] = counts.get(c, 0) + 1
        if any(char.isupper() for char in c):
            dominant += 1
        else:
            recessive += 1

    print("\n--- 2 x 2 PUNNETT SQUARE ---")
    print(f"       |  {p2[0]}   |  {p2[1]}   |")
    print("---------------------")
    print(f"  {p1[0]}    |  {c11}  |  {c12}  |")
    print("---------------------")
    print(f"  {p1[1]}    |  {c21}  |  {c22}  |")
    print("---------------------")

    print("\n[Genotypic Ratio]:")
    for g, cnt in counts.items():
        print(f"  • {g}: {cnt}/4 ({(cnt/4)*100:.0f}%)")

    print("\n[Phenotypic Ratio]:")
    print(f"  • Dominant Phenotype: {dominant}/4 ({(dominant/4)*100:.0f}%)")
    print(f"  • Recessive Phenotype: {recessive}/4 ({(recessive/4)*100:.0f}%)")
    press_enter_to_continue()

# --- MODULE 5: SEX-LINKED INHERITANCE (CHAPTER 12) ---
def run_sex_linked_module():
    print_header("Module 5: Sex-Linked Trait Cross (লিঙ্গ-সংযুক্ত বংশগতি - ১২শ অধ্যায়)")
    print("Trait: Red-Green Color Blindness (XN = Normal vision, Xn = Color-blind allele)")
    print("\nSelect Maternal Genotype:")
    print(" 1. XN XN (Normal Vision Mother / স্বাভাবিক দৃষ্টিসম্পন্ন মা)")
    print(" 2. XN Xn (Carrier Mother / বাহক মা - সুস্থ কিন্তু জিন বহনকারী)")
    print(" 3. Xn Xn (Color-blind Mother / বর্ণান্ধ মা)")
    m_choice = input("Enter choice (1-3): ").strip()
    m_alleles = {'1': ('XN', 'XN'), '2': ('XN', 'Xn'), '3': ('Xn', 'Xn')}.get(m_choice, ('XN', 'Xn'))

    print("\nSelect Paternal Genotype:")
    print(" 1. XN Y (Normal Vision Father / স্বাভাবিক বাবা)")
    print(" 2. Xn Y (Color-blind Father / বর্ণান্ধ বাবা)")
    p_choice = input("Enter choice (1-2): ").strip()
    p_alleles = {'1': ('XN', 'Y'), '2': ('Xn', 'Y')}.get(p_choice, ('XN', 'Y'))

    def eval_child(m, p):
        if p == 'Y':
            # Male
            return ('XY', 'Normal Son' if m == 'XN' else 'Color-blind Son', m + 'Y')
        else:
            # Female
            pair = [m, p]
            if pair == ['XN', 'XN']:
                return ('XX', 'Normal Daughter', 'XNXN')
            elif pair == ['Xn', 'Xn']:
                return ('XX', 'Color-blind Daughter', 'XnXn')
            else:
                return ('XX', 'Carrier Daughter (Normal Vision)', 'XNXn')

    c11 = eval_child(m_alleles[0], p_alleles[0])
    c12 = eval_child(m_alleles[0], p_alleles[1])
    c21 = eval_child(m_alleles[1], p_alleles[0])
    c22 = eval_child(m_alleles[1], p_alleles[1])

    children = [c11, c12, c21, c22]
    daughters = [c for c in children if c[0] == 'XX']
    sons = [c for c in children if c[0] == 'XY']

    print("\n--- 2 x 2 PUNNETT SQUARE ---")
    print(f" Mother \\ Father |   {p_alleles[0]}      |   {p_alleles[1]}      |")
    print("-" * 46)
    print(f"     {m_alleles[0]}           |   {c11[2]:<8}  |   {c12[2]:<8}  |")
    print("-" * 46)
    print(f"     {m_alleles[1]}           |   {c21[2]:<8}  |   {c22[2]:<8}  |")
    print("-" * 46)

    print("\n[Daughter Statistics (কন্যা সন্তান)]:")
    for d in daughters:
        print(f"  • Genotype {d[2]}: {d[1]}")

    print("\n[Son Statistics (পুত্র সন্তান)]:")
    for s in sons:
        print(f"  • Genotype {s[2]}: {s[1]}")

    print("\n[NCTB Board Exam Rule]:")
    print("  Because males inherit their only X chromosome from their mother and Y from father,")
    print("  a son will ALWAYS be color-blind if the mother is homozygous color-blind (Xn Xn).")
    press_enter_to_continue()

# --- MODULE 6: 10% TROPHIC ENERGY FLOW (CHAPTER 13) ---
def run_trophic_module():
    print_header("Module 6: Lindeman's 10% Trophic Energy Flow (খাদ্যশৃঙ্খল শক্তি প্রবাহ - ১৩শ অধ্যায়)")
    energy = get_float_input("Enter Total Energy of Producers (Level 1) in Joules: ", lambda x: x > 0)

    e1 = energy
    e2 = e1 * 0.10
    e3 = e2 * 0.10
    e4 = e3 * 0.10

    print("\n--- ECOLOGICAL ENERGY PYRAMID (10% RULE) ---")
    print(f"  ▲  [Level 4] Tertiary Consumers (সর্বোচ্চ খাদক): {e4:10.2f} J  (0.1%)")
    print(f" ▲▲▲ [Level 3] Secondary Consumers (গৌণ খাদক):    {e3:10.2f} J  (1.0%)")
    print(f"▲▲▲▲▲[Level 2] Primary Consumers (তৃণভোজী):       {e2:10.2f} J  (10.0%)")
    print(f"█████[Level 1] Producers (উৎপাদক সবুজ উদ্ভিদ):   {e1:10.2f} J  (100.0%)")

    total_loss = e1 - e4
    print(f"\n[Energy Dissipation Analysis]:")
    print(f"  • Energy transferred to top carnivore: {e4:.2f} J ({(e4/e1)*100:.2f}%)")
    print(f"  • Total energy lost as respiratory heat & waste: {total_loss:.2f} J ({((e1-e4)/e1)*100:.1f}%)")
    print(f"  • Rationale: In any food chain, around 90% of available energy is dissipated as heat at each step.")
    press_enter_to_continue()

# --- MODULE 7: BLOOD GROUP COMPATIBILITY (CHAPTER 6) ---
def run_blood_module():
    print_header("Module 7: Blood Group Compatibility (রক্তের গ্রুপ সামঞ্জস্য - ৬ষ্ঠ অধ্যায়)")
    valid_groups = list(BLOOD_DONATIONS.keys())
    print(f"Valid Blood Groups: {', '.join(valid_groups)}")
    donor = input("Enter Donor blood group: ").strip().upper()
    recipient = input("Enter Recipient blood group: ").strip().upper()

    if donor not in BLOOD_DONATIONS or recipient not in BLOOD_DONATIONS:
        print("Error: Invalid blood group. Use standard notation like A+, O-, AB+, etc.")
        press_enter_to_continue()
        return

    allowed = BLOOD_DONATIONS[donor]
    compatible = recipient in allowed

    print(f"\n[Transfusion Result]: Donor {donor} ➔ Recipient {recipient}")
    if compatible:
        print("  Status: SAFE TRANSFUSION (রক্তদান নিরাপদ)")
        print(f"  Explanation: {donor} red blood cell antigens are compatible with {recipient} plasma.")
    else:
        print("  Status: DANGEROUS / INCOMPATIBLE (মারাত্মক প্রাণঘাতী ঝুঁকি)")
        print(f"  Explanation: Recipient antibodies will cause immediate agglutination (clumping) of donor RBCs.")

    if donor == 'O-':
        print("  Note: O- is the Universal Donor (সার্বজনীন দাতা) for RBC transfusions.")
    if recipient == 'AB+':
        print("  Note: AB+ is the Universal Recipient (সার্বজনীন গ্রহীতা) for RBC transfusions.")
    press_enter_to_continue()

def main():
    while True:
        print_header("NCTB SSC Biology Solutions & Equation Calculator")
        print("1. Body Mass Index (BMI) & Weight Status (৫ম অধ্যায়)")
        print("2. BMR & Daily Caloric Needs (TDEE) (৫ম অধ্যায়)")
        print("3. Bioenergetics & Respiration ATP Yield (৪র্থ অধ্যায়)")
        print("4. Mendelian Monohybrid Cross (Punnett Square) (১২শ অধ্যায়)")
        print("5. Sex-Linked Trait Cross (Color Blindness) ( ১২শ অধ্যায়)")
        print("6. Lindeman's 10% Trophic Energy Flow (১৩শ অধ্যায়)")
        print("7. Blood Group Compatibility Checker (৬ষ্ঠ অধ্যায়)")
        print("8. Exit Application")

        choice = input("\nSelect a module (1-8): ").strip()
        if choice == '1': run_bmi_module()
        elif choice == '2': run_bmr_module()
        elif choice == '3': run_respiration_module()
        elif choice == '4': run_monohybrid_module()
        elif choice == '5': run_sex_linked_module()
        elif choice == '6': run_trophic_module()
        elif choice == '7': run_blood_module()
        elif choice == '8':
            print("\nThank you for using the SSC Biology Calculator. Best of luck in your board exams!\n")
            break
        else:
            print("Invalid selection. Please choose an option from 1 to 8.")

if __name__ == '__main__':
    main()
