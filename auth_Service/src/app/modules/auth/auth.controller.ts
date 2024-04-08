import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AuthService } from './auth.service';
import config from '../../../config';
import sendResponse from '../../../shared/sendResponse';
import {
  ILoginUserResponse,
  IDataValidationResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { jwtHelpers } from '../../../helper/jwtHelpers';
import { Secret } from 'jsonwebtoken';

// userLogin
const userLogin = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await AuthService.userLogin(loginData);

  if ('validationResponse' in result) {
    // Handle validation errors
    sendResponse<IDataValidationResponse>(res, {
      statusCode: httpStatus.OK,
      success: false,
      message: 'Validation response',
      data: result,
    });
  } else {
    const { refreshToken, accessToken, isEmailVerified } = result;
    const responseData = { accessToken, isEmailVerified };
    // set refresh token into cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse<ILoginUserResponse>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully!',
      data: responseData,
    });
  }
});

// refreshToken
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully !',
    data: result,
  });
});

// change password
const changePassword = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const { ...passwordData } = req.body;

  await AuthService.changePassword(passwordData, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password changed successfully !',
    data: null,
  });
});

// email verification
const verification = catchAsync(async (req: Request, res: Response) => {
  // Extract the refreshToken from cookies
  let token: string = '';
  if (req.headers.authorization) {
    token = req.headers.authorization as string;
  } else if (req.query.token) {
    token = req.query.token as string;
  }

  //  Verify the Token to get the email
  const verifiedToken = jwtHelpers.verifyToken(
    token as string,
    config.accessTokenSecret as Secret,
  );
  const { email } = verifiedToken;

  // Call AuthService to verify the email
  await AuthService.verification(email as string);

  // Send success response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Your email is verified successfully!',
    data: null,
  });
});

const verificationEmailSendByClient = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;

    // Call AuthService to verify the email
    await AuthService.sendEmailVerificationMail(user?.email as string);

    // Send success response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Email send successfully!',
      data: null,
    });
  },
);

// const sendEmail = catchAsync(async (req: Request, res: Response) => {
//   await AuthService.sendEmailVerificationMail('masum.rana6267@gmail.com');
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Email send successful',
//     data: null,
//   });
// });

export const AuthController = {
  userLogin,
  refreshToken,
  changePassword,
  verification,
  verificationEmailSendByClient,
};
