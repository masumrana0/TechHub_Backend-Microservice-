import { Request } from 'express';
import { ProductService as HttpService } from '../../../shared/axios';

const createRating = async (req: Request) => {
  const response = await HttpService.post('/rating', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });

  return response;
};

const getSpecificProductReting = async (req: Request) => {
  const { productId } = req.params;
  const response = await HttpService.get(`/rating/${productId}`);

  return response;
};

export const RatingService = {
  getSpecificProductReting,
  createRating,
};
