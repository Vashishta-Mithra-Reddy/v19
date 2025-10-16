import { Checkout } from '@dodopayments/nextjs';

export const GET = Checkout({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT as "live_mode" | "test_mode" | undefined,
  type: 'static',
});

export const POST = Checkout({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  returnUrl: process.env.DODO_PAYMENTS_RETURN_URL,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT as "live_mode" | "test_mode" | undefined,
  type: 'session', // use "dynamic" if you prefer programmatic links
});