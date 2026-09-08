export interface ElementData {
  symbol: string;
  nameEn: string;
  nameBn: string;
  atomicNumber: number;
  atomicMass: number;
  group?: number;
  period: number;
}

export const ELEMENTS: Record<string, ElementData> = {
  H: { symbol: 'H', nameEn: 'Hydrogen', nameBn: 'হাইড্রোজেন', atomicNumber: 1, atomicMass: 1.008, period: 1, group: 1 },
  He: { symbol: 'He', nameEn: 'Helium', nameBn: 'হিলিয়াম', atomicNumber: 2, atomicMass: 4.0026, period: 1, group: 18 },
  Li: { symbol: 'Li', nameEn: 'Lithium', nameBn: 'লিথিয়াম', atomicNumber: 3, atomicMass: 6.94, period: 2, group: 1 },
  Be: { symbol: 'Be', nameEn: 'Beryllium', nameBn: 'বেরিলিয়াম', atomicNumber: 4, atomicMass: 9.0122, period: 2, group: 2 },
  B: { symbol: 'B', nameEn: 'Boron', nameBn: 'বোরন', atomicNumber: 5, atomicMass: 10.81, period: 2, group: 13 },
  C: { symbol: 'C', nameEn: 'Carbon', nameBn: 'কার্বন', atomicNumber: 6, atomicMass: 12.011, period: 2, group: 14 },
  N: { symbol: 'N', nameEn: 'Nitrogen', nameBn: 'নাইট্রোজেন', atomicNumber: 7, atomicMass: 14.007, period: 2, group: 15 },
  O: { symbol: 'O', nameEn: 'Oxygen', nameBn: 'অক্সিজেন', atomicNumber: 8, atomicMass: 15.999, period: 2, group: 16 },
  F: { symbol: 'F', nameEn: 'Fluorine', nameBn: 'ফ্লোরিন', atomicNumber: 9, atomicMass: 18.998, period: 2, group: 17 },
  Ne: { symbol: 'Ne', nameEn: 'Neon', nameBn: 'নিয়ন', atomicNumber: 10, atomicMass: 20.180, period: 2, group: 18 },
  Na: { symbol: 'Na', nameEn: 'Sodium', nameBn: 'সোডিয়াম', atomicNumber: 11, atomicMass: 22.990, period: 3, group: 1 },
  Mg: { symbol: 'Mg', nameEn: 'Magnesium', nameBn: 'ম্যাগনেসিয়াম', atomicNumber: 12, atomicMass: 24.305, period: 3, group: 2 },
  Al: { symbol: 'Al', nameEn: 'Aluminum', nameBn: 'অ্যালুমিনিয়াম', atomicNumber: 13, atomicMass: 26.982, period: 3, group: 13 },
  Si: { symbol: 'Si', nameEn: 'Silicon', nameBn: 'সিলিকন', atomicNumber: 14, atomicMass: 28.085, period: 3, group: 14 },
  P: { symbol: 'P', nameEn: 'Phosphorus', nameBn: 'ফসফরাস', atomicNumber: 15, atomicMass: 30.974, period: 3, group: 15 },
  S: { symbol: 'S', nameEn: 'Sulfur', nameBn: 'গন্ধক (সালফার)', atomicNumber: 16, atomicMass: 32.06, period: 3, group: 16 },
  Cl: { symbol: 'Cl', nameEn: 'Chlorine', nameBn: 'ক্লোরিন', atomicNumber: 17, atomicMass: 35.45, period: 3, group: 17 },
  Ar: { symbol: 'Ar', nameEn: 'Argon', nameBn: 'আর্গন', atomicNumber: 18, atomicMass: 39.948, period: 3, group: 18 },
  K: { symbol: 'K', nameEn: 'Potassium', nameBn: 'পটাশিয়াম', atomicNumber: 19, atomicMass: 39.098, period: 4, group: 1 },
  Ca: { symbol: 'Ca', nameEn: 'Calcium', nameBn: 'ক্যালসিয়াম', atomicNumber: 20, atomicMass: 40.078, period: 4, group: 2 },
  Sc: { symbol: 'Sc', nameEn: 'Scandium', nameBn: 'স্ক্যান্ডিয়াম', atomicNumber: 21, atomicMass: 44.956, period: 4, group: 3 },
  Ti: { symbol: 'Ti', nameEn: 'Titanium', nameBn: 'টাইটানিয়াম', atomicNumber: 22, atomicMass: 47.867, period: 4, group: 4 },
  V: { symbol: 'V', nameEn: 'Vanadium', nameBn: 'ভ্যানাডিয়াম', atomicNumber: 23, atomicMass: 50.942, period: 4, group: 5 },
  Cr: { symbol: 'Cr', nameEn: 'Chromium', nameBn: 'ক্রোমিয়াম', atomicNumber: 24, atomicMass: 51.996, period: 4, group: 6 },
  Mn: { symbol: 'Mn', nameEn: 'Manganese', nameBn: 'ম্যাঙ্গানিজ', atomicNumber: 25, atomicMass: 54.938, period: 4, group: 7 },
  Fe: { symbol: 'Fe', nameEn: 'Iron', nameBn: 'লোহা (আয়রন)', atomicNumber: 26, atomicMass: 55.845, period: 4, group: 8 },
  Co: { symbol: 'Co', nameEn: 'Cobalt', nameBn: 'কোবাল্ট', atomicNumber: 27, atomicMass: 58.933, period: 4, group: 9 },
  Ni: { symbol: 'Ni', nameEn: 'Nickel', nameBn: 'নিকেল', atomicNumber: 28, atomicMass: 58.693, period: 4, group: 10 },
  Cu: { symbol: 'Cu', nameEn: 'Copper', nameBn: 'তামা (কপার)', atomicNumber: 29, atomicMass: 63.546, period: 4, group: 11 },
  Zn: { symbol: 'Zn', nameEn: 'Zinc', nameBn: 'দস্তা (জিঙ্ক)', atomicNumber: 30, atomicMass: 65.38, period: 4, group: 12 },
  Ga: { symbol: 'Ga', nameEn: 'Gallium', nameBn: 'গ্যালিয়াম', atomicNumber: 31, atomicMass: 69.723, period: 4, group: 13 },
  Ge: { symbol: 'Ge', nameEn: 'Germanium', nameBn: 'জার্মেনিয়াম', atomicNumber: 32, atomicMass: 72.630, period: 4, group: 14 },
  As: { symbol: 'As', nameEn: 'Arsenic', nameBn: 'আর্সেনিক', atomicNumber: 33, atomicMass: 74.922, period: 4, group: 15 },
  Se: { symbol: 'Se', nameEn: 'Selenium', nameBn: 'সেলেনিয়াম', atomicNumber: 34, atomicMass: 78.971, period: 4, group: 16 },
  Br: { symbol: 'Br', nameEn: 'Bromine', nameBn: 'ব্রোমিন', atomicNumber: 35, atomicMass: 79.904, period: 4, group: 17 },
  Kr: { symbol: 'Kr', nameEn: 'Krypton', nameBn: 'ক্রিপ্টন', atomicNumber: 36, atomicMass: 83.798, period: 4, group: 18 },
  Rb: { symbol: 'Rb', nameEn: 'Rubidium', nameBn: 'রুবিডিয়াম', atomicNumber: 37, atomicMass: 85.468, period: 5, group: 1 },
  Sr: { symbol: 'Sr', nameEn: 'Strontium', nameBn: 'স্ট্রনশিয়াম', atomicNumber: 38, atomicMass: 87.62, period: 5, group: 2 },
  Ag: { symbol: 'Ag', nameEn: 'Silver', nameBn: 'রূপা (সিলভার)', atomicNumber: 47, atomicMass: 107.868, period: 5, group: 11 },
  Cd: { symbol: 'Cd', nameEn: 'Cadmium', nameBn: 'ক্যাডমিয়াম', atomicNumber: 48, atomicMass: 112.414, period: 5, group: 12 },
  Sn: { symbol: 'Sn', nameEn: 'Tin', nameBn: 'টিন', atomicNumber: 50, atomicMass: 118.710, period: 5, group: 14 },
  Sb: { symbol: 'Sb', nameEn: 'Antimony', nameBn: 'অ্যান্টিমণি', atomicNumber: 51, atomicMass: 121.760, period: 5, group: 15 },
  I: { symbol: 'I', nameEn: 'Iodine', nameBn: 'আয়োডিন', atomicNumber: 53, atomicMass: 126.904, period: 5, group: 17 },
  Xe: { symbol: 'Xe', nameEn: 'Xenon', nameBn: 'জেনন', atomicNumber: 54, atomicMass: 131.293, period: 5, group: 18 },
  Cs: { symbol: 'Cs', nameEn: 'Cesium', nameBn: 'সিজিয়াম', atomicNumber: 55, atomicMass: 132.905, period: 6, group: 1 },
  Ba: { symbol: 'Ba', nameEn: 'Barium', nameBn: 'বেরিয়াম', atomicNumber: 56, atomicMass: 137.327, period: 6, group: 2 },
  Pt: { symbol: 'Pt', nameEn: 'Platinum', nameBn: 'প্লাটিনাম', atomicNumber: 78, atomicMass: 195.084, period: 6, group: 10 },
  Au: { symbol: 'Au', nameEn: 'Gold', nameBn: 'স্বর্ণ (গোল্ড)', atomicNumber: 79, atomicMass: 196.967, period: 6, group: 11 },
  Hg: { symbol: 'Hg', nameEn: 'Mercury', nameBn: 'পারদ (মার্কারি)', atomicNumber: 80, atomicMass: 200.592, period: 6, group: 12 },
  Pb: { symbol: 'Pb', nameEn: 'Lead', nameBn: 'সীসা (লেড)', atomicNumber: 82, atomicMass: 207.2, period: 6, group: 14 },
  Bi: { symbol: 'Bi', nameEn: 'Bismuth', nameBn: 'বিসমাথ', atomicNumber: 83, atomicMass: 208.980, period: 6, group: 15 },
  U: { symbol: 'U', nameEn: 'Uranium', nameBn: 'ইউরেনিয়াম', atomicNumber: 92, atomicMass: 238.029, period: 7, group: 3 },
};
