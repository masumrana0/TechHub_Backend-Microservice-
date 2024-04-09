import { ICategory } from './category.interface';
import { CategoryModel } from './category.model';

const createCategory = async (
  payload: ICategory,
): Promise<ICategory | null> => {
  const result = await CategoryModel.create(payload);
  return result as unknown as ICategory;
};

const getAllCategory = async (): Promise<ICategory[] | null> => {
  const result = await CategoryModel.find({});
  return result as unknown as ICategory[];
};

export const CategoryService = {
  createCategory,
  getAllCategory,
};
