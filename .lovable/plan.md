## Goal
Let customers place sock orders through a Google Form for now. Stripe checkout stays out of scope — payment will be handled manually (PayNow / bank transfer / invoice) until you're ready to wire up Stripe.

## What you'll do (outside Lovable)
1. Create a Google Form with fields like:
   - Name
   - Email / phone (for confirmation)
   - Quantity (pairs)
   - Are you a TSA client? (Yes / No) — used for manual $2.80 verification
   - Delivery method (self-collect / mail) + address if mail
   - Notes
2. Copy the **shareable form link** (the `https://forms.gle/...` or `https://docs.google.com/forms/d/e/.../viewform` URL).
3. Send me that link and I'll wire it into the shop.

## What I'll change in the app
Only `src/pages/Shop.tsx` — purely frontend, no backend changes.

- Replace the disabled **Add to Cart** button on the Crew Socks card with an **Order via Form** button that opens the Google Form in a new tab (`target="_blank" rel="noopener noreferrer"`).
- Keep the disabled "Add to Cart" placeholder on the other 5 "Coming Soon" cards.
- Add a short note under the price: *"TSA Clients: indicate in the form for $2.80/pair pricing (verification required). A discount/payment instruction will be sent after we confirm your order."*
- Keep the existing carousel, dual-price display, and layout exactly as they are.

## Out of scope (for now)
- No Stripe checkout, no edge function changes, no database changes.
- No coupon code generation — TSA pricing handled manually via email reply for now.
- When you're ready to add Stripe later, we can layer it on without disturbing this flow.

## Next step
Reply with the Google Form URL (and confirm the button label "Order via Form" works, or suggest your own).