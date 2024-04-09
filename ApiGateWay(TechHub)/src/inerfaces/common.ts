/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Title: 'Maked error response '
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 27-12-2023
 *
 */

import { IErrorMessages } from './error';

export type IErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IErrorMessages[];
};

export type IGenericResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: any;
};
