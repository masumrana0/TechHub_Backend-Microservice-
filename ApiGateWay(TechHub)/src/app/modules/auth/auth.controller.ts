/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { AuthService } from './auth.service';
import config from '../../../config';

// admin Registration

const adminRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.AdminRegistration(req);
    const { data, ...others } = result;
    const { refreshToken, ...othersData } = data;
    const response = { ...others, ...othersData };

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

const customerRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.CustomerRegistration(req);

    const { data, ...others } = result;
    const { refreshToken, ...othersData } = data;
    const response = { ...others, ...othersData };

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

// basic auth
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.userLogin(req);

    const { data, ...others } = result;
    const { refreshToken, ...othersData } = data;
    const response = { ...others, ...othersData };

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

// refreshToken
const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.refreshToken(req);
    const { data, ...others } = result;

    res.send(result);
  } catch (error) {
    next(error);
  }
};

const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AuthService.changePassword(req);

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  loginUser,
  refreshToken,
  changePassword,
  customerRegistration,
  adminRegistration,
};
