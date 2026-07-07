'use server';

import { bookingSchema, type BookingInput } from '@/lib/validations';

export type BookingResult =
  | { status: 'success' }
  | { status: 'error'; message: string };

export async function submitBooking(data: BookingInput): Promise<BookingResult> {
  const parsed = bookingSchema.safeParse(data);

  if (!parsed.success) {
    return { status: 'error', message: 'Some fields need attention. Please review and resubmit.' };
  }

  try {
    // TODO: wire to email/webhook provider. For now, record the request server-side.
    const booking = parsed.data;
    console.info('[booking] new request', {
      name: booking.fullName,
      email: booking.email,
      location: booking.eventLocation,
      date: booking.eventDate,
      time: booking.startTime,
      guests: booking.guestCount,
      occasion: booking.occasion,
      package: booking.packageInterest,
    });

    return { status: 'success' };
  } catch {
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again or call us.',
    };
  }
}
