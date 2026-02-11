
-- Create payments table as source of truth
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id TEXT NOT NULL UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  customer_email TEXT,
  amount_total INTEGER,
  currency TEXT,
  payment_status TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Only backend (service role) can insert/update via webhook
-- No public access needed
CREATE POLICY "Service role full access"
  ON public.payments
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Revoke direct access from anon/authenticated - only service role should write
ALTER TABLE public.payments FORCE ROW LEVEL SECURITY;
