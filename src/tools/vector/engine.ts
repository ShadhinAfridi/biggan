export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface VectorCalculationResult {
  magA: number;
  magB: number;
  unitA: Vector3D;
  unitB: Vector3D;
  sum: Vector3D;
  diff: Vector3D;
  dotProduct: number;
  angleRad: number;
  angleDeg: number;
  isOrthogonal: boolean;
  crossProduct: Vector3D;
  crossMag: number;
  isParallel: boolean;
  parallelogramArea: number;
  triangleArea: number;
  scalarProjAonB: number;
  vectorProjAonB: Vector3D;
}

export function round(val: number, decimals: number = 4): number {
  return Number(val.toFixed(decimals));
}

export function calcVectorMagnitude(v: Vector3D): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

export function calcUnitVector(v: Vector3D): Vector3D {
  const mag = calcVectorMagnitude(v);
  if (mag === 0) return { x: 0, y: 0, z: 0 };
  return {
    x: round(v.x / mag),
    y: round(v.y / mag),
    z: round(v.z / mag),
  };
}

export function calcVectorSum(a: Vector3D, b: Vector3D): Vector3D {
  return {
    x: round(a.x + b.x),
    y: round(a.y + b.y),
    z: round(a.z + b.z),
  };
}

export function calcVectorDiff(a: Vector3D, b: Vector3D): Vector3D {
  return {
    x: round(a.x - b.x),
    y: round(a.y - b.y),
    z: round(a.z - b.z),
  };
}

export function calcDotProduct(a: Vector3D, b: Vector3D): number {
  return round(a.x * b.x + a.y * b.y + a.z * b.z);
}

export function calcCrossProduct(a: Vector3D, b: Vector3D): Vector3D {
  return {
    x: round(a.y * b.z - a.z * b.y),
    y: round(a.z * b.x - a.x * b.z),
    z: round(a.x * b.y - a.y * b.x),
  };
}

export function calculateVectors(a: Vector3D, b: Vector3D): VectorCalculationResult {
  const magA = round(calcVectorMagnitude(a));
  const magB = round(calcVectorMagnitude(b));
  const unitA = calcUnitVector(a);
  const unitB = calcUnitVector(b);
  const sum = calcVectorSum(a, b);
  const diff = calcVectorDiff(a, b);
  const dotProduct = calcDotProduct(a, b);

  let angleRad = 0;
  let angleDeg = 0;
  if (magA > 0 && magB > 0) {
    const cosTheta = Math.max(-1, Math.min(1, dotProduct / (magA * magB)));
    angleRad = round(Math.acos(cosTheta));
    angleDeg = round((angleRad * 180) / Math.PI, 2);
  }

  const isOrthogonal = Math.abs(dotProduct) < 1e-6;

  const crossProduct = calcCrossProduct(a, b);
  const crossMag = round(calcVectorMagnitude(crossProduct));
  const isParallel = crossMag < 1e-6;

  const parallelogramArea = crossMag;
  const triangleArea = round(crossMag / 2);

  let scalarProjAonB = 0;
  let vectorProjAonB: Vector3D = { x: 0, y: 0, z: 0 };
  if (magB > 0) {
    scalarProjAonB = round(dotProduct / magB);
    const scale = dotProduct / (magB * magB);
    vectorProjAonB = {
      x: round(b.x * scale),
      y: round(b.y * scale),
      z: round(b.z * scale),
    };
  }

  return {
    magA,
    magB,
    unitA,
    unitB,
    sum,
    diff,
    dotProduct,
    angleRad,
    angleDeg,
    isOrthogonal,
    crossProduct,
    crossMag,
    isParallel,
    parallelogramArea,
    triangleArea,
    scalarProjAonB,
    vectorProjAonB,
  };
}
