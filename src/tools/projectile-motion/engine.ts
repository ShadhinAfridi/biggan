export interface TrajectoryPoint {
  x: number;
  y: number;
  t: number;
}

export interface ProjectileInput {
  v0: number; // initial velocity in m/s
  theta: number; // angle in degrees
  y0?: number; // initial launch elevation in meters
  g?: number; // gravity acceleration in m/s^2 (default 9.8 or 9.81)
}

export interface ProjectileResult {
  v0: number;
  theta: number;
  y0: number;
  g: number;
  v0x: number;
  v0y: number;
  timeToPeak: number;
  maxHeight: number;
  flightTime: number;
  range: number;
  impactVelocity: number;
  impactAngle: number;
  trajectory: TrajectoryPoint[];
  latexSteps: {
    titleEn: string;
    titleBn: string;
    latex: string;
  }[];
}

export function calculateProjectile(input: ProjectileInput): ProjectileResult {
  const v0 = Number(input.v0);
  const theta = Number(input.theta);
  const y0 = Number(input.y0 || 0);
  const g = Number(input.g || 9.8);

  if (isNaN(v0) || v0 <= 0) {
    throw new Error('Initial velocity v0 must be a positive number greater than 0.');
  }
  if (isNaN(theta) || theta < 0 || theta > 90) {
    throw new Error('Launch angle theta must be between 0 and 90 degrees.');
  }
  if (isNaN(y0) || y0 < 0) {
    throw new Error('Initial height y0 must be greater than or equal to 0.');
  }

  const rad = (theta * Math.PI) / 180;
  const v0x = v0 * Math.cos(rad);
  const v0y = v0 * Math.sin(rad);

  const timeToPeak = v0y / g;
  const maxHeight = y0 + (v0y * v0y) / (2 * g);

  // Flight time: solve y(t) = y0 + v0y*t - 0.5*g*t^2 = 0
  // 0.5*g*t^2 - v0y*t - y0 = 0
  // t = (v0y + sqrt(v0y^2 + 2*g*y0)) / g
  const discriminant = v0y * v0y + 2 * g * y0;
  const flightTime = (v0y + Math.sqrt(discriminant)) / g;

  const range = v0x * flightTime;

  const vyImpact = v0y - g * flightTime;
  const impactVelocity = Math.sqrt(v0x * v0x + vyImpact * vyImpact);
  const impactAngle = (Math.atan2(Math.abs(vyImpact), v0x) * 180) / Math.PI;

  // Generate 50 points for trajectory graph
  const pointsCount = 60;
  const trajectory: TrajectoryPoint[] = [];
  for (let i = 0; i <= pointsCount; i++) {
    const t = (flightTime / pointsCount) * i;
    const x = v0x * t;
    const y = Math.max(0, y0 + v0y * t - 0.5 * g * t * t);
    trajectory.push({
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      t: Number(t.toFixed(3)),
    });
  }

  const latexSteps = [
    {
      titleEn: '1. Velocity Components Decomposition',
      titleBn: '১. আদি বেগের আনুভূমিক ও উলম্ব উপাংশ নির্ণয়',
      latex: `\\begin{aligned} v_{0x} &= v_0 \\cos\\theta = ${v0} \\cos(${theta}^\\circ) = ${v0x.toFixed(2)}\\text{ m/s} \\\\[4pt] v_{0y} &= v_0 \\sin\\theta = ${v0} \\sin(${theta}^\\circ) = ${v0y.toFixed(2)}\\text{ m/s} \\end{aligned}`,
    },
    {
      titleEn: '2. Time to Reach Maximum Height',
      titleBn: '২. সর্বোচ্চ উচ্চতায় পৌঁছার সময় (t_peak)',
      latex: `t_{\\text{peak}} = \\frac{v_{0y}}{g} = \\frac{${v0y.toFixed(2)}}{${g}} = ${timeToPeak.toFixed(2)}\\text{ s}`,
    },
    {
      titleEn: '3. Maximum Elevation (H_max)',
      titleBn: '৩. সর্বোচ্চ উচ্চতা (H_max)',
      latex: `H_{\\max} = y_0 + \\frac{v_{0y}^2}{2g} = ${y0} + \\frac{(${v0y.toFixed(2)})^2}{2 \\times ${g}} = ${maxHeight.toFixed(2)}\\text{ m}`,
    },
    {
      titleEn: '4. Total Flight Time (T)',
      titleBn: '৪. মোট বিচরণকাল বা উড্ডয়নকাল (T)',
      latex: `T = \\frac{v_{0y} + \\sqrt{v_{0y}^2 + 2gy_0}}{g} = \\frac{${v0y.toFixed(2)} + \\sqrt{(${v0y.toFixed(2)})^2 + 2 \\times ${g} \\times ${y0}}}{${g}} = ${flightTime.toFixed(2)}\\text{ s}`,
    },
    {
      titleEn: '5. Horizontal Range (R)',
      titleBn: '৫. অনুভূমিক পাল্লা (R)',
      latex: `R = v_{0x} \\times T = ${v0x.toFixed(2)} \\times ${flightTime.toFixed(2)} = ${range.toFixed(2)}\\text{ m}`,
    },
  ];

  return {
    v0,
    theta,
    y0,
    g,
    v0x: Number(v0x.toFixed(2)),
    v0y: Number(v0y.toFixed(2)),
    timeToPeak: Number(timeToPeak.toFixed(2)),
    maxHeight: Number(maxHeight.toFixed(2)),
    flightTime: Number(flightTime.toFixed(2)),
    range: Number(range.toFixed(2)),
    impactVelocity: Number(impactVelocity.toFixed(2)),
    impactAngle: Number(impactAngle.toFixed(2)),
    trajectory,
    latexSteps,
  };
}
