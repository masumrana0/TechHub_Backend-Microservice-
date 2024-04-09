import { Request } from 'express';
import { AuthService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../inerfaces/common';

// admin and customer authentication
const AdminRegistration = async (req: Request): Promise<IGenericResponse> => {
  // connect to authservice database for user login
  const response: IGenericResponse = await HttpService.post(
    'auth/admin/register',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );

  return response;
};

const CustomerRegistration = async (
  req: Request,
): Promise<IGenericResponse> => {
  // connect to authservice database for user login
  const response: IGenericResponse = await HttpService.post(
    '/auth/customer/register',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );

  return response;
};

// basic authentication
const userLogin = async (req: Request): Promise<IGenericResponse> => {
  // connect to authservice database for user login
  const response: IGenericResponse = await HttpService.post(
    '/auth/login',
    req.body,
    {
      headers: {
        Authorization: req.headers.Authorization,
      },
    },
  );

  return response;
};

const refreshToken = async (req: Request): Promise<IGenericResponse> => {
  const { refreshToken } = req.cookies;
  const response: IGenericResponse = await HttpService.post(
    '/auth/refresh-token',
    req.body,
    {
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    },
  );
  return response;
};

const changePassword = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    '/auth/change-password',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );
  return response;
};

export const AuthService = {
  userLogin,
  refreshToken,
  changePassword,
  AdminRegistration,
  CustomerRegistration,
};
