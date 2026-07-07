'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, CalendarCheck } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { submitBooking } from '@/lib/actions';
import {
  bookingSchema,
  type BookingInput,
  START_TIMES,
  OCCASIONS,
  PACKAGES,
  MIN_GUESTS,
  MAX_GUESTS,
} from '@/lib/validations';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    mode: 'onBlur',
  });

  async function onSubmit(data: BookingInput) {
    setServerError(null);
    const result = await submitBooking(data);
    if (result.status === 'success') {
      reset();
      setSubmitted(true);
    } else {
      setServerError(result.message);
    }
  }

  return (
    <section
      id="booking"
      className="scroll-mt-[var(--nav-height)] border-t border-border bg-bg"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>Book Your Event</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">Request a booking</h2>
          <p className="mt-4 text-lg text-text-secondary">
            Tell us about your event and where to set up. We&apos;ll confirm availability within 2
            hours. A deposit secures your date.
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 rounded-xl border border-success bg-surface p-10 text-center">
            <CheckCircle2 size={44} className="mx-auto text-success" aria-hidden />
            <h3 className="mt-5 font-display text-2xl font-bold text-text-primary">
              Request received
            </h3>
            <p className="mx-auto mt-3 max-w-md text-text-secondary">
              Thanks — your booking request is in. We&apos;ll confirm within 2 hours during operating
              hours (Mon–Sun, 6PM–2AM).
            </p>
            <div className="mt-8">
              <Button variant="ghost" size="md" onClick={() => setSubmitted(false)}>
                Submit another request
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full name"
                required
                autoComplete="name"
                placeholder="Jordan Rivera"
                error={errors.fullName?.message}
                {...register('fullName')}
              />
              <Input
                label="Email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                error={errors.email?.message}
                {...register('email')}
              />
              <Input
                label="Phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(832) 555-0100"
                error={errors.phone?.message}
                {...register('phone')}
              />
              <Input
                label="Event location"
                required
                wrapperClassName="sm:col-span-2"
                autoComplete="street-address"
                placeholder="Address or venue where we'll set up"
                error={errors.eventLocation?.message}
                {...register('eventLocation')}
              />
              <Input
                label="Event date"
                type="date"
                required
                error={errors.eventDate?.message}
                {...register('eventDate')}
              />
              <Select
                label="Start time"
                required
                placeholder="Select a time"
                options={START_TIMES}
                error={errors.startTime?.message}
                {...register('startTime')}
              />
              <Input
                label="Guest count"
                type="number"
                required
                min={MIN_GUESTS}
                max={MAX_GUESTS}
                placeholder={`${MIN_GUESTS}–${MAX_GUESTS}`}
                error={errors.guestCount?.message}
                {...register('guestCount')}
              />
              <Select
                label="Occasion"
                required
                placeholder="Select an occasion"
                options={OCCASIONS}
                error={errors.occasion?.message}
                {...register('occasion')}
              />
              <Select
                label="Package interest"
                required
                placeholder="Select a package"
                options={PACKAGES}
                error={errors.packageInterest?.message}
                {...register('packageInterest')}
              />
            </div>

            <Textarea
              label="Special requests"
              rows={4}
              wrapperClassName="mt-5"
              placeholder="Decor, dietary notes, seating preferences…"
              error={errors.specialRequests?.message}
              {...register('specialRequests')}
            />

            {serverError && (
              <p role="alert" className="mt-6 rounded-md border border-error bg-surface px-4 py-3 text-sm text-error">
                {serverError}
              </p>
            )}

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={isSubmitting}>
                <CalendarCheck size={18} aria-hidden />
                {isSubmitting ? 'Sending…' : 'Request Booking'}
              </Button>
              <p className="text-xs text-text-secondary">
                Must be 21+ · Minimum {MIN_GUESTS} guests · Deposit required to confirm
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
