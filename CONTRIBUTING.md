# Proposing a change to the website

This repository holds the website for ptohookahexpress.com. You do not need to install anything to suggest a change. Everything can be done in your web browser on GitHub.

## How to propose a change

1. Sign in to GitHub and open this repository.
2. Find the file that holds the text you want to change (see the table below) and click it.
3. Click the pencil icon near the top right of the file to edit it.
4. Change only the words inside the quotes or between the tags. Leave the surrounding code as it is.
5. Scroll down, write a short note about what you changed, and click "Propose changes".
6. On the next screen, click "Create pull request".

ServerGuys will review your request. We may make small fixes or ask a question in the pull request. Once we approve and merge it, the change goes live on the website automatically, usually within a few minutes.

## Where common content lives

| What you want to change | File |
|---|---|
| Main headline, intro text, and the stats under it | `src/components/sections/Hero.tsx` |
| Booking form text and the start time, occasion, and package choices | `src/components/sections/BookingForm.tsx` |
| Booking form rules (required fields, guest limits) | `src/lib/validations.ts` |
| FAQ questions and answers | `src/components/sections/FAQ.tsx` |
| Phone number, hours, service area, and footer text | `src/components/layout/Footer.tsx` |
| Top menu links | `src/components/layout/Navbar.tsx` |
| Page title and search engine description | `src/app/layout.tsx` |
| Colors | `src/styles/tokens.css` |

If you are not sure which file to edit, or you want something larger like a new section or new photos, open an issue describing what you want instead.

## Questions

Email support@serverguys.us.
