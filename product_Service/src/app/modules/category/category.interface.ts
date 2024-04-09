export type ICategoryType =
  | 'Motherboard'
  | 'CPU'
  | 'RAM'
  | 'SSD'
  | 'HDD'
  | 'GPU'
  | 'PSU'
  | 'Case'
  | 'Cooling_Fen'
  | 'Monitor'
  | 'Mouse'
  | 'Speakers'
  | 'Networking_Accessories';

// Array of ICategoryType
export const categoryTypes: ICategoryType[] = [
  'Motherboard',
  'CPU',
  'RAM',
  'SSD',
  'HDD',
  'GPU',
  'PSU',
  'Case',
  'Cooling_Fen',
  'Monitor',
  'Mouse',
  'Speakers',
  'Networking_Accessories',
];

export type ICategory = {
  _id?: string;
  categoryType: ICategoryType;
};
