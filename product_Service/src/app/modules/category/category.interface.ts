export const CategoryName = [
  'Mobile Phones',
  'PC Components',
  'Laptops',
  'Tablets',
];
export type ICategoryName =
  | 'Mobile Phones'
  | 'PC Components'
  | 'Laptops'
  | 'Tablets';

export type ICategory = {
  _id?: string;
  categoryName: ICategoryName;
  categoryType: string;
};
