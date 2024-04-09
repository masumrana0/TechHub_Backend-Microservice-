import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helper/paginationHelper';
import { IPaginationOptions } from '../../../inerfaces/pagination';
import { productSearchableFields } from './product.constant';
import { IProduct, IProductFilters } from './product.interface';
import { Product } from './product.model';
import { IGenericResponse } from '../../../shared/sendResponse';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

// create product
const createProduct = async (payload: IProduct): Promise<IProduct | null> => {
  // Check if status is not provided in the payload, default it to 'In Stock'
  if (!payload.status) {
    payload.status = 'In Stock';
  }

  const result = (await Product.create(payload)).populate('category');
  return result;
};

// getSingle product
const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  if (!result) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'product not pund.Invalid productId',
    );
  }

  return result;
};

// get  all product with implemented filtering and Searching
const getAllProduct = async (
  filters: IProductFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IProduct[]>> => {
  // Extract searchTerm to implement search query
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: productSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // Filters needs $and to fullfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // Dynamic sort needs  fields to  do sorting
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  // If there is no condition , put {} to give all data
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Product.find(whereConditions)
    .populate('category')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments(whereConditions);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const ProductService = {
  createProduct,
  getSingleProduct,
  getAllProduct,
};
