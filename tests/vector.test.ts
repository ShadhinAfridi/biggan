import { describe, it, expect } from 'vitest';
import {
  calcVectorMagnitude,
  calcUnitVector,
  calcVectorSum,
  calcVectorDiff,
  calcDotProduct,
  calcCrossProduct,
  calculateVectors,
} from '../src/tools/vector/engine';

describe('Vector Engine Suite', () => {
  it('calculates vector magnitude correctly', () => {
    const v = { x: 3, y: 4, z: 0 };
    expect(calcVectorMagnitude(v)).toBe(5);

    const v3d = { x: 2, y: 3, z: 6 };
    expect(calcVectorMagnitude(v3d)).toBe(7);
  });

  it('calculates unit vector correctly', () => {
    const v = { x: 0, y: 5, z: 0 };
    expect(calcUnitVector(v)).toEqual({ x: 0, y: 1, z: 0 });
  });

  it('calculates vector addition and subtraction', () => {
    const a = { x: 1, y: 2, z: 3 };
    const b = { x: 4, y: 5, z: 6 };
    expect(calcVectorSum(a, b)).toEqual({ x: 5, y: 7, z: 9 });
    expect(calcVectorDiff(a, b)).toEqual({ x: -3, y: -3, z: -3 });
  });

  it('calculates dot product and detects orthogonality', () => {
    const a = { x: 2, y: -3, z: 1 };
    const b = { x: 3, y: 2, z: 0 }; // 2*3 + (-3)*2 + 1*0 = 6 - 6 = 0
    const res = calculateVectors(a, b);
    expect(res.dotProduct).toBe(0);
    expect(res.isOrthogonal).toBe(true);
    expect(res.angleDeg).toBe(90);
  });

  it('calculates cross product and parallelism correctly', () => {
    const a = { x: 1, y: 0, z: 0 }; // i
    const b = { x: 0, y: 1, z: 0 }; // j
    const cross = calcCrossProduct(a, b); // should be k (0, 0, 1)
    expect(cross).toEqual({ x: 0, y: 0, z: 1 });

    const parallelA = { x: 2, y: 4, z: 6 };
    const parallelB = { x: 4, y: 8, z: 12 };
    const res = calculateVectors(parallelA, parallelB);
    expect(res.isParallel).toBe(true);
    expect(res.crossMag).toBe(0);
  });

  it('calculates parallelogram and triangle area', () => {
    const a = { x: 3, y: 0, z: 0 };
    const b = { x: 0, y: 4, z: 0 };
    const res = calculateVectors(a, b);
    expect(res.parallelogramArea).toBe(12);
    expect(res.triangleArea).toBe(6);
  });
});
