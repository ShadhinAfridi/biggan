import { describe, it, expect } from 'vitest';
import {
  calcVernierConstant,
  calcSlideCalipers,
  calcScrewGaugeLeastCount,
  calcScrewGaugeReading,
  calcSphereVolume,
  calcCylinderVolume,
  calcMotionEquation,
  calcVerticalProjection,
  calcNewtonSecondLaw,
  calcMomentumConservation,
  calcGravitationalForce,
  calcWork,
  calcKineticEnergy,
  calcPotentialEnergy,
  calcPowerAndEfficiency,
  calcPressure,
  calcLiquidPressure,
  calcHydraulicPress,
  calcYoungsModulus,
  convertTemperature,
  calcThermalExpansion,
  calcSensibleHeat,
  calcLatentHeat,
  calcWaveSpeed,
  calcSpeedOfSoundTemp,
  calcEchoDistance,
  calcMirrorEquation,
  calcSnellsLaw,
  calcCriticalAngle,
  calcLensEquation,
  calcCoulombsLaw,
  calcElectricFieldAndPotential,
  calcCapacitance,
  calcOhmsLaw,
  calcResistivityAndResistance,
  calcEquivalentResistance,
  calcElectricityBill,
  calcTransformer,
  calcMassEnergyEquivalence,
  calcRadioactiveDecay,
} from '../src/tools/physics/engine';
import { PHYSICAL_CONSTANTS } from '../src/tools/physics/constants';

