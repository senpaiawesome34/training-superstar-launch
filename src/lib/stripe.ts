// Stripe price IDs for each tier (LIVE)
export const STRIPE_PRICES = {
  hobbyjogger: {
    priceId: "price_1TE1FRRJlDCCoPHpq595LNkF",
    productId: "prod_Tvj8QaDmzxE3vr",
  },
  advancedHobbyjogger: {
    priceId: "price_1TE1G9RJlDCCoPHpQigvpvhX",
    productId: "prod_Tvj8DL78QNxbCx",
  },
  goingForGold: {
    priceId: "price_1TE1GpRJlDCCoPHpXt2JybI8",
    productId: "prod_Tvj8vZLvdsYUO2",
  },
} as const;

export type TierKey = keyof typeof STRIPE_PRICES;

// One-time payment price IDs
export const STRIPE_ONE_TIME_PRICES = {
  allIn: {
    priceId: "price_1TE1KKRJlDCCoPHpuw0SXuIg",
    productId: "prod_TzTkl0N3Kt00hr",
  },
} as const;

export type OneTimeTierKey = keyof typeof STRIPE_ONE_TIME_PRICES;
