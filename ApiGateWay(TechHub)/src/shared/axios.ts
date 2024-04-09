import axios, { AxiosInstance } from 'axios';

import config from '../config';
import { response } from 'express';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return error;
    },
  );

  instance.interceptors.response.use(
    response => {
      // console.log(response);
      return response.data;
    },
    error => {
      // return Promise.reject(error);
      return error;
    },
  );

  return instance;
};

const AuthService = HttpService(config.auth_service_url as string);
const ProductService = HttpService(config.product_service_url as string);

export { HttpService, AuthService, ProductService };
