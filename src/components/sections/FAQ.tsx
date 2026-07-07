import { Plus } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';

const FAQS = [
  {
    q: 'What is the age requirement?',
    a: 'All guests must be 21 or older. Valid government-issued photo ID is required at the door for everyone in your party — no exceptions.',
  },
  {
    q: 'How do deposits work?',
    a: 'A deposit is required to confirm your reservation. The amount depends on your package and group size, and it is applied toward your final total on the night of your event.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Reservations can be rescheduled or cancelled with at least 48 hours notice for a full deposit refund. Cancellations inside 48 hours forfeit the deposit.',
  },
  {
    q: 'How many guests can you accommodate?',
    a: 'We host groups from 2 up to 20 guests. For larger private events, ask about our Private Buy-Out package.',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday through Sunday, 6PM to 2AM. Start times can be booked from 6PM through 1AM.',
  },
  {
    q: 'How quickly will my booking be confirmed?',
    a: 'We confirm availability within 2 hours during operating hours. You will hear from us by email or phone with next steps.',
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
