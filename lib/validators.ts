import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must be a number with two decimal places'
  );

//schema for inserting products

export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be three characters long.'),
  slug: z.string().min(3, 'Slug must be three characters long.'),
  category: z.string().min(3, 'Category must be three characters long.'),
  brand: z.string().min(3, 'Brand must be three characters long.'),
  description: z.string().min(3, 'Description must be three characters long.'),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, 'At least one image is required')),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInFormSchema = z.object({
  email: z.string().email('Invalid Email Address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid Email Address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match', path: ['confirmPassword'],
  });
