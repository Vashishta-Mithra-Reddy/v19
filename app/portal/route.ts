import { CustomerPortal } from '@dodopayments/nextjs';

export const GET = CustomerPortal({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY!,
  environment: process.env.DODO_PAYMENTS_ENVIRONMENT as "live_mode" | "test_mode" | undefined,
});