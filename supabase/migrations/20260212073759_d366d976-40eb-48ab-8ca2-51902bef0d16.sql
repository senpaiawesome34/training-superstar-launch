-- Drop the overly permissive policy that grants everyone access
DROP POLICY IF EXISTS "Service role full access" ON public.payments;

-- No permissive policies needed: the service role key (used by webhooks) 
-- bypasses RLS entirely. With RLS enabled and no permissive policies,
-- anon and authenticated users cannot access this table at all.