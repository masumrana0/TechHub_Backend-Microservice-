/**
 * Title: 'Authentication zod Schema'
 * Description: 'User authentication zod Schema'
 * Author: 'Masum Rana'
 * Date: 29-12-2023
 *
 */

import z from 'zod';

// user login validation schema
const userLoginZodSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email format' }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

// customer registration validation schema
const customerRegisterZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string(),
      lastName: z.string().optional(),
    }),
    phoneNumber: z.string(),
    email: z.string().email(),
    password: z.string(),
  }),
});

// admin registration validation schema
const adminRegisterZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string(),
      lastName: z.string().optional(),
    }),
    role: z.enum(['admin', 'super_admin']),
    phoneNumber: z.string(),
    email: z.string().email(),
    password: z.string(),
  }),
});

// refresh Token Zod Schema
const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});

// change Password Zod Schema
const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password  is required',
    }),
    newPassword: z.string({
      required_error: 'new password  is required',
    }),
  }),
});

export const authValidationSchema = {
  customerRegisterZodSchema,
  userLoginZodSchema,
  adminRegisterZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
};
