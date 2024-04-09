import { Request } from 'express';
import { ProductService as HttpService } from '../../../shared/axios';
// product reivew part
const createReview = async (req: Request) => {
  const response = await HttpService.post('/review', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  // console.log('productservice', response);

  return response;
};

const getSpecificProductReview = async (req: Request) => {
  const { productId } = req.params;
  const response = await HttpService.get(`/review/${productId}`);
  // console.log('productservice', response);

  return response;
};

export const ReviewService = {
  createReview,
  getSpecificProductReview,
};
