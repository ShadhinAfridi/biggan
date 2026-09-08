#!/usr/bin/env python3
"""
SSC General Mathematics Equation & Solution Calculator
Developed as an interactive CLI companion for SSC Math board questions.
Compliant with NCTB curriculum (Classes 9-10).
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

def print_header(title):
    print("\n" + "="*65)
    print(f" {title.upper()} ".center(65, "="))
    print("="*65)

def press_enter_to_continue():
    input("\nPress [Enter] to return to the menu...")

def get_float_input(prompt, condition=None, error_msg="Invalid input. Please enter a valid number."):
    while True:
        try:
            val = float(input(prompt))
            if condition and not condition(val):
                print(f"Error: {error_msg}")
                continue
            return val
        except ValueError:
            print("Error: Input must be a number. Please try again.")

def get_int_input(prompt, condition=None, error_msg="Invalid input."):
    while True:
        try:
            val = int(input(prompt))
            if condition and not condition(val):
                print(f"Error: {error_msg}")
                continue
            return val
        except ValueError:
            print("Error: Input must be an integer. Please try again.")

# --- CHAPTER 2: SETS & FUNCTIONS ---
def run_chapter_2():
    while True:
        print_header("Chapter 2: Sets & Functions (সেট ও ফাংশন)")
        print("1. Power Set Elements (P(A) = 2^n)")
        print("2. Cartesian Product (C x D)")
        print("3. Back to Main Menu")
        choice = input("\nSelect an option (1-3): ").strip()

        if choice == '1':
            n = get_int_input("Enter the number of elements in Set A (n >= 0): ", lambda x: x >= 0, "n must be a non-negative integer.")
            ans = 2**n
            print(f"\n[NCTB Formula]: n(P(A)) = 2^n")
            print(f"  Given elements in set n = {n}")
            print(f"  Number of subsets n(P(A)) = 2^{n} = {ans} subsets")
            print(f"  Proper subsets (প্রকৃত উপসেট) = 2^n - 1 = {ans - 1 if ans > 0 else 0}")
            press_enter_to_continue()
        elif choice == '2':
            c_in = input("Enter elements of Set C (comma-separated, e.g., a, b, c): ")
            d_in = input("Enter elements of Set D (comma-separated, e.g., 1, 2): ")
            C = [x.strip() for x in c_in.split(",") if x.strip()]
            D = [y.strip() for y in d_in.split(",") if y.strip()]

            C_set = list(dict.fromkeys(C))
            D_set = list(dict.fromkeys(D))

            cartesian = [(x, y) for x in C_set for y in D_set]
            print(f"\nSet C = {{{', '.join(C_set)}}}")
            print(f"Set D = {{{', '.join(D_set)}}}")
            print(f"[Formula]: C x D = {{(x, y) : x \u2208 C and y \u2208 D}}")
            print(f"C x D = {{{', '.join([str(p) for p in cartesian])}}}")
            print(f"Total ordered pairs n(C x D) = {len(cartesian)}")
            press_enter_to_continue()
        elif choice == '3':
            break
        else:
            print("Invalid option. Please try again.")

# --- CHAPTER 3: ALGEBRAIC EXPRESSIONS ---
def run_chapter_3():
    while True:
        print_header("Chapter 3: Algebraic Expressions (বীজগাণিতিক রাশি)")
        print("1. Find a^2 + b^2 and (a-b)^2 given (a+b) and ab")
        print("2. Find a^2 + b^2 and (a+b)^2 given (a-b) and ab")
        print("3. Find a^3 + b^3 given (a+b) and ab")
        print("4. Find a^3 - b^3 given (a-b) and ab")
        print("5. Find a^2 + b^2 + c^2 given (a+b+c) and (ab+bc+ca)")
        print("6. Find ab + bc + ca given (a+b+c) and (a^2+b^2+c^2)")
        print("7. Back to Main Menu")
        choice = input("\nSelect an option (1-7): ").strip()

        if choice == '1':
            apb = get_float_input("Enter sum of two numbers (a + b): ")
            ab = get_float_input("Enter product of two numbers (ab): ")
            a2b2 = apb**2 - 2*ab
            amb2 = apb**2 - 4*ab
            print(f"\n[Formulas used]:")
            print(f"  1) a^2 + b^2 = (a+b)^2 - 2ab = ({apb})^2 - 2({ab}) = {a2b2}")
            print(f"  2) (a-b)^2   = (a+b)^2 - 4ab = ({apb})^2 - 4({ab}) = {amb2}")
            press_enter_to_continue()
        elif choice == '2':
            amb = get_float_input("Enter difference of two numbers (a - b): ")
            ab = get_float_input("Enter product of two numbers (ab): ")
            a2b2 = amb**2 + 2*ab
            apb2 = amb**2 + 4*ab
            print(f"\n[Formulas used]:")
            print(f"  1) a^2 + b^2 = (a-b)^2 + 2ab = ({amb})^2 + 2({ab}) = {a2b2}")
            print(f"  2) (a+b)^2   = (a-b)^2 + 4ab = ({amb})^2 + 4({ab}) = {apb2}")
            press_enter_to_continue()
        elif choice == '3':
            apb = get_float_input("Enter sum of two numbers (a + b): ")
            ab = get_float_input("Enter product of two numbers (ab): ")
            a3b3 = apb**3 - 3*ab*apb
            print(f"\n[Formula used]:")
            print(f"  a^3 + b^3 = (a+b)^3 - 3ab(a+b)")
            print(f"  a^3 + b^3 = ({apb})^3 - 3({ab})({apb}) = {a3b3}")
            press_enter_to_continue()
        elif choice == '4':
            amb = get_float_input("Enter difference of two numbers (a - b): ")
            ab = get_float_input("Enter product of two numbers (ab): ")
            a3b3 = amb**3 + 3*ab*amb
            print(f"\n[Formula used]:")
            print(f"  a^3 - b^3 = (a-b)^3 + 3ab(a-b)")
            print(f"  a^3 - b^3 = ({amb})^3 - 3({ab})({amb}) = {a3b3}")
            press_enter_to_continue()
        elif choice == '5':
            sum_abc = get_float_input("Enter trinomial sum (a + b + c): ")
            sum_pair = get_float_input("Enter pairwise sum (ab + bc + ca): ")
            sum_sq = sum_abc**2 - 2*sum_pair
            print(f"\n[Formula used]:")
            print(f"  a^2 + b^2 + c^2 = (a + b + c)^2 - 2(ab + bc + ca)")
            print(f"  a^2 + b^2 + c^2 = ({sum_abc})^2 - 2({sum_pair}) = {sum_sq}")
            press_enter_to_continue()
        elif choice == '6':
            sum_abc = get_float_input("Enter trinomial sum (a + b + c): ")
            sum_sq = get_float_input("Enter sum of squares (a^2 + b^2 + c^2): ")
            sum_pair = (sum_abc**2 - sum_sq) / 2.0
            print(f"\n[Formula used]:")
            print(f"  ab + bc + ca = [(a + b + c)^2 - (a^2 + b^2 + c^2)] / 2")
            print(f"  ab + bc + ca = [({sum_abc})^2 - ({sum_sq})] / 2 = {sum_pair}")
            press_enter_to_continue()
        elif choice == '7':
            break
        else:
            print("Invalid option. Please try again.")

# --- CHAPTER 4: EXPONENTS AND LOGARITHMS ---
def run_chapter_4():
    while True:
        print_header("Chapter 4: Exponents & Logarithms (সূচক ও লগারিদম)")
        print("1. Power Evaluator (a^b)")
        print("2. Logarithm Evaluator (log_a N)")
        print("3. Convert Real Number to Scientific Notation (A x 10^n)")
        print("4. Back to Main Menu")
        choice = input("\nSelect an option (1-4): ").strip()

        if choice == '1':
            a = get_float_input("Enter base (a): ")
            b = get_float_input("Enter exponent (b): ")
            try:
                ans = a**b
                print(f"\nResult: {a}^{b} = {ans}")
            except OverflowError:
                print("\nError: The result is too large to represent.")
            except ZeroDivisionError:
                print("\nError: Cannot raise zero to a negative power.")
            except ValueError:
                print("\nError: Negative base with fractional exponent results in a complex number.")
            press_enter_to_continue()
        elif choice == '2':
            base = get_float_input("Enter logarithm base (a > 0 and a != 1): ", lambda x: x > 0 and x != 1, "Base must be positive and not equal to 1.")
            N = get_float_input("Enter the target number (N > 0): ", lambda x: x > 0, "Logarithm input N must be strictly positive.")
            ans = math.log(N, base)
            print(f"\n[Formula]: log_a(N) = ln(N) / ln(a)")
            print(f"Result: log_{base}({N}) = {ans:.6f}")
            press_enter_to_continue()
        elif choice == '3':
            num = get_float_input("Enter any positive or negative real number: ")
            if num == 0:
                print("\nScientific Notation: 0 = 0 \u00d7 10^0")
            else:
                exp = int(math.floor(math.log10(abs(num))))
                mantissa = num / (10**exp)
                print(f"\n[Scientific Notation Form]: A \u00d7 10^n  (where 1 \u2264 |A| < 10, n \u2208 \u2124)")
                print(f"  Number = {num}")
                print(f"  Scientific Form = {mantissa:.6f} \u00d7 10^{exp}")
            press_enter_to_continue()
        elif choice == '4':
            break
        else:
            print("Invalid option. Please try again.")

# --- CHAPTER 9 & 10: TRIGONOMETRY, HEIGHTS & DISTANCES ---
def run_chapter_9_10():
    while True:
        print_header("Chapter 9 & 10: Trigonometry & Heights (ত্রিকোণমিতি ও দূরত্ব)")
        print("1. Calculate 6 Trigonometric Ratios of an Angle")
        print("2. Simple Right Triangle: Find Height given Angle & Distance")
        print("3. Simple Right Triangle: Find Distance given Angle & Height")
        print("4. Simple Right Triangle: Find Angle of Elevation given Height & Distance")
        print("5. Board Special CQ: Tower Height observed from Two Points (d = h(cot \u03b81 \u00b1 cot \u03b82))")
        print("6. Board Special CQ: Broken Tree Problem (Pole of height H broken at height x)")
        print("7. Back to Main Menu")
        choice = input("\nSelect an option (1-7): ").strip()

        if choice == '1':
            deg = get_float_input("Enter angle \u03b8 in degrees: ")
            rad = math.radians(deg)
            sin_v = math.sin(rad)
            cos_v = math.cos(rad)

            tan_v = math.tan(rad) if abs(cos_v) > 1e-12 else float('nan')
            csc_v = 1.0 / sin_v if abs(sin_v) > 1e-12 else float('nan')
            sec_v = 1.0 / cos_v if abs(cos_v) > 1e-12 else float('nan')
            cot_v = 1.0 / tan_v if abs(tan_v) > 1e-12 and not math.isnan(tan_v) else (float('nan') if abs(sin_v) > 1e-12 else float('nan'))

            print(f"\nAngle \u03b8 = {deg}\u00b0 ({rad:.5f} radians)")
            print(f"  sin(\u03b8) = {sin_v:.5f}")
            print(f"  cos(\u03b8) = {cos_v:.5f}")
            print(f"  tan(\u03b8) = {tan_v:.5f}" if not math.isnan(tan_v) else "  tan(\u03b8) = Undefined")
            print(f"  csc(\u03b8) = {csc_v:.5f}" if not math.isnan(csc_v) else "  csc(\u03b8) = Undefined")
            print(f"  sec(\u03b8) = {sec_v:.5f}" if not math.isnan(sec_v) else "  sec(\u03b8) = Undefined")
            print(f"  cot(\u03b8) = {cot_v:.5f}" if not math.isnan(cot_v) else "  cot(\u03b8) = Undefined")
            press_enter_to_continue()

        elif choice == '2':
            theta = get_float_input("Enter angle of elevation in degrees (0 < \u03b8 < 90): ", lambda x: 0 < x < 90, "Angle must be between 0 and 90 degrees.")
            adj = get_float_input("Enter horizontal distance from base (adjacent > 0): ", lambda x: x > 0, "Distance must be positive.")
            opp = adj * math.tan(math.radians(theta))
            hyp = adj / math.cos(math.radians(theta))
            print(f"\n[Calculated height]:")
            print(f"  Formula: Height = Distance \u00d7 tan(\u03b8)")
            print(f"  Height (Opposite Side) = {opp:.4f} units")
            print(f"  Line of Sight (Hypotenuse) = {hyp:.4f} units")
            press_enter_to_continue()

        elif choice == '3':
            theta = get_float_input("Enter angle of elevation in degrees (0 < \u03b8 < 90): ", lambda x: 0 < x < 90, "Angle must be between 0 and 90 degrees.")
            opp = get_float_input("Enter height of object (opposite > 0): ", lambda x: x > 0, "Height must be positive.")
            adj = opp / math.tan(math.radians(theta))
            hyp = opp / math.sin(math.radians(theta))
            print(f"\n[Calculated distance]:")
            print(f"  Formula: Distance = Height / tan(\u03b8)")
            print(f"  Distance (Adjacent Side) = {adj:.4f} units")
            print(f"  Line of Sight (Hypotenuse) = {hyp:.4f} units")
            press_enter_to_continue()

        elif choice == '4':
            opp = get_float_input("Enter height of object (opposite > 0): ", lambda x: x > 0, "Height must be positive.")
            adj = get_float_input("Enter distance from base (adjacent > 0): ", lambda x: x > 0, "Distance must be positive.")
            rad_angle = math.atan2(opp, adj)
            deg_angle = math.degrees(rad_angle)
            hyp = math.sqrt(opp**2 + adj**2)
            print(f"\n[Calculated Angle]:")
            print(f"  Formula: \u03b8 = arctan(Height / Distance)")
            print(f"  Angle of Elevation (\u03b8) = {deg_angle:.4f}\u00b0")
            print(f"  Hypotenuse (Line of Sight) = {hyp:.4f} units")
            press_enter_to_continue()

        elif choice == '5':
            print("\n[Two Observation Points Problem]")
            print("1. Both points on the SAME side of the tower (d = h(cot \u03b81 - cot \u03b82))")
            print("2. Points on OPPOSITE sides of the tower (d = h(cot \u03b81 + cot \u03b82))")
            sub_choice = input("Select geometry (1-2): ").strip()
            if sub_choice not in ['1', '2']:
                print("Invalid selection.")
                press_enter_to_continue()
                continue

            th1 = get_float_input("Enter smaller angle \u03b81 in degrees (farther point, 0 < \u03b81 < 90): ", lambda x: 0 < x < 90, "Angle must be between 0 and 90.")
            th2 = get_float_input("Enter larger angle \u03b82 in degrees (closer point, \u03b82 > \u03b81): ", lambda x: x > th1 and x < 90, "Closer angle must be greater than \u03b81 and < 90.")
            dist = get_float_input("Enter distance d between the two observation points (d > 0): ", lambda x: x > 0, "Distance must be positive.")

            cot1 = 1.0 / math.tan(math.radians(th1))
            cot2 = 1.0 / math.tan(math.radians(th2))

            if sub_choice == '1':
                # Same side: d = h * (cot1 - cot2) => h = d / (cot1 - cot2)
                h = dist / (cot1 - cot2)
                print(f"\n[Solution Steps (Same Side)]:")
                print(f"  cot(\u03b81) = cot({th1}\u00b0) = {cot1:.5f}")
                print(f"  cot(\u03b82) = cot({th2}\u00b0) = {cot2:.5f}")
                print(f"  Formula: h = d / (cot \u03b81 - cot \u03b82)")
                print(f"  Tower Height (h) = {dist} / ({cot1:.4f} - {cot2:.4f}) = {h:.4f} units")
                print(f"  Distance to closer point = h \u00d7 cot({th2}\u00b0) = {h * cot2:.4f} units")
            else:
                # Opposite sides: d = h * (cot1 + cot2) => h = d / (cot1 + cot2)
                h = dist / (cot1 + cot2)
                print(f"\n[Solution Steps (Opposite Sides)]:")
                print(f"  Formula: h = d / (cot \u03b81 + cot \u03b82)")
                print(f"  Tower Height (h) = {dist} / ({cot1:.4f} + {cot2:.4f}) = {h:.4f} units")
            press_enter_to_continue()

        elif choice == '6':
            print("\n[Broken Tree Problem (গাছ ভাঙার সমস্যা)]")
            print("A tree of total height H breaks at height x without complete detachment,")
            print("and touches the ground making angle \u03b8 with the ground.")
            H = get_float_input("Enter total height of tree H (> 0): ", lambda x: x > 0, "Total height must be positive.")
            theta = get_float_input("Enter angle with ground \u03b8 in degrees (0 < \u03b8 < 90): ", lambda x: 0 < x < 90, "Angle must be between 0 and 90 degrees.")

            sin_th = math.sin(math.radians(theta))
            # (H - x) * sin(theta) = x  =>  H*sin(theta) = x(1 + sin(theta)) => x = H*sin(theta) / (1 + sin(theta))
            x = (H * sin_th) / (1.0 + sin_th)
            broken_part = H - x
            dist_ground = broken_part * math.cos(math.radians(theta))

            print(f"\n[NCTB Board CQ Solution]:")
            print(f"  Let height where tree broke = x")
            print(f"  Broken part length = H - x = {H} - x")
            print(f"  Equation: sin(\u03b8) = x / (H - x)")
            print(f"  x = [H \u00d7 sin(\u03b8)] / [1 + sin(\u03b8)]")
            print(f"  Height of intact trunk (x) = {x:.4f} units")
            print(f"  Length of broken fallen part (H - x) = {broken_part:.4f} units")
            print(f"  Distance from base where top touches ground = {dist_ground:.4f} units")
            press_enter_to_continue()

        elif choice == '7':
            break
        else:
            print("Invalid option. Please try again.")

# --- CHAPTER 11: ALGEBRAIC RATIO & PROPORTION ---
def run_chapter_11():
    print_header("Chapter 11: Ratio & Proportion (যোজন-বিয়োজন)")
    print("This calculator performs Componendo-Dividendo transformations on a rational term.")
    print("Rule: If a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d)")

    a = get_float_input("Enter term 'a' (Numerator): ")
    b = get_float_input("Enter term 'b' (Denominator): ")
    if a == b:
        print("\nError: Componendo-Dividendo requires a != b (otherwise denominator a - b = 0).")
        press_enter_to_continue()
        return

    componendo_dividendo = (a + b) / (a - b)
    print(f"\n[Results]:")
    print(f"  Original term: a/b = {a}/{b} = {a/b if b != 0 else 'Undefined':.4f}")
    print(f"  Componendo-Dividendo: (a+b)/(a-b) = ({a} + {b}) / ({a} - {b}) = {componendo_dividendo:.4f}")
    press_enter_to_continue()

# --- CHAPTER 16: MENSURATION (2D & 3D GEOMETRY) ---
def run_chapter_16():
    while True:
        print_header("Chapter 16: Mensuration (পরিমিতি — ক্ষেত্রফল ও ঘনবস্তু)")
        print("1. Equilateral Triangle Area ((\u221a3 / 4) * a^2)")
        print("2. Triangle Area (2 Sides & Included Angle: 0.5 * a * b * sin \u03b8)")
        print("3. General Triangle Area (Heron's Formula: \u221a[s(s-a)(s-b)(s-c)])")
        print("4. Circle Area (\u03c0r^2) & Circumference (2\u03c0r)")
        print("5. Rhombus Area (0.5 * d1 * d2)")
        print("6. Regular n-gon Area ((n * a^2) / (4 * tan(180\u00b0 / n)))")
        print("7. Cube Surface Area (6a^2) & Volume (a^3)")
        print("8. Cylinder Area, Total Area & Volume")
        print("9. Back to Main Menu")
        choice = input("\nSelect an option (1-9): ").strip()

        if choice == '1':
            a = get_float_input("Enter side length of equilateral triangle (a > 0): ", lambda x: x > 0, "Side length must be positive.")
            area = (math.sqrt(3)/4.0) * a**2
            print(f"\n  Formula: Area = (\u221a3 / 4) \u00d7 a^2")
            print(f"  Area = (\u221a3 / 4) \u00d7 {a}^2 = {area:.4f} sq. units")
            press_enter_to_continue()
        elif choice == '2':
            a = get_float_input("Enter side a (> 0): ", lambda x: x > 0, "Side must be positive.")
            b = get_float_input("Enter side b (> 0): ", lambda x: x > 0, "Side must be positive.")
            theta = get_float_input("Enter included angle in degrees (0 < \u03b8 < 180): ", lambda x: 0 < x < 180, "Angle must be between 0 and 180 degrees.")
            area = 0.5 * a * b * math.sin(math.radians(theta))
            print(f"\n  Formula: Area = 0.5 \u00d7 a \u00d7 b \u00d7 sin(\u03b8)")
            print(f"  Area = 0.5 \u00d7 {a} \u00d7 {b} \u00d7 sin({theta}\u00b0) = {area:.4f} sq. units")
            press_enter_to_continue()
        elif choice == '3':
            a = get_float_input("Enter side a (> 0): ", lambda x: x > 0, "Side must be positive.")
            b = get_float_input("Enter side b (> 0): ", lambda x: x > 0, "Side must be positive.")
            c = get_float_input("Enter side c (> 0): ", lambda x: x > 0, "Side must be positive.")
            if a + b <= c or a + c <= b or b + c <= a:
                print("\nError: Triangle Inequality Theorem violated. Sum of any two sides must strictly exceed the third side.")
                press_enter_to_continue()
                continue
            s = (a + b + c) / 2.0
            area = math.sqrt(s * (s - a) * (s - b) * (s - c))
            print(f"\n  [Heron's Formula Steps]:")
            print(f"  Semi-perimeter (s) = ({a} + {b} + {c}) / 2 = {s:.4f}")
            print(f"  s - a = {s - a:.4f}, s - b = {s - b:.4f}, s - c = {s - c:.4f}")
            print(f"  Formula: Area = \u221a[s(s-a)(s-b)(s-c)]")
            print(f"  Area = {area:.4f} sq. units")
            press_enter_to_continue()
        elif choice == '4':
            r = get_float_input("Enter radius r (> 0): ", lambda x: x > 0, "Radius must be positive.")
            area = math.pi * r**2
            circ = 2 * math.pi * r
            print(f"\n  Formulas: Area = \u03c0r^2, Circumference = 2\u03c0r")
            print(f"  Area = \u03c0 \u00d7 {r}^2 = {area:.4f} sq. units")
            print(f"  Circumference = 2\u03c0 \u00d7 {r} = {circ:.4f} units")
            press_enter_to_continue()
        elif choice == '5':
            d1 = get_float_input("Enter diagonal 1 (d1 > 0): ", lambda x: x > 0, "Diagonal must be positive.")
            d2 = get_float_input("Enter diagonal 2 (d2 > 0): ", lambda x: x > 0, "Diagonal must be positive.")
            area = 0.5 * d1 * d2
            print(f"\n  Formula: Area = 0.5 \u00d7 d1 \u00d7 d2")
            print(f"  Area of Rhombus = 0.5 \u00d7 {d1} \u00d7 {d2} = {area:.4f} sq. units")
            press_enter_to_continue()
        elif choice == '6':
            n = get_int_input("Enter number of sides n (n >= 3): ", lambda x: x >= 3, "Polygon must have at least 3 sides.")
            a = get_float_input("Enter side length a (> 0): ", lambda x: x > 0, "Side length must be positive.")
            area = (n * a**2) / (4.0 * math.tan(math.radians(180.0 / n)))
            print(f"\n  Formula: Area = (n \u00d7 a^2) / (4 \u00d7 tan(180\u00b0 / n))")
            print(f"  Area of Regular {n}-gon = {area:.4f} sq. units")
            press_enter_to_continue()
        elif choice == '7':
            a = get_float_input("Enter cube edge length a (> 0): ", lambda x: x > 0, "Edge must be positive.")
            face_d = a * math.sqrt(2)
            body_d = a * math.sqrt(3)
            sa = 6 * a**2
            vol = a**3
            print(f"\n  [Cube Calculations]:")
            print(f"  Face Diagonal (a\u221a2) = {face_d:.4f} units")
            print(f"  Body Diagonal (a\u221a3) = {body_d:.4f} units")
            print(f"  Total Surface Area (6a^2) = {sa:.4f} sq. units")
            print(f"  Volume (a^3) = {vol:.4f} cubic units")
            press_enter_to_continue()
        elif choice == '8':
            r = get_float_input("Enter cylinder base radius r (> 0): ", lambda x: x > 0, "Radius must be positive.")
            h = get_float_input("Enter cylinder height h (> 0): ", lambda x: x > 0, "Height must be positive.")
            vol = math.pi * r**2 * h
            csa = 2 * math.pi * r * h
            tsa = 2 * math.pi * r * (r + h)
            print(f"\n  [Cylinder Calculations]:")
            print(f"  Volume (\u03c0r^2h) = {vol:.4f} cubic units")
            print(f"  Curved Surface Area (2\u03c0rh) = {csa:.4f} sq. units")
            print(f"  Total Surface Area (2\u03c0r(r+h)) = {tsa:.4f} sq. units")
            press_enter_to_continue()
        elif choice == '9':
            break
        else:
            print("Invalid option. Please try again.")

# --- CHAPTER 17: STATISTICS ---
def run_chapter_17():
    print_header("Chapter 17: Statistics (পরিসংখ্যান — Grouped Data)")
    print("Complete NCTB Board Solver for Arithmetic Mean, Median, and Mode.")

    n_classes = get_int_input("Enter the number of class intervals: ", lambda x: x > 0, "Number of classes must be greater than 0.")
    classes = []
    frequencies = []
    cumulative = []
    total_f = 0

    print("\nPlease enter details for each class interval sequentially:")
    for i in range(n_classes):
        print(f"\n--- Class {i+1} ---")
        lower = get_float_input(f"  Class {i+1} Lower Limit: ")
        upper = get_float_input(f"  Class {i+1} Upper Limit (> {lower}): ", lambda x: x > lower, "Upper limit must be strictly greater than lower limit.")
        freq = get_float_input(f"  Class {i+1} Frequency (>= 0): ", lambda x: x >= 0, "Frequency cannot be negative.")

        mid = (lower + upper) / 2.0
        classes.append({
            "lower": lower,
            "upper": upper,
            "mid": mid,
            "freq": freq
        })
        frequencies.append(freq)
        total_f += freq
        cumulative.append(total_f)

    if total_f == 0:
        print("\nError: Total frequency is 0. Cannot compute statistical metrics.")
        press_enter_to_continue()
        return

    # In NCTB, class width h can be calculated from boundaries:
    # For continuous intervals: upper - lower
    # For discrete intervals like 31-40: (upper - lower + 1)
    # Here we infer: if classes[1]['lower'] == classes[0]['upper'], continuous; else discrete
    if n_classes > 1 and classes[1]['lower'] == classes[0]['upper']:
        h = classes[0]['upper'] - classes[0]['lower']
    elif n_classes > 1 and classes[1]['lower'] > classes[0]['upper']:
        h = classes[1]['lower'] - classes[0]['lower']
    else:
        h = classes[0]['upper'] - classes[0]['lower']

    # 1) Mean (Shortcut Step Deviation)
    mid_idx = n_classes // 2
    a = classes[mid_idx]["mid"]

    sum_fu = 0.0
    for cl in classes:
        u = round((cl["mid"] - a) / h)
        sum_fu += cl["freq"] * u
    mean_val = a + (sum_fu / total_f) * h

    # 2) Median
    # Median position is n / 2. Median class is the first interval where cumulative frequency >= n/2.
    half_n = total_f / 2.0
    median_class_idx = -1
    for idx, c_freq in enumerate(cumulative):
        if c_freq >= half_n:
            median_class_idx = idx
            break

    median_val = None
    if median_class_idx != -1:
        med_class = classes[median_class_idx]
        L_med = med_class["lower"]
        Fc = cumulative[median_class_idx - 1] if median_class_idx > 0 else 0.0
        f_m = med_class["freq"]
        if f_m > 0:
            median_val = L_med + ((half_n - Fc) / f_m) * h

    # 3) Mode
    # Modal class has maximum frequency
    max_f = max(frequencies)
    modal_idx = frequencies.index(max_f)
    modal_class = classes[modal_idx]

    L_mod = modal_class["lower"]
    f_modal = modal_class["freq"]
    # NCTB Directive: If modal class is first class, f_preceding = 0; if last class, f_succeeding = 0
    f_preceding = frequencies[modal_idx - 1] if modal_idx > 0 else 0.0
    f_succeeding = frequencies[modal_idx + 1] if modal_idx < n_classes - 1 else 0.0

    f1 = f_modal - f_preceding
    f2 = f_modal - f_succeeding

    mode_val = None
    if (f1 + f2) > 0:
        mode_val = L_mod + (f1 / (f1 + f2)) * h
    else:
        mode_val = modal_class["mid"]

    # PRINT DETAILED TABLE
    print_header("Grouped Statistics Analysis Results (NCTB Format)")
    print(f"{'Class Interval':^18} | {'Midpoint (xi)':^15} | {'Freq (fi)':^10} | {'Cum Freq (Fc)':^12} | {'Deviation (ui)':^15}")
    print("-" * 80)
    for idx, cl in enumerate(classes):
        u = round((cl["mid"] - a) / h)
        print(f"{cl['lower']:>7.2f} - {cl['upper']:<7.2f} | {cl['mid']:^15.2f} | {cl['freq']:^10.2f} | {cumulative[idx]:^12.2f} | {u:^15.2f}")

    print("-" * 80)
    print(f"Total Observations (n)  = {total_f:.2f}")
    print(f"Assumed Mean (a)        = {a:.2f}")
    print(f"Class Interval Width (h)= {h:.2f}")
    print("=" * 80)

    print(f"1. ARITHMETIC MEAN (সংক্ষিপ্ত পদ্ধতিতে গড়):")
    print(f"   Formula: Mean = a + (\u2211(fi \u00d7 ui) / n) \u00d7 h")
    print(f"   Mean = {a:.4f} + ({sum_fu:.4f} / {total_f:.4f}) \u00d7 {h:.4f} = {mean_val:.4f}\n")

    print(f"2. MEDIAN (মধ্যক):")
    print(f"   Median position = n / 2 = {total_f:.2f} / 2 = {half_n:.2f}")
    if median_class_idx != -1:
        print(f"   First cumulative frequency \u2265 {half_n:.2f} is {cumulative[median_class_idx]:.2f}")
        print(f"   Median Class Interval   = {classes[median_class_idx]['lower']:.2f} - {classes[median_class_idx]['upper']:.2f}")
        print(f"   Formula: Median = L + ((n/2 - Fc) / fm) \u00d7 h")
        print(f"   where L = {L_med:.2f}, n/2 = {half_n:.2f}, Fc = {Fc:.2f}, fm = {f_m:.2f}, h = {h:.2f}")
        print(f"   Median = {L_med:.4f} + (({half_n:.4f} - {Fc:.4f}) / {f_m:.4f}) \u00d7 {h:.4f} = {median_val:.4f}\n")
    else:
        print("   Median cannot be calculated.\n")

    print(f"3. MODE (প্রচুরক):")
    print(f"   Modal Class (Highest Freq {f_modal:.2f}) = {modal_class['lower']:.2f} - {modal_class['upper']:.2f}")
    print(f"   f1 = fm - f(m-1) = {f_modal:.2f} - {f_preceding:.2f} = {f1:.2f}")
    print(f"   f2 = fm - f(m+1) = {f_modal:.2f} - {f_succeeding:.2f} = {f2:.2f}")
    print(f"   Formula: Mode = L + (f1 / (f1 + f2)) \u00d7 h")
    if mode_val is not None:
        print(f"   Mode = {L_mod:.4f} + ({f1:.4f} / ({f1:.4f} + {f2:.4f})) \u00d7 {h:.4f} = {mode_val:.4f}")
    else:
        print("   Mode cannot be determined.")

    press_enter_to_continue()

# --- MAIN CONTROLLER ---
def main():
    while True:
        print_header("SSC General Mathematics Equation & Solution Calculator")
        print("Select the curriculum chapter you wish to solve:")
        print("1. Chapter 2: Set and Function (সেট ও ফাংশন)")
        print("2. Chapter 3: Algebraic Expressions (বীজগাণিতিক রাশি)")
        print("3. Chapter 4: Exponents and Logarithms (সূচক ও লগারিদম)")
        print("4. Chapter 9 & 10: Trigonometry, Heights & Distances (ত্রিকোণমিতি ও উচ্চতা)")
        print("5. Chapter 11: Algebraic Ratio & Proportion (যোজন-বিয়োজন)")
        print("6. Chapter 16: Mensuration (পরিমিতি)")
        print("7. Chapter 17: Statistics (পরিসংখ্যান)")
        print("8. Exit Application")

        choice = input("\nEnter choice (1-8): ").strip()

        if choice == '1':
            run_chapter_2()
        elif choice == '2':
            run_chapter_3()
        elif choice == '3':
            run_chapter_4()
        elif choice == '4':
            run_chapter_9_10()
        elif choice == '5':
            run_chapter_11()
        elif choice == '6':
            run_chapter_16()
        elif choice == '7':
            run_chapter_17()
        elif choice == '8':
            print("\nThank you for using the SSC Math Calculator. Goodbye!\n")
            sys.exit(0)
        else:
            print("Invalid selection. Please input a number from 1 to 8.")
            press_enter_to_continue()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nApplication interrupted. Goodbye!")
        sys.exit(0)