describe('SSC Physics Engine - All 13 Chapters Unit Tests', () => {
  // Chapter 1
  it('Chapter 1: Vernier Constant and Slide Calipers Reading', () => {
    const vcRes = calcVernierConstant(1, 10);
    expect(vcRes.success).toBe(true);
    expect(vcRes.value).toBe(0.1);

    const scRes = calcSlideCalipers(12, 6, 0.1, 0);
    expect(scRes.success).toBe(true);
    expect(scRes.value).toBe(12.6);

    const lcRes = calcScrewGaugeLeastCount(1, 100);
    expect(lcRes.success).toBe(true);
    expect(lcRes.value).toBe(0.01);

    const sgRes = calcScrewGaugeReading(5, 45, 0.01, 0.02);
    expect(sgRes.success).toBe(true);
    expect(sgRes.value).toBeCloseTo(5 + 0.45 - 0.02);

    const sphereRes = calcSphereVolume(3);
    expect(sphereRes.success).toBe(true);
    expect(Number(sphereRes.value)).toBeCloseTo((4 / 3) * Math.PI * 27);
  });

  // Chapter 2
  it('Chapter 2: Kinematics Equations & Vertical Projection', () => {
    const vRes = calcMotionEquation('v', { u: 10, a: 2, t: 5 });
    expect(vRes.success).toBe(true);
    expect(vRes.value).toBe(20);

    const sRes = calcMotionEquation('s', { u: 0, a: 9.8, t: 3 });
    expect(sRes.success).toBe(true);
    expect(Number(sRes.value)).toBeCloseTo(0.5 * 9.8 * 9);

    const projRes = calcVerticalProjection(19.6, 9.8);
    expect(projRes.success).toBe(true);
    expect(Number(projRes.value)).toBeCloseTo(19.6); // H_max = (19.6)^2 / (2 * 9.8) = 19.6 m
    expect(projRes.extraData?.t_rise).toBeCloseTo(2); // 19.6 / 9.8 = 2 s
    expect(projRes.extraData?.T_flight).toBeCloseTo(4);
  });

  // Chapter 3
  it('Chapter 3: Newton Second Law, Momentum Conservation & Gravitation', () => {
    const fRes = calcNewtonSecondLaw('F', { m: 5, a: 3 });
    expect(fRes.success).toBe(true);
    expect(fRes.value).toBe(15);

    // Inelastic collision: 2kg at 4 m/s and 3kg at -1 m/s
    const collRes = calcMomentumConservation(2, 4, 3, -1);
    expect(collRes.success).toBe(true);
    expect(Number(collRes.value)).toBeCloseTo((8 - 3) / 5); // 1 m/s

    const gRes = calcGravitationalForce(10, 20, 2);
    expect(gRes.success).toBe(true);
    expect(Number(gRes.value)).toBeCloseTo((PHYSICAL_CONSTANTS.G_GRAVITATION * 200) / 4);
  });

  // Chapter 4
  it('Chapter 4: Work, Energy, Power & Efficiency', () => {
    const workRes = calcWork(100, 5, 60);
    expect(workRes.success).toBe(true);
    expect(Number(workRes.value)).toBeCloseTo(100 * 5 * 0.5); // 250 J

    const ekRes = calcKineticEnergy('Ek', { m: 4, v: 5 });
    expect(ekRes.success).toBe(true);
    expect(ekRes.value).toBe(50); // 0.5 * 4 * 25 = 50 J

    const epRes = calcPotentialEnergy(10, 5, 9.8);
    expect(epRes.success).toBe(true);
    expect(epRes.value).toBe(490);

    const effRes = calcPowerAndEfficiency(800, 1000, 10);
    expect(effRes.success).toBe(true);
    expect(effRes.value).toBe(80); // 80%
  });

  // Chapter 5
  it('Chapter 5: Pressure, Hydraulic Press & Youngs Modulus', () => {
    const pRes = calcPressure(500, 0.25);
    expect(pRes.success).toBe(true);
    expect(pRes.value).toBe(2000);

    const lpRes = calcLiquidPressure(2, 1000, 9.8);
    expect(lpRes.success).toBe(true);
    expect(lpRes.value).toBe(19600);

    // Hydraulic press: d1=2, d2=10, F1=50 => F2 = 50 * (10/2)^2 = 50 * 25 = 1250 N
    const hpRes = calcHydraulicPress(50, 2, 10, true);
    expect(hpRes.success).toBe(true);
    expect(hpRes.value).toBe(1250);

    const ymRes = calcYoungsModulus(100, 2, 0.001, 0.002);
    expect(ymRes.success).toBe(true);
    expect(ymRes.value).toBe(100000000);
  });

  // Chapter 6
  it('Chapter 6: Temperature Conversion, Thermal Expansion & Heat', () => {
    const tempRes = convertTemperature(100, 'C', true);
    expect(tempRes.success).toBe(true);
    expect(tempRes.extraData?.F).toBe(212);
    expect(tempRes.extraData?.K).toBe(373);

    const expRes = calcThermalExpansion('linear', 10, 11e-6, 50);
    expect(expRes.success).toBe(true);
    expect(expRes.extraData?.deltaVal).toBeCloseTo(11e-6 * 10 * 50);

    const qRes = calcSensibleHeat(2, 4200, 20);
    expect(qRes.success).toBe(true);
    expect(qRes.value).toBe(168000);

    const latRes = calcLatentHeat(2, 'fusion');
    expect(latRes.success).toBe(true);
    expect(latRes.value).toBe(2 * 336000);
  });

  // Chapter 7
  it('Chapter 7: Waves, Sound Speed with Temperature & Echo', () => {
    const waveRes = calcWaveSpeed(250, 1.36);
    expect(waveRes.success).toBe(true);
    expect(waveRes.value).toBeCloseTo(340);

    const soundTempRes = calcSpeedOfSoundTemp(30);
    expect(soundTempRes.success).toBe(true);
    expect(soundTempRes.value).toBeCloseTo(332 + 0.6 * 30); // 350 m/s
    expect(soundTempRes.extraData?.minEchoDist).toBeCloseTo((350 * 0.1) / 2); // 17.5 m

    const echoRes = calcEchoDistance(332, 0.2, 'd');
    expect(echoRes.success).toBe(true);
    expect(echoRes.value).toBeCloseTo((332 * 0.2) / 2); // 33.2 m
  });

  // Chapter 8
  it('Chapter 8: Concave and Convex Mirrors', () => {
    // Concave mirror: f = 15 cm, object at u = 30 cm (at center of curvature)
    const mirrorRes = calcMirrorEquation('concave', 30, 15, 5);
    expect(mirrorRes.success).toBe(true);
    expect(Number(mirrorRes.value)).toBeCloseTo(30);
    expect(mirrorRes.extraData?.isReal).toBe(true);
    expect(mirrorRes.extraData?.absM).toBeCloseTo(1);
    expect(mirrorRes.extraData?.hi).toBeCloseTo(5);

    // Convex mirror: f = -15 cm, object at u = 10 cm => virtual image
    const convexRes = calcMirrorEquation('convex', 10, 15);
    expect(convexRes.success).toBe(true);
    expect(Number(convexRes.value)).toBeLessThan(0); // Virtual
    expect(convexRes.extraData?.isReal).toBe(false);
  });

  // Chapter 9
  it('Chapter 9: Refraction, Snell Law, Critical Angle & Lens Power', () => {
    // Air (1.0) to Water (1.33), theta1 = 30 deg
    const snellRes = calcSnellsLaw(1.0, 30, 1.33);
    expect(snellRes.success).toBe(true);
    expect(Number(snellRes.value)).toBeGreaterThan(0);
    expect(Number(snellRes.value)).toBeLessThan(30);

    // Water to air critical angle: arcsin(1.0 / 1.33) ~ 48.75 deg
    const critRes = calcCriticalAngle(1.33, 1.0);
    expect(critRes.success).toBe(true);
    expect(Number(critRes.value)).toBeCloseTo(48.75, 1);

    // Lens: f = 20 cm convex (P = 1/0.2 = +5 D), u = 30 cm
    const lensRes = calcLensEquation('convex', 30, 20);
    expect(lensRes.success).toBe(true);
    expect(Number(lensRes.value)).toBeCloseTo(60); // 1/v = 1/20 - 1/30 = 1/60 => v = 60 cm
    expect(lensRes.extraData?.power).toBeCloseTo(5);
  });

  // Chapter 10
  it('Chapter 10: Coulomb Law, Field Intensity & Potential', () => {
    const cRes = calcCoulombsLaw(2e-6, 3e-6, 0.1);
    expect(cRes.success).toBe(true);
    expect(Number(cRes.value)).toBeCloseTo((9e9 * 6e-12) / 0.01); // 5.4 N

    const fRes = calcElectricFieldAndPotential(4e-6, 0.2);
    expect(fRes.success).toBe(true);
    expect(Number(fRes.value)).toBeCloseTo((9e9 * 4e-6) / 0.04);
    expect(fRes.extraData?.V).toBeCloseTo((9e9 * 4e-6) / 0.2);

    const capRes = calcCapacitance(10e-6, 5);
    expect(capRes.success).toBe(true);
    expect(capRes.value).toBeCloseTo(2e-6);
  });

  // Chapter 11
  it('Chapter 11: Ohms Law, Resistivity, Equivalent Resistors & Electricity Bill', () => {
    const ohmRes = calcOhmsLaw('I', { V: 220, R: 44 });
    expect(ohmRes.success).toBe(true);
    expect(ohmRes.value).toBe(5);

    const resRes = calcResistivityAndResistance(1.7e-8, 100, 1e-6);
    expect(resRes.success).toBe(true);
    expect(Number(resRes.value)).toBeCloseTo(1.7);

    const seriesRes = calcEquivalentResistance('series', [10, 20, 30]);
    expect(seriesRes.success).toBe(true);
    expect(seriesRes.value).toBe(60);

    const parallelRes = calcEquivalentResistance('parallel', [10, 10]);
    expect(parallelRes.success).toBe(true);
    expect(parallelRes.value).toBe(5);

    // Bill: 1000 W for 5 hrs daily for 30 days = 150 kWh @ 7.5 BDT = 1125 BDT
    const billRes = calcElectricityBill(1000, 5, 30, 7.5);
    expect(billRes.success).toBe(true);
    expect(billRes.value).toBe(1125);
    expect(billRes.extraData?.energyKWh).toBe(150);
  });

  // Chapter 12
  it('Chapter 12: Transformer Calculations & Classification', () => {
    // Vp = 220, Np = 100, Ns = 500 => Vs = 1100 V (Step-up)
    const transRes = calcTransformer(220, 100, 500, 10, 100);
    expect(transRes.success).toBe(true);
    expect(transRes.value).toBe(1100);
    expect(transRes.extraData?.isStepUp).toBe(true);
    expect(transRes.extraData?.Is).toBeCloseTo(2); // 10 * (220/1100) = 2 A
  });

  // Chapter 13
  it('Chapter 13: Mass-Energy Equivalence & Radioactive Decay', () => {
    // E = mc^2 for 1 gram (0.001 kg)
    const meRes = calcMassEnergyEquivalence(0.001);
    expect(meRes.success).toBe(true);
    expect(Number(meRes.value)).toBeCloseTo(0.001 * 9e16); // 9e13 J

    // Half-life: 100 g, Thalf = 10 years, t = 30 years (3 half-lives => 12.5 g)
    const decayRes = calcRadioactiveDecay(100, 10, 30);
    expect(decayRes.success).toBe(true);
    expect(Number(decayRes.value)).toBeCloseTo(12.5);
    expect(decayRes.extraData?.lambda).toBeCloseTo(0.693 / 10, 2);
  });
});
