// Stripe price IDs for each tier
export const STRIPE_PRICES = {
  hobbyjogger: {
    priceId: "price_1SxVO1I7UCwsE1VcWITRmtNc",
    productId: "prod_TvM6Nkc51yYmZF",
  },
  advancedHobbyjogger: {
    priceId: "price_1SxVP6I7UCwsE1VcZfJ98POx",
    productId: "prod_TvM7lvQktpVs6e",
  },
  goingForGold: {
    priceId: "price_1SxVPZI7UCwsE1VchYZre5bP",
    productId: "prod_TvM7Bxq4UrPXdy",
  },
} as const;

export type TierKey = keyof typeof STRIPE_PRICES;
