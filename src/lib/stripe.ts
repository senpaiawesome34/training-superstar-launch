// Stripe price IDs for each tier (LIVE)
export const STRIPE_PRICES = {
  hobbyjogger: {
    priceId: "price_1SxrfoRJlDCCoPHpTJ6pvp5R",
    productId: "prod_Tvj8QaDmzxE3vr",
  },
  advancedHobbyjogger: {
    priceId: "price_1SxrfoRJlDCCoPHpT5oE8EKw",
    productId: "prod_Tvj8DL78QNxbCx",
  },
  goingForGold: {
    priceId: "price_1SxrflRJlDCCoPHplRWOVejZ",
    productId: "prod_Tvj8vZLvdsYUO2",
  },
} as const;

export type TierKey = keyof typeof STRIPE_PRICES;

// One-time payment price IDs (to be configured)
export const STRIPE_ONE_TIME_PRICES = {
  allIn: {
    priceId: "", // TODO: Add Stripe price ID
    productId: "prod_TzTkl0N3Kt00hr",
  },
} as const;

export type OneTimeTierKey = keyof typeof STRIPE_ONE_TIME_PRICES;
