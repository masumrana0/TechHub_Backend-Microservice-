import { Request } from 'express';
import { AuthService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../inerfaces/common';

// admin and customer authentication
const updateProfile = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.patch(
    'profile',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization,
      },
    },
  );

  return response;
};

const getProfile = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('profile', {
    headers: {
      Authorization: req.headers.authorization,
    },
  });

  return response;
};

export const ProfileService = {
  updateProfile,
  getProfile,
};
