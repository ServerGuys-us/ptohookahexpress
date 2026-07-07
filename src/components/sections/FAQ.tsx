import { Plus } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';

const FAQS = [
  {
    q: 'What areas do you serve?',
    a: 'We travel throughout the greater Houston metro. Bookings outside our standard radius may include a small travel fee — just ask when you book.',
  },
  {
    q: 'What do you provide, and what do I need?',
    a: 'We bring the hookahs, premium shisha, fresh coals, and everything needed to run them, plus setup and teardown. You just provide the space — an outlet is not required. Lounge furniture and sound are optional add-ons.',
  },
  {
    q: 'Is there an age requirement?',
    a: 'Yes. All guests using hookah must be 21 or older, and valid government-issued photo ID is required. Our host may check IDs on arrival.',
  },
  {
    q: 'How do deposits work?',
    a: 'A deposit is required to confirm your date. The amount depends on your package and group size, and it is applied toward your final total on the day of your event.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Bookings can be rescheduled or cancelled with at least 48 hours notice for a full deposit refund. Cancellations inside 48 hours forfeit the deposit.',
  },
  {
    q: 'How many guests can you serve?',
    a: 'We serve events from 2 up to 20 guests. For larger parties, ask about our Private Event package with multiple hookah stations.',
  },
  {
    q: 'When are you available, and how fast is confirmation?',
    a: 'We book events nightly, 6PM to 2AM. We confirm availability within 2 hours during those hours by email or phone with next steps.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-[var(--nav-height)] border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">Good to know</h2>
          <p className="mt-4 text-lg text-text-secondary">
            The details before you book. Still have a question? Reach out and we&apos;ll help.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-border bg-bg px-6 open:border-border-strong"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-bold text-text-primary [&::-webkit-details-marker]:hidden">
                {q}
                <Plus
                  size={20}
                  aria-hidden
                  className="shrink-0 text-accent transition-transform duration-[var(--duration-base)] ease-[var(--ease-default)] group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-text-secondary">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
