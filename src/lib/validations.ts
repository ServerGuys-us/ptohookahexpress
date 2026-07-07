import { z } from 'zod';

export const START_TIMES = [
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
  '10:00 PM',
  '11:00 PM',
  '12:00 AM',
  '1:00 AM',
] as const;

export const OCCASIONS = [
  'Birthday',
  'Bachelorette',
  'Corporate',
  'Date Night',
  'Other',
] as const;

export const PACKAGES = ['Base', 'VIP', 'Private Buy-Out'] as const;

export const MIN_GUESTS = 2;
export const MAX_GUESTS = 20;

export const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(10, 'Enter a valid phone number')
    .max(20, 'Enter a valid phone number')
    .regex(/^[0-9()+\-.\s]+$/, 'Enter a valid phone number'),
  eventDate: z
    .string()
    .min(1, 'Pick an event date')
    .refine((v) => !Number.isNaN(Date.parse(v)), 'Pick a valid date')
    .refine((v) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(v) >= today;
    }, 'Date cannot be in the past'),
  startTime: z.enum(START_TIMES, { errorMap: () => ({ message: 'Choose a start time' }) }),
  guestCount: z.coerce
    .number({ invalid_type_error: 'Enter a guest count' })
    .int('Whole numbers only')
    .min(MIN_GUESTS, `Minimum ${MIN_GUESTS} guests`)
    .max(MAX_GUESTS, `Maximum ${MAX_GUESTS} guests`),
  occasion: z.enum(OCCASIONS, { errorMap: () => ({ message: 'Select an occasion' }) }),
  packageInterest: z.enum(PACKAGES, { errorMap: () => ({ message: 'Select a package' }) }),
  specialRequests: z.string().trim().max(1000, 'Keep it under 1000 characters').optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
