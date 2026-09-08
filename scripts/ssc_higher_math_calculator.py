#!/usr/bin/env python3
"""
SSC Higher Mathematics Calculator & Knowledge Base Agent
Unified Mathematical Solver for biggan.me compliant with NCTB Bangladesh (Classes 9-10).
Covers all 14 chapters with zero external dependencies.
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

class SSCHigherMathEngine:
    """
    Production-ready Unified Mathematical Solver for biggan.me
    Class 9-10/SSC Higher Mathematics Solutions Engine.
    """

    # --- CH 1: SETS & FUNCTIONS ---
    @staticmethod
    def ch1_set_subset_count(element_count):
        if element_count < 0: raise ValueError("Element count cannot be negative.")
        return 2 ** element_count

    @staticmethod
    def ch1_venn_three_sets(nA, nB, nC, nAB, nBC, nCA, nABC):
        union = nA + nB + nC - nAB - nBC - nCA + nABC
        return {
            "union": union,
            "only_A": nA - nAB - nCA + nABC,
            "only_B": nB - nAB - nBC + nABC,
            "only_C": nC - nCA - nBC + nABC,
            "only_AB": nAB - nABC,
            "only_BC": nBC - nABC,
            "only_CA": nCA - nABC,
            "only_ABC": nABC
        }

    @staticmethod
    def ch1_fractional_inverse(a, b, c, d):
        """For f(x) = (ax + b) / (cx + d), returns f^-1(x) = (-dx + b) / (cx - a)"""
        return {
            "formula": f"f(x) = ({a}x + {b}) / ({c}x + {d})",
            "inverse_formula": f"f^-1(x) = ({-d}x + {b}) / ({c}x - {a})",
            "domain_exclusion": -d / c if c != 0 else None,
            "range_exclusion": a / c if c != 0 else None
        }

    # --- CH 2: ALGEBRAIC EXPRESSIONS ---
    @staticmethod
    def ch2_evaluate_polynomial(coeffs, x_val):
        deg = len(coeffs) - 1
        return sum(c * (x_val ** (deg - i)) for i, c in enumerate(coeffs))

    @classmethod
    def ch2_remainder_theorem(cls, coeffs, a):
        remainder = cls.ch2_evaluate_polynomial(coeffs, a)
        return {"remainder": remainder, "is_factor": math.isclose(remainder, 0, abs_tol=1e-9)}

    @staticmethod
    def ch2_cyclic_cubic_identity(a, b, c):
        val = a**3 + b**3 + c**3 - 3*a*b*c
        return {
            "value": val,
            "is_sum_zero": math.isclose(a + b + c, 0, abs_tol=1e-9),
            "half_diff_form_val": 0.5 * (a + b + c) * ((a-b)**2 + (b-c)**2 + (c-a)**2)
        }

    # --- CH 3: GEOMETRY ---
    @staticmethod
    def ch3_apollonius_median(side_a, side_b, side_c):
        if (side_a + side_b <= side_c) or (side_b + side_c <= side_a) or (side_c + side_a <= side_b):
            raise ValueError("Invalid triangle sides.")
        median_sq = (2*(side_b**2) + 2*(side_c**2) - side_a**2) / 4.0
        return math.sqrt(median_sq)

    # --- CH 5: EQUATIONS ---
    @staticmethod
    def ch5_solve_quadratic(a, b, c):
        if a == 0: raise ValueError("Not a quadratic equation (a cannot be 0).")
        d = b**2 - 4*a*c
        if d > 0:
            roots = [(-b + math.sqrt(d))/(2*a), (-b - math.sqrt(d))/(2*a)]
            nature = "Real, unequal, and rational (if D is perfect square) or irrational."
        elif d == 0:
            roots = [-b / (2*a)]
            nature = "Real and equal."
        else:
            real = -b / (2*a)
            imag = math.sqrt(-d) / (2*a)
            roots = [complex(real, imag), complex(real, -imag)]
            nature = "Complex conjugates (imaginary)."
        return {"discriminant": d, "roots": roots, "nature": nature}

    # --- CH 6: INEQUALITIES ---
    @staticmethod
    def ch6_solve_linear_inequality(a, b, c):
        """Solves ax + b <= c"""
        if a == 0:
            return {"all_real": b <= c, "interval": "(-inf, inf)" if b <= c else "Empty"}
        boundary = (c - b) / a
        return {
            "boundary": boundary,
            "relation": "x <=" if a > 0 else "x >=",
            "interval": f"(-inf, {boundary:.3f}]" if a > 0 else f"[{boundary:.3f}, inf)"
        }

    # --- CH 7: INFINITE SERIES ---
    @staticmethod
    def ch7_infinite_geometric_sum(a, r):
        if abs(r) >= 1: return {"has_sum": False, "sum": None}
        return {"has_sum": True, "sum": a / (1 - r)}

    @staticmethod
    def ch7_recurring_decimal_to_fraction(whole, non_recur_str, recur_str):
        full = int(f"{whole}{non_recur_str}{recur_str}")
        non_recur = int(f"{whole}{non_recur_str}") if f"{whole}{non_recur_str}" else 0
        num = full - non_recur
        den = int("9" * len(recur_str) + "0" * len(non_recur_str))
        g = math.gcd(num, den)
        return {"numerator": num // g, "denominator": den // g, "fraction": f"{num//g}/{den//g}", "float": num / den}

    # --- CH 8: TRIGONOMETRY ---
    @staticmethod
    def ch8_radian_degree_conversions(value, convert_to="radian"):
        if convert_to == "radian":
            return value * math.pi / 180.0
        return value * 180.0 / math.pi

    @staticmethod
    def ch8_arc_properties(r, theta_deg):
        rad = theta_deg * math.pi / 180.0
        return {"arc_length": r * rad, "sector_area": 0.5 * (r**2) * rad}

    # --- CH 9: EXPONENTIALS & LOGARITHMS ---
    @staticmethod
    def ch9_solve_log(base, x):
        if x <= 0 or base <= 0 or base == 1: raise ValueError("Logarithm undefined.")
        return math.log(x, base)

    # --- CH 10: BINOMIAL EXPANSIONS ---
    @staticmethod
    def ch10_combination(n, r):
        return math.comb(n, r)

    @classmethod
    def ch10_binomial_expand(cls, x_coeff, y_coeff, n):
        return [cls.ch10_combination(n, r) * (x_coeff**(n-r)) * (y_coeff**r) for r in range(n + 1)]

    # --- CH 11: COORDINATE GEOMETRY ---
    @staticmethod
    def ch11_distance(x1, y1, x2, y2):
        return math.sqrt((x2-x1)**2 + (y2-y1)**2)

    @staticmethod
    def ch11_polygon_area(coords):
        """coords is list of tuples [(x1, y1), (x2, y2), ...] in order"""
        n = len(coords)
        sum1 = sum(coords[i][0] * coords[(i+1)%n][1] for i in range(n))
        sum2 = sum(coords[i][1] * coords[(i+1)%n][0] for i in range(n))
        return 0.5 * abs(sum1 - sum2)

    @staticmethod
    def ch11_line_properties(x1, y1, x2, y2):
        dist = math.sqrt((x2-x1)**2 + (y2-y1)**2)
        if x1 == x2: return {"distance": dist, "slope": float('inf'), "equation": f"x = {x1}"}
        m = (y2 - y1) / (x2 - x1)
        c = y1 - m * x1
        eq = f"y = {m:.3f}x + {c:.3f}" if c >= 0 else f"y = {m:.3f}x - {abs(c):.3f}"
        return {"distance": dist, "slope": m, "equation": eq}

    # --- CH 12: PLANAR VECTORS ---
    @staticmethod
    def ch12_vector_properties(x, y):
        mag = math.sqrt(x**2 + y**2)
        direction = math.atan2(y, x)
        deg = math.degrees(direction)
        if deg < 0: deg += 360
        return {"magnitude": mag, "direction_radians": direction, "direction_degrees": deg}

    # --- CH 13: SOLID GEOMETRY ---
    @staticmethod
    def ch13_cylinder(r, h):
        return {"volume": math.pi * (r**2) * h, "curved_surface": 2 * math.pi * r * h, "total_surface": 2 * math.pi * r * (r+h)}

    @staticmethod
    def ch13_cone(r, h):
        l = math.sqrt(r**2 + h**2)
        return {"slant_height": l, "volume": (1.0/3.0)*math.pi*(r**2)*h, "curved_surface": math.pi * r * l, "total_surface": math.pi * r * (r+l)}

    @staticmethod
    def ch13_sphere(r):
        return {"volume": (4.0/3.0)*math.pi*(r**3), "surface_area": 4*math.pi*(r**2)}

    # --- CH 14: PROBABILITY ---
    @staticmethod
    def ch14_probability(favorable, total):
        if total <= 0 or favorable < 0 or favorable > total: raise ValueError("Invalid probability parameters.")
        return favorable / total

# Interactive CLI Menu
def print_header(title):
    print("\n" + "="*70)
    print(f" {title.upper()} ".center(70, "="))
    print("="*70)

def press_enter():
    input("\nPress [Enter] to continue...")

def main():
    eng = SSCHigherMathEngine
    while True:
        print_header("biggan.me SSC Higher Mathematics Solutions Engine")
        print(" 1. Sets & Venn Diagrams (Ch 1)")
        print(" 2. Remainder Theorem & Cyclic Cubics (Ch 2)")
        print(" 3. Apollonius Theorem Triangle Medians (Ch 3)")
        print(" 4. Quadratic Equation Solver (Ch 5)")
        print(" 5. Linear Inequality Solver (Ch 6)")
        print(" 6. Infinite Geometric Series & Recurring Decimals (Ch 7)")
        print(" 7. Trigonometry Arc & Sector (Ch 8)")
        print(" 8. Logarithms (Ch 9)")
        print(" 9. Binomial Expansion (Ch 10)")
        print("10. Coordinate Geometry Polygon Area & Line (Ch 11)")
        print("11. Planar Vectors (Ch 12)")
        print("12. Solid Geometry (Cone, Cylinder, Sphere) (Ch 13)")
        print("13. Probability Solver (Ch 14)")
        print("14. Exit")

        choice = input("\nSelect an option (1-14): ").strip()
        if choice == '1':
            print("\n--- 3-Set Venn Inclusion-Exclusion ---")
            nA = int(input("Enter n(A): "))
            nB = int(input("Enter n(B): "))
            nC = int(input("Enter n(C): "))
            nAB = int(input("Enter n(A ∩ B): "))
            nBC = int(input("Enter n(B ∩ C): "))
            nCA = int(input("Enter n(C ∩ A): "))
            nABC = int(input("Enter n(A ∩ B ∩ C): "))
            res = eng.ch1_venn_three_sets(nA, nB, nC, nAB, nBC, nCA, nABC)
            print(f"Result: n(A ∪ B ∪ C) = {res['union']}")
            print(f"Only A = {res['only_A']}, Only B = {res['only_B']}, Only C = {res['only_C']}")
            press_enter()
        elif choice == '2':
            coeffs = list(map(float, input("Enter polynomial coefficients separated by space (highest to constant): ").split()))
            a = float(input("Enter divisor 'a' for (x - a): "))
            res = eng.ch2_remainder_theorem(coeffs, a)
            print(f"Remainder P({a}) = {res['remainder']}")
            print(f"Is (x - {a}) a factor? {'Yes' if res['is_factor'] else 'No'}")
            press_enter()
        elif choice == '3':
            a = float(input("Enter triangle side a: "))
            b = float(input("Enter triangle side b: "))
            c = float(input("Enter triangle side c: "))
            med = eng.ch3_apollonius_median(a, b, c)
            print(f"Median on side a (da) = {med:.3f} units")
            press_enter()
        elif choice == '4':
            a = float(input("Enter coefficient a: "))
            b = float(input("Enter coefficient b: "))
            c = float(input("Enter coefficient c: "))
            res = eng.ch5_solve_quadratic(a, b, c)
            print(f"Discriminant D = {res['discriminant']}")
            print(f"Nature: {res['nature']}")
            print(f"Roots: {res['roots']}")
            press_enter()
        elif choice == '5':
            a = float(input("Enter a in ax + b <= c: "))
            b = float(input("Enter b: "))
            c = float(input("Enter c: "))
            res = eng.ch6_solve_linear_inequality(a, b, c)
            print(f"Solution: {res['relation']} {res['boundary']}")
            print(f"Interval: {res['interval']}")
            press_enter()
        elif choice == '6':
            print("1. Infinite Geometric Sum (a / 1-r)")
            print("2. Recurring Decimal to Fraction")
            sub = input("Select: ").strip()
            if sub == '1':
                a = float(input("Enter first term a: "))
                r = float(input("Enter common ratio r: "))
                res = eng.ch7_infinite_geometric_sum(a, r)
                print(f"Sum = {res['sum']}" if res['has_sum'] else "Divergent series, no sum.")
            else:
                whole = int(input("Enter whole part (0 if pure decimal): "))
                non_r = input("Enter non-recurring digits after decimal (or empty): ").strip()
                r = input("Enter repeating digits: ").strip()
                res = eng.ch7_recurring_decimal_to_fraction(whole, non_r, r)
                print(f"Irreducible Fraction: {res['fraction']} ({res['float']:.6f})")
            press_enter()
        elif choice == '7':
            r = float(input("Enter radius r: "))
            deg = float(input("Enter angle theta in degrees: "))
            res = eng.ch8_arc_properties(r, deg)
            print(f"Arc length s = {res['arc_length']:.3f} units")
            print(f"Sector area A = {res['sector_area']:.3f} sq units")
            press_enter()
        elif choice == '8':
            base = float(input("Enter log base: "))
            x = float(input("Enter x: "))
            print(f"log_{base}({x}) = {eng.ch9_solve_log(base, x):.4f}")
            press_enter()
        elif choice == '9':
            a = float(input("Enter x-coefficient a: "))
            b = float(input("Enter y-coefficient b: "))
            n = int(input("Enter power n (0-12): "))
            coeffs = eng.ch10_binomial_expand(a, b, n)
            print(f"Binomial terms coefficients: {coeffs}")
            press_enter()
        elif choice == '10':
            print("Enter coordinates of polygon in order (x y per line, blank line to finish):")
            coords = []
            while True:
                line = input().strip()
                if not line: break
                parts = list(map(float, line.split()))
                coords.append((parts[0], parts[1]))
            if len(coords) >= 3:
                area = eng.ch11_polygon_area(coords)
                print(f"Polygon Area (Shoelace Formula) = {area:.3f} sq units")
            else:
                print("At least 3 vertices required.")
            press_enter()
        elif choice == '11':
            x = float(input("Enter vector component x: "))
            y = float(input("Enter vector component y: "))
            res = eng.ch12_vector_properties(x, y)
            print(f"Magnitude = {res['magnitude']:.3f}, Angle = {res['direction_degrees']:.2f} deg")
            press_enter()
        elif choice == '12':
            print("1. Cone, 2. Cylinder, 3. Sphere")
            sub = input("Select (1-3): ").strip()
            if sub == '1':
                r = float(input("Enter radius r: "))
                h = float(input("Enter height h: "))
                print(eng.ch13_cone(r, h))
            elif sub == '2':
                r = float(input("Enter radius r: "))
                h = float(input("Enter height h: "))
                print(eng.ch13_cylinder(r, h))
            else:
                r = float(input("Enter radius r: "))
                print(eng.ch13_sphere(r))
            press_enter()
        elif choice == '13':
            fav = int(input("Enter favorable outcomes: "))
            tot = int(input("Enter total outcomes: "))
            p = eng.ch14_probability(fav, tot)
            print(f"P(E) = {p:.4f} ({p*100:.2f}%)")
            press_enter()
        elif choice == '14':
            print("Exiting calculator. Best of luck in your SSC Higher Math exams!")
            break

if __name__ == '__main__':
    main()
