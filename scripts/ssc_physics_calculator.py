#!/usr/bin/env python3
"""
SSC Physics Book Solutions & Equation Calculator
Interactive CLI Agent compliant with NCTB Bangladesh (Classes 9-10) Physics syllabus.
Covers all 13 chapters with bidirectional variable solving and physical validations.
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
# PHYSICAL CONSTANTS (NCTB Standards)
# ==========================================
G_STANDARD = 9.8           # m/s^2 (regional textbooks default)
C_LIGHT = 3.0e8           # m/s
G_GRAVITATION = 6.673e-11 # N·m^2/kg^2 (NCTB textbook standard)
K_COULOMB = 9.0e9         # N·m^2/C^2
V_SOUND_0 = 332.0         # m/s at 0°C
LATENT_FUSION_ICE = 336000 # J/kg
LATENT_VAPOR_WATER = 2268000 # J/kg

def print_header(title):
    print("\n" + "="*68)
    print(f" {title.upper()} ".center(68, "="))
    print("="*68)

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

# --- CHAPTER 1: PHYSICAL QUANTITIES & MEASUREMENTS ---
def run_chapter_1():
    while True:
        print_header("Chapter 1: Physical Quantities & Measurements (ভৌত রাশি ও পরিমাপ)")
        print("1. Vernier Constant (VC = s / N)")
        print("2. Slide Calipers Reading (L = M + V*VC - E)")
        print("3. Screw Gauge Least Count (LC = p / N)")
        print("4. Screw Gauge Reading (d = L_lin + C*LC - E)")
        print("5. Sphere Volume (V = 4/3 * pi * r^3)")
        print("6. Cylinder Volume (V = pi * r^2 * h)")
        print("7. Back to Main Menu")
        choice = input("\nSelect an option (1-7): ").strip()

        if choice == '1':
            s = get_float_input("Enter smallest main scale division s (mm, default 1): ", lambda x: x > 0)
            N = get_int_input("Enter number of Vernier divisions N (e.g. 10 or 20): ", lambda x: x > 0)
            vc = s / N
            print(f"\n[NCTB Formula]: VC = s / N")
            print(f"  VC = {s} / {N} = {vc:.4f} mm ({vc/10:.5f} cm)")
            press_enter_to_continue()
        elif choice == '2':
            M = get_float_input("Enter Main Scale reading M (mm): ", lambda x: x >= 0)
            V = get_int_input("Enter Vernier Coincidence V: ", lambda x: x >= 0)
            VC = get_float_input("Enter Vernier Constant VC (mm): ", lambda x: x > 0)
            E = get_float_input("Enter Zero Error E (mm, default 0): ")
            L = M + (V * VC) - E
            print(f"\n[Formula]: L = M + (V * VC) - E")
            print(f"  L = {M} + ({V} * {VC}) - ({E}) = {L:.4f} mm ({L/10:.4f} cm)")
            press_enter_to_continue()
        elif choice == '3':
            p = get_float_input("Enter Pitch of screw gauge p (mm): ", lambda x: x > 0)
            N = get_int_input("Enter circular scale total divisions N (e.g. 50 or 100): ", lambda x: x > 0)
            lc = p / N
            print(f"\n[Formula]: LC = p / N")
            print(f"  LC = {p} / {N} = {lc:.4f} mm")
            press_enter_to_continue()
        elif choice == '4':
            L_lin = get_float_input("Enter Linear scale reading (mm): ", lambda x: x >= 0)
            C = get_int_input("Enter Circular scale reading C: ", lambda x: x >= 0)
            LC = get_float_input("Enter Least Count LC (mm): ", lambda x: x > 0)
            E = get_float_input("Enter Zero Error E (mm, default 0): ")
            d = L_lin + (C * LC) - E
            print(f"\n[Formula]: d = L_linear + (C * LC) - E")
            print(f"  d = {L_lin} + ({C} * {LC}) - ({E}) = {d:.4f} mm")
            press_enter_to_continue()
        elif choice == '5':
            r = get_float_input("Enter radius of sphere r (cm or m): ", lambda x: x > 0)
            vol = (4.0 / 3.0) * math.pi * (r**3)
            print(f"\n[Formula]: V = 4/3 * pi * r^3")
            print(f"  V = 4/3 * 3.14159 * ({r})^3 = {vol:.4f} cubic units")
            press_enter_to_continue()
        elif choice == '6':
            r = get_float_input("Enter radius of cylinder r (cm or m): ", lambda x: x > 0)
            h = get_float_input("Enter height of cylinder h: ", lambda x: x > 0)
            vol = math.pi * (r**2) * h
            print(f"\n[Formula]: V = pi * r^2 * h")
            print(f"  V = 3.14159 * ({r})^2 * {h} = {vol:.4f} cubic units")
            press_enter_to_continue()
        elif choice == '7':
            break

# --- CHAPTER 2: MOTION ---
def run_chapter_2():
    while True:
        print_header("Chapter 2: Motion (গতি)")
        print("1. Final Velocity from u, a, t (v = u + at)")
        print("2. Displacement from u, a, t (s = ut + 0.5*a*t^2)")
        print("3. Final Velocity from u, a, s (v^2 = u^2 + 2as)")
        print("4. Acceleration from u, v, t (a = (v - u)/t)")
        print("5. Vertical Projection under Gravity (H_max, t_rise, Flight Time)")
        print("6. Back to Main Menu")
        choice = input("\nSelect an option (1-6): ").strip()

        if choice == '1':
            u = get_float_input("Enter initial velocity u (m/s): ")
            a = get_float_input("Enter acceleration a (m/s^2): ")
            t = get_float_input("Enter elapsed time t (s): ", lambda x: x > 0)
            v = u + a * t
            print(f"\n[Formula]: v = u + at = {u} + ({a} * {t}) = {v:.4f} m/s")
            press_enter_to_continue()
        elif choice == '2':
            u = get_float_input("Enter initial velocity u (m/s): ")
            a = get_float_input("Enter acceleration a (m/s^2): ")
            t = get_float_input("Enter time t (s): ", lambda x: x > 0)
            s = u * t + 0.5 * a * (t**2)
            print(f"\n[Formula]: s = ut + 1/2*a*t^2")
            print(f"  s = ({u} * {t}) + 0.5 * {a} * ({t})^2 = {s:.4f} m")
            press_enter_to_continue()
        elif choice == '3':
            u = get_float_input("Enter initial velocity u (m/s): ")
            a = get_float_input("Enter acceleration a (m/s^2): ")
            s = get_float_input("Enter displacement s (m): ")
            val = u**2 + 2 * a * s
            if val < 0:
                print("Error: Radical u^2 + 2as is negative; physical motion cannot reach this state.")
            else:
                v = math.sqrt(val)
                print(f"\n[Formula]: v = sqrt(u^2 + 2as) = sqrt(({u})^2 + 2*{a}*{s}) = {v:.4f} m/s")
            press_enter_to_continue()
        elif choice == '4':
            u = get_float_input("Enter initial velocity u (m/s): ")
            v = get_float_input("Enter final velocity v (m/s): ")
            t = get_float_input("Enter time t (s): ", lambda x: x > 0)
            a = (v - u) / t
            print(f"\n[Formula]: a = (v - u) / t = ({v} - {u}) / {t} = {a:.4f} m/s^2")
            press_enter_to_continue()
        elif choice == '5':
            u = get_float_input("Enter upward launch velocity u (m/s): ", lambda x: x > 0)
            g_choice = input("Use g = 9.8 m/s^2 (default) or enter custom g? [Press Enter for 9.8]: ").strip()
            g = float(g_choice) if g_choice else G_STANDARD
            h_max = (u**2) / (2 * g)
            t_rise = u / g
            t_total = (2 * u) / g
            print(f"\n[Formulas]:")
            print(f"  H_max = u^2 / (2g) = ({u})^2 / (2 * {g}) = {h_max:.4f} m")
            print(f"  t_rise = u / g = {u} / {g} = {t_rise:.4f} s")
            print(f"  Total Time of Flight T = 2u / g = {t_total:.4f} s")
            press_enter_to_continue()
        elif choice == '6':
            break

# --- CHAPTER 3: FORCE ---
def run_chapter_3():
    while True:
        print_header("Chapter 3: Force (বল)")
        print("1. Newton's Second Law (F = ma)")
        print("2. Momentum (p = mv)")
        print("3. Linear Momentum Conservation (m1*u1 + m2*u2 = m1*v1 + m2*v2)")
        print("4. Coalescent / Inelastic Collision (v = (m1*u1 + m2*u2)/(m1 + m2))")
        print("5. Universal Law of Gravitation (F = G * m1*m2 / d^2)")
        print("6. Back to Main Menu")
        choice = input("\nSelect an option (1-6): ").strip()

        if choice == '1':
            m = get_float_input("Enter mass m (kg): ", lambda x: x > 0)
            a = get_float_input("Enter acceleration a (m/s^2): ")
            f = m * a
            print(f"\n[Formula]: F = m * a = {m} * {a} = {f:.4f} N")
            press_enter_to_continue()
        elif choice == '2':
            m = get_float_input("Enter mass m (kg): ", lambda x: x > 0)
            v = get_float_input("Enter velocity v (m/s): ")
            p = m * v
            print(f"\n[Formula]: p = m * v = {m} * {v} = {p:.4f} kg·m/s")
            press_enter_to_continue()
        elif choice == '3':
            m1 = get_float_input("Enter mass 1 m1 (kg): ", lambda x: x > 0)
            u1 = get_float_input("Enter initial velocity 1 u1 (m/s): ")
            m2 = get_float_input("Enter mass 2 m2 (kg): ", lambda x: x > 0)
            u2 = get_float_input("Enter initial velocity 2 u2 (m/s): ")
            v1 = get_float_input("Enter final velocity 1 v1 (m/s): ")
            v2 = (m1 * u1 + m2 * u2 - m1 * v1) / m2
            print(f"\n[Formula]: v2 = (m1*u1 + m2*u2 - m1*v1) / m2")
            print(f"  v2 = {v2:.4f} m/s")
            press_enter_to_continue()
        elif choice == '4':
            m1 = get_float_input("Enter mass 1 m1 (kg): ", lambda x: x > 0)
            u1 = get_float_input("Enter initial velocity 1 u1 (m/s): ")
            m2 = get_float_input("Enter mass 2 m2 (kg): ", lambda x: x > 0)
            u2 = get_float_input("Enter initial velocity 2 u2 (m/s): ")
            v = (m1 * u1 + m2 * u2) / (m1 + m2)
            print(f"\n[Formula]: Combined velocity v = (m1*u1 + m2*u2) / (m1 + m2)")
            print(f"  v = ({m1}*{u1} + {m2}*{u2}) / ({m1} + {m2}) = {v:.4f} m/s")
            press_enter_to_continue()
        elif choice == '5':
            m1 = get_float_input("Enter mass 1 m1 (kg): ", lambda x: x > 0)
            m2 = get_float_input("Enter mass 2 m2 (kg): ", lambda x: x > 0)
            d = get_float_input("Enter distance between centers d (m): ", lambda x: x > 0)
            F = (G_GRAVITATION * m1 * m2) / (d**2)
            print(f"\n[Formula]: F = G * m1*m2 / d^2")
            print(f"  F = ({G_GRAVITATION}) * ({m1} * {m2}) / ({d})^2 = {F:.4e} N")
            press_enter_to_continue()
        elif choice == '6':
            break

# --- CHAPTER 4: WORK, POWER & ENERGY ---
def run_chapter_4():
    while True:
        print_header("Chapter 4: Work, Power & Energy (কাজ, ক্ষমতা ও শক্তি)")
        print("1. Work Done (W = F * s * cos(theta))")
        print("2. Kinetic Energy (E_k = 0.5 * m * v^2)")
        print("3. Gravitational Potential Energy (E_p = m * g * h)")
        print("4. Power & Efficiency (P = W/t, eta = Useful/Total * 100%)")
        print("5. Back to Main Menu")
        choice = input("\nSelect an option (1-5): ").strip()

        if choice == '1':
            F = get_float_input("Enter applied force F (N): ")
            s = get_float_input("Enter displacement s (m): ")
            theta = get_float_input("Enter angle theta in degrees (0 for same direction): ")
            rad = math.radians(theta)
            W = F * s * math.cos(rad)
            print(f"\n[Formula]: W = F * s * cos(theta) = {F} * {s} * cos({theta}°) = {W:.4f} Joules (J)")
            press_enter_to_continue()
        elif choice == '2':
            m = get_float_input("Enter mass m (kg): ", lambda x: x > 0)
            v = get_float_input("Enter velocity v (m/s): ")
            ek = 0.5 * m * (v**2)
            print(f"\n[Formula]: E_k = 1/2 * m * v^2 = 0.5 * {m} * ({v})^2 = {ek:.4f} Joules (J)")
            press_enter_to_continue()
        elif choice == '3':
            m = get_float_input("Enter mass m (kg): ", lambda x: x > 0)
            h = get_float_input("Enter height h (m): ", lambda x: x >= 0)
            ep = m * G_STANDARD * h
            print(f"\n[Formula]: E_p = m * g * h = {m} * {G_STANDARD} * {h} = {ep:.4f} Joules (J)")
            press_enter_to_continue()
        elif choice == '4':
            useful = get_float_input("Enter useful energy or output power: ", lambda x: x >= 0)
            total = get_float_input("Enter total input energy or power: ", lambda x: x > 0)
            t = get_float_input("Enter time taken in seconds (optional, 0 to skip): ", lambda x: x >= 0)
            eta = (useful / total) * 100.0
            print(f"\n[Formula]: Efficiency eta = (Output / Input) * 100% = ({useful} / {total}) * 100 = {eta:.2f}%")
            if t > 0:
                p_watts = useful / t
                print(f"  Power = W / t = {useful} / {t} = {p_watts:.2f} W ({p_watts/746:.3f} HP)")
            press_enter_to_continue()
        elif choice == '5':
            break

# --- CHAPTER 5: PRESSURE & STATE OF MATTER ---
def run_chapter_5():
    while True:
        print_header("Chapter 5: State of Matter & Pressure (পদার্থের অবস্থা ও চাপ)")
        print("1. Pressure (P = F / A)")
        print("2. Liquid Column Pressure (P = h * rho * g)")
        print("3. Hydraulic Press (F2 = F1 * (A2 / A1) = F1 * (r2/r1)^2)")
        print("4. Young's Modulus (Y = (F * L) / (A * deltaL))")
        print("5. Back to Main Menu")
        choice = input("\nSelect an option (1-5): ").strip()

        if choice == '1':
            F = get_float_input("Enter perpendicular thrust F (N): ")
            A = get_float_input("Enter area A (m^2): ", lambda x: x > 0)
            p = F / A
            print(f"\n[Formula]: P = F / A = {F} / {A} = {p:.4f} Pa (N/m^2)")
            press_enter_to_continue()
        elif choice == '2':
            h = get_float_input("Enter depth h (m): ", lambda x: x >= 0)
            rho = get_float_input("Enter liquid density rho (kg/m^3, default 1000 for water): ", lambda x: x > 0)
            p = h * rho * G_STANDARD
            print(f"\n[Formula]: P = h * rho * g = {h} * {rho} * {G_STANDARD} = {p:.4f} Pa")
            press_enter_to_continue()
        elif choice == '3':
            F1 = get_float_input("Enter force on small piston F1 (N): ", lambda x: x > 0)
            d1 = get_float_input("Enter diameter of small piston d1 (m or cm): ", lambda x: x > 0)
            d2 = get_float_input("Enter diameter of large piston d2 (m or cm): ", lambda x: x > 0)
            F2 = F1 * ((d2 / d1)**2)
            print(f"\n[Pascal's Law]: F2 = F1 * (d2 / d1)^2 = {F1} * ({d2} / {d1})^2 = {F2:.4f} N")
            press_enter_to_continue()
        elif choice == '4':
            F = get_float_input("Enter tension force F (N): ", lambda x: x > 0)
            L = get_float_input("Enter original length L (m): ", lambda x: x > 0)
            A = get_float_input("Enter cross-sectional area A (m^2): ", lambda x: x > 0)
            deltaL = get_float_input("Enter elongation delta_L (m): ", lambda x: x > 0)
            Y = (F * L) / (A * deltaL)
            print(f"\n[Formula]: Y = (F * L) / (A * deltaL) = ({F} * {L}) / ({A} * {deltaL}) = {Y:.4e} Pa")
            press_enter_to_continue()
        elif choice == '5':
            break

# --- CHAPTER 6: EFFECT OF HEAT ON MATTER ---
def run_chapter_6():
    while True:
        print_header("Chapter 6: Effect of Heat on Matter (বস্তুর উপর তাপের প্রভাব)")
        print("1. Temperature Scale Conversion (C, F, K)")
        print("2. Thermal Expansion (Linear, Area, Volume)")
        print("3. Sensible Heat (Q = m * s * delta_theta)")
        print("4. Latent Heat of Fusion/Vaporization (Q = m * L)")
        print("5. Back to Main Menu")
        choice = input("\nSelect an option (1-5): ").strip()

        if choice == '1':
            c_val = get_float_input("Enter Celsius temperature (°C): ")
            f_val = (9.0 / 5.0) * c_val + 32.0
            k_val = c_val + 273.0
            print(f"\n[Conversions]:")
            print(f"  Fahrenheit (°F) = 9/5*C + 32 = {f_val:.2f} °F")
            print(f"  Kelvin (K)      = C + 273   = {k_val:.2f} K")
            press_enter_to_continue()
        elif choice == '2':
            L1 = get_float_input("Enter initial dimension (m or m^2 or m^3): ", lambda x: x > 0)
            alpha = get_float_input("Enter linear expansion coefficient alpha (e.g. 1.1e-5): ", lambda x: x > 0)
            d_theta = get_float_input("Enter temperature rise delta_theta (°C or K): ")
            dL = alpha * L1 * d_theta
            dA = 2 * alpha * L1 * d_theta
            dV = 3 * alpha * L1 * d_theta
            print(f"\n[Thermal Expansion]:")
            print(f"  Linear expansion delta_L = alpha * L1 * delta_theta = {dL:.6f} m")
            print(f"  Area expansion   delta_A = 2*alpha * A1 * delta_theta = {dA:.6f} m^2")
            print(f"  Volume expansion delta_V = 3*alpha * V1 * delta_theta = {dV:.6f} m^3")
            press_enter_to_continue()
        elif choice == '3':
            m = get_float_input("Enter mass m (kg): ", lambda x: x > 0)
            s = get_float_input("Enter specific heat capacity s (J/(kg·K), water=4200): ", lambda x: x > 0)
            d_theta = get_float_input("Enter temperature change delta_theta (°C or K): ")
            Q = m * s * d_theta
            print(f"\n[Formula]: Q = m * s * delta_theta = {m} * {s} * {d_theta} = {Q:.4f} Joules (J)")
            press_enter_to_continue()
        elif choice == '4':
            m = get_float_input("Enter mass m (kg): ", lambda x: x > 0)
            phase = input("Choose phase [1: Ice Fusion (336,000 J/kg), 2: Water Vaporization (2,268,000 J/kg)]: ").strip()
            L = LATENT_FUSION_ICE if phase == '1' else LATENT_VAPOR_WATER
            Q = m * L
            print(f"\n[Formula]: Q = m * L = {m} * {L} = {Q:.4f} Joules (J)")
            press_enter_to_continue()
        elif choice == '5':
            break

# --- CHAPTER 7: WAVES & SOUND ---
def run_chapter_7():
    while True:
        print_header("Chapter 7: Waves & Sound (তরঙ্গ ও শব্দ)")
        print("1. Wave Speed (v = f * lambda)")
        print("2. Speed of Sound at Temperature theta (v = v0 + 0.6*theta)")
        print("3. Echo Distance & Persistence of Hearing (2d = v * t)")
        print("4. Back to Main Menu")
        choice = input("\nSelect an option (1-4): ").strip()

        if choice == '1':
            f = get_float_input("Enter frequency f (Hz): ", lambda x: x > 0)
            lam = get_float_input("Enter wavelength lambda (m): ", lambda x: x > 0)
            v = f * lam
            print(f"\n[Formula]: v = f * lambda = {f} * {lam} = {v:.4f} m/s (Period T = {1/f:.4f} s)")
            press_enter_to_continue()
        elif choice == '2':
            theta = get_float_input("Enter temperature theta in °C: ")
            v_theta = V_SOUND_0 + 0.6 * theta
            min_d = (v_theta * 0.1) / 2.0
            print(f"\n[Formula]: v_theta = 332 + 0.6 * theta = {v_theta:.2f} m/s")
            print(f"  Minimum echo obstacle distance (t >= 0.1 s): d_min = {min_d:.2f} meters")
            press_enter_to_continue()
        elif choice == '3':
            v = get_float_input("Enter speed of sound v (m/s, default 332): ", lambda x: x > 0)
            t = get_float_input("Enter echo round-trip time t (s): ", lambda x: x > 0)
            d = (v * t) / 2.0
            is_heard = t >= 0.1
            print(f"\n[Formula]: d = (v * t) / 2 = ({v} * {t}) / 2 = {d:.4f} meters")
            print(f"  Persistence check: t = {t} s {'[PASSED: Echo Heard]' if is_heard else '[FAILED: t < 0.1s]'}")
            press_enter_to_continue()
        elif choice == '4':
            break

# --- CHAPTER 8: REFLECTION OF LIGHT ---
def run_chapter_8():
    while True:
        print_header("Chapter 8: Reflection of Light (আলোর প্রতিফলন)")
        print("1. Mirror Equation: Solve for Image Distance v (1/f = 1/u + 1/v)")
        print("2. Linear Magnification (m = -v/u, |m| = h_i / h_o)")
        print("3. Back to Main Menu")
        choice = input("\nSelect an option (1-3): ").strip()

        if choice == '1':
            m_type = input("Select mirror type [1: Concave (f > 0), 2: Convex (f < 0)]: ").strip()
            f_mag = get_float_input("Enter focal length magnitude |f| (cm): ", lambda x: x > 0)
            u = get_float_input("Enter object distance u (cm): ", lambda x: x > 0)
            f = f_mag if m_type == '1' else -f_mag

            if u == f:
                print("\nObject is at focus (u = f) -> Image is at Infinity.")
            else:
                v = (u * f) / (u - f)
                m = -v / u
                is_real = v > 0
                print(f"\n[Mirror Equation]: 1/v = 1/f - 1/u => v = (u*f)/(u - f)")
                print(f"  v = ({u} * {f}) / ({u} - {f}) = {v:.4f} cm")
                print(f"  Magnification m = {-v/u:.4f} (|m| = {abs(m):.4f})")
                print(f"  Image nature: {'Real and Inverted' if is_real else 'Virtual and Erect'}")
            press_enter_to_continue()
        elif choice == '2':
            u = get_float_input("Enter object distance u: ", lambda x: x > 0)
            v = get_float_input("Enter image distance v: ")
            ho = get_float_input("Enter object height h_o: ", lambda x: x > 0)
            m = abs(v / u)
            hi = m * ho
            print(f"\n[Magnification]: |m| = |v| / u = |{v}| / {u} = {m:.4f}")
            print(f"  Image height h_i = |m| * h_o = {hi:.4f}")
            press_enter_to_continue()
        elif choice == '3':
            break

# --- CHAPTER 9: REFRACTION OF LIGHT ---
def run_chapter_9():
    while True:
        print_header("Chapter 9: Refraction of Light (আলোর প্রতিসরণ)")
        print("1. Snell's Law (eta1 * sin(theta1) = eta2 * sin(theta2))")
        print("2. Critical Angle (sin(theta_c) = eta_rare / eta_dense)")
        print("3. Lens Formula & Power (1/f = 1/u + 1/v, P = 1/f)")
        print("4. Back to Main Menu")
        choice = input("\nSelect an option (1-4): ").strip()

        if choice == '1':
            eta1 = get_float_input("Enter refractive index of medium 1 (eta1): ", lambda x: x > 0)
            theta1 = get_float_input("Enter angle of incidence theta1 (degrees): ", lambda x: 0 <= x < 90)
            eta2 = get_float_input("Enter refractive index of medium 2 (eta2): ", lambda x: x > 0)
            sin_theta2 = (eta1 * math.sin(math.radians(theta1))) / eta2
            if sin_theta2 > 1.0:
                print("\n[Total Internal Reflection]: sin(theta2) > 1 -> Light is reflected back internally!")
            else:
                theta2 = math.degrees(math.asin(sin_theta2))
                print(f"\n[Snell's Law]: sin(theta2) = (eta1 * sin(theta1)) / eta2 = {sin_theta2:.4f}")
                print(f"  Angle of refraction theta2 = {theta2:.2f}°")
            press_enter_to_continue()
        elif choice == '2':
            eta_dense = get_float_input("Enter refractive index of dense medium: ", lambda x: x > 0)
            eta_rare = get_float_input("Enter refractive index of rare medium: ", lambda x: x > 0)
            if eta_dense <= eta_rare:
                print("Error: For critical angle, dense medium must have higher index than rare medium.")
            else:
                crit = math.degrees(math.asin(eta_rare / eta_dense))
                print(f"\n[Formula]: sin(theta_c) = eta_rare / eta_dense = {eta_rare/eta_dense:.4f}")
                print(f"  Critical angle theta_c = {crit:.2f}°")
            press_enter_to_continue()
        elif choice == '3':
            l_type = input("Choose lens type [1: Convex (f > 0), 2: Concave (f < 0)]: ").strip()
            f_cm = get_float_input("Enter focal length magnitude |f| (cm): ", lambda x: x > 0)
            u = get_float_input("Enter object distance u (cm): ", lambda x: x > 0)
            f = f_cm if l_type == '1' else -f_cm
            v = (u * f) / (u - f)
            power = 1.0 / (f / 100.0)
            print(f"\n[Lens Formula]: 1/v = 1/f - 1/u => v = {v:.4f} cm")
            print(f"  Power P = 1 / f(m) = {power:+.2f} Dioptres (D)")
            press_enter_to_continue()
        elif choice == '4':
            break

# --- CHAPTER 10: STATIC ELECTRICITY ---
def run_chapter_10():
    while True:
        print_header("Chapter 10: Static Electricity (স্থির তড়িৎ)")
        print("1. Coulomb's Law (F = k * q1*q2 / r^2)")
        print("2. Electric Field Intensity & Potential (E = k*Q/r^2, V = k*Q/r)")
        print("3. Capacitance (C = Q / V)")
        print("4. Back to Main Menu")
        choice = input("\nSelect an option (1-4): ").strip()

        if choice == '1':
            q1 = get_float_input("Enter charge q1 (Coulombs, e.g. 2e-6): ")
            q2 = get_float_input("Enter charge q2 (Coulombs): ")
            r = get_float_input("Enter separation distance r (m): ", lambda x: x > 0)
            F = (K_COULOMB * q1 * q2) / (r**2)
            nature = "Repulsive" if F > 0 else "Attractive"
            print(f"\n[Coulomb's Law]: F = k * q1*q2 / r^2 = {abs(F):.4e} N ({nature})")
            press_enter_to_continue()
        elif choice == '2':
            Q = get_float_input("Enter source charge Q (Coulombs): ")
            r = get_float_input("Enter distance r (m): ", lambda x: x > 0)
            E = (K_COULOMB * abs(Q)) / (r**2)
            V = (K_COULOMB * Q) / r
            print(f"\n[Formulas]:")
            print(f"  Electric Intensity E = k*Q / r^2 = {E:.4e} N/C")
            print(f"  Electric Potential V = k*Q / r   = {V:.4f} Volts (V)")
            press_enter_to_continue()
        elif choice == '3':
            Q = get_float_input("Enter charge stored Q (Coulombs): ")
            V = get_float_input("Enter potential difference V (Volts): ", lambda x: x != 0)
            C = abs(Q / V)
            print(f"\n[Formula]: C = Q / V = {C:.4e} Farads (F)")
            press_enter_to_continue()
        elif choice == '4':
            break

# --- CHAPTER 11: CURRENT ELECTRICITY ---
def run_chapter_11():
    while True:
        print_header("Chapter 11: Current Electricity (চল তড়িৎ)")
        print("1. Ohm's Law (V = I * R)")
        print("2. Resistance & Resistivity (R = rho * L / A)")
        print("3. Equivalent Resistance (Series & Parallel)")
        print("4. Electricity Consumption & Bill (kWh & Cost)")
        print("5. Back to Main Menu")
        choice = input("\nSelect an option (1-5): ").strip()

        if choice == '1':
            target = input("Solve for [1: V, 2: I, 3: R]: ").strip()
            if target == '1':
                I = get_float_input("Enter current I (A): ")
                R = get_float_input("Enter resistance R (Ohms): ", lambda x: x >= 0)
                print(f"\nV = I * R = {I * R:.4f} Volts")
            elif target == '2':
                V = get_float_input("Enter voltage V (V): ")
                R = get_float_input("Enter resistance R (Ohms): ", lambda x: x > 0)
                print(f"\nI = V / R = {V / R:.4f} Amperes")
            elif target == '3':
                V = get_float_input("Enter voltage V (V): ")
                I = get_float_input("Enter current I (A): ", lambda x: x != 0)
                print(f"\nR = V / I = {V / I:.4f} Ohms")
            press_enter_to_continue()
        elif choice == '2':
            rho = get_float_input("Enter resistivity rho (Ohm·m, e.g. 1.7e-8 for copper): ", lambda x: x > 0)
            L = get_float_input("Enter wire length L (m): ", lambda x: x > 0)
            A = get_float_input("Enter cross-sectional area A (m^2): ", lambda x: x > 0)
            R = (rho * L) / A
            print(f"\n[Formula]: R = rho * L / A = {R:.4f} Ohms")
            press_enter_to_continue()
        elif choice == '3':
            r_str = input("Enter resistors separated by commas (e.g. 10, 20, 30): ")
            resistors = [float(x.strip()) for x in r_str.split(",") if x.strip() and float(x.strip()) > 0]
            if len(resistors) < 2:
                print("Error: At least two positive resistors needed.")
            else:
                rs = sum(resistors)
                rp = 1.0 / sum(1.0 / r for r in resistors)
                print(f"\n[Equivalent Resistance]:")
                print(f"  Series:   R_s = {rs:.4f} Ohms")
                print(f"  Parallel: R_p = {rp:.4f} Ohms")
            press_enter_to_continue()
        elif choice == '4':
            p_watts = get_float_input("Enter appliance power in Watts (W): ", lambda x: x > 0)
            daily_hrs = get_float_input("Enter daily usage hours: ", lambda x: x > 0)
            days = get_int_input("Enter number of days (default 30): ", lambda x: x > 0)
            rate = get_float_input("Enter cost per unit (kWh) in BDT (default 7.5): ", lambda x: x >= 0)
            kwh = (p_watts * daily_hrs * days) / 1000.0
            cost = kwh * rate
            print(f"\n[Billing]:")
            print(f"  Total energy = {kwh:.2f} kWh (BOT Units)")
            print(f"  Total bill   = {cost:.2f} BDT")
            press_enter_to_continue()
        elif choice == '5':
            break

# --- CHAPTER 12: MAGNETIC EFFECTS OF CURRENT ---
def run_chapter_12():
    while True:
        print_header("Chapter 12: Magnetic Effects of Current (বিদ্যুতের চৌম্বক ক্রিয়া)")
        print("1. Transformer Voltage & Turns (Vp / Vs = Np / Ns)")
        print("2. Transformer Current Ratio (Vs / Vp = Ip / Is)")
        print("3. Back to Main Menu")
        choice = input("\nSelect an option (1-3): ").strip()

        if choice == '1':
            Vp = get_float_input("Enter primary voltage Vp (V): ", lambda x: x > 0)
            Np = get_int_input("Enter primary turns Np: ", lambda x: x > 0)
            Ns = get_int_input("Enter secondary turns Ns: ", lambda x: x > 0)
            Vs = Vp * (Ns / Np)
            is_step_up = Vs > Vp
            print(f"\n[Formula]: Vs = Vp * (Ns / Np) = {Vp} * ({Ns} / {Np}) = {Vs:.2f} V")
            print(f"  Classification: {'Step-up (আরোহী)' if is_step_up else 'Step-down (অবরোহী)'}")
            press_enter_to_continue()
        elif choice == '2':
            Vp = get_float_input("Enter primary voltage Vp (V): ", lambda x: x > 0)
            Vs = get_float_input("Enter secondary voltage Vs (V): ", lambda x: x > 0)
            Ip = get_float_input("Enter primary current Ip (A): ", lambda x: x > 0)
            Is = Ip * (Vp / Vs)
            print(f"\n[Ideal Power Conservation]: Is = Ip * (Vp / Vs) = {Ip} * ({Vp} / {Vs}) = {Is:.4f} A")
            press_enter_to_continue()
        elif choice == '3':
            break

# --- CHAPTER 13: RADIOACTIVITY & ELECTRONICS ---
def run_chapter_13():
    while True:
        print_header("Chapter 13: Radioactivity & Electronics (তেজস্ক্রিয়তা ও ইলেকট্রনিক্স)")
        print("1. Einstein Mass-Energy Equivalence (E = m * c^2)")
        print("2. Radioactive Half-Life Decay (N(t) = N0 * 2^(-t / T_half))")
        print("3. Decay Constant lambda (lambda = 0.693 / T_half)")
        print("4. Back to Main Menu")
        choice = input("\nSelect an option (1-4): ").strip()

        if choice == '1':
            m = get_float_input("Enter destroyed mass m (kg, e.g. 0.001 for 1g): ", lambda x: x > 0)
            E = m * (C_LIGHT**2)
            print(f"\n[Formula]: E = m * c^2 = {m} * ({C_LIGHT})^2 = {E:.4e} Joules (J)")
            press_enter_to_continue()
        elif choice == '2':
            N0 = get_float_input("Enter initial quantity N0 (kg or atoms): ", lambda x: x > 0)
            Thalf = get_float_input("Enter half-life T_half (years, days, or seconds): ", lambda x: x > 0)
            t = get_float_input("Enter elapsed decay time t: ", lambda x: x >= 0)
            Nt = N0 * math.pow(0.5, t / Thalf)
            print(f"\n[Half-life Formula]: N(t) = N0 * (1/2)^(t / T_half)")
            print(f"  Remaining quantity N({t}) = {Nt:.4f} ({Nt/N0*100:.2f}% remaining)")
            print(f"  Decayed quantity          = {N0 - Nt:.4f} ({(N0 - Nt)/N0*100:.2f}% decayed)")
            press_enter_to_continue()
        elif choice == '3':
            Thalf = get_float_input("Enter half-life T_half: ", lambda x: x > 0)
            lam = math.log(2) / Thalf
            print(f"\n[Formula]: lambda = ln(2) / T_half = 0.693 / {Thalf} = {lam:.4e} per unit time")
            press_enter_to_continue()
        elif choice == '4':
            break

# ==========================================
# MAIN INTERACTIVE DISPATCHER
# ==========================================
def main():
    while True:
        print_header("Biggan.me - SSC Physics Equation & Solution Engine (NCTB 9-10)")
        print(" 1. Chapter 1:  Physical Quantities & Measurements (ভৌত রাশি ও পরিমাপ)")
        print(" 2. Chapter 2:  Motion (গতি)")
        print(" 3. Chapter 3:  Force (বল)")
        print(" 4. Chapter 4:  Work, Power & Energy (কাজ, ক্ষমতা ও শক্তি)")
        print(" 5. Chapter 5:  State of Matter & Pressure (পদার্থের অবস্থা ও চাপ)")
        print(" 6. Chapter 6:  Effect of Heat on Matter (বস্তুর উপর তাপের প্রভাব)")
        print(" 7. Chapter 7:  Waves & Sound (তরঙ্গ ও শব্দ)")
        print(" 8. Chapter 8:  Reflection of Light (আলোর প্রতিফলন)")
        print(" 9. Chapter 9:  Refraction of Light (আলোর প্রতিসরণ)")
        print("10. Chapter 10: Static Electricity (স্থির তড়িৎ)")
        print("11. Chapter 11: Current Electricity (চল তড়িৎ)")
        print("12. Chapter 12: Magnetic Effects of Current (বিদ্যুতের চৌম্বক ক্রিয়া)")
        print("13. Chapter 13: Radioactivity & Electronics (তেজস্ক্রিয়তা ও আধুনিক পদার্থবিজ্ঞান)")
        print(" 0. Exit")

        choice = input("\nSelect a chapter (0-13): ").strip()

        if choice == '1': run_chapter_1()
        elif choice == '2': run_chapter_2()
        elif choice == '3': run_chapter_3()
        elif choice == '4': run_chapter_4()
        elif choice == '5': run_chapter_5()
        elif choice == '6': run_chapter_6()
        elif choice == '7': run_chapter_7()
        elif choice == '8': run_chapter_8()
        elif choice == '9': run_chapter_9()
        elif choice == '10': run_chapter_10()
        elif choice == '11': run_chapter_11()
        elif choice == '12': run_chapter_12()
        elif choice == '13': run_chapter_13()
        elif choice == '0':
            print("\nThank you for using Biggan.me SSC Physics Calculator. Goodbye!")
            sys.exit(0)
        else:
            print("Invalid selection. Please choose a number between 0 and 13.")

if __name__ == '__main__':
    main()
