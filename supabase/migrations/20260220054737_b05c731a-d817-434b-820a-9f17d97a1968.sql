
-- Deny all direct access to the payments table.
-- Only the service_role (used by edge functions/webhooks) can access this table.
-- No authenticated or anonymous users should read payment data directly.

-- Policy: Block all SELECT for non-service roles
CREATE POLICY "No direct read access to payments"
  ON public.payments FOR SELECT
  TO anon, authenticated
  USING (false);

-- Policy: Block all INSERT for non-service roles
CREATE POLICY "No direct insert access to payments"
  ON public.payments FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

-- Policy: Block all UPDATE for non-service roles
CREATE POLICY "No direct update access to payments"
  ON public.payments FOR UPDATE
  TO anon, authenticated
  USING (false);

-- Policy: Block all DELETE for non-service roles
CREATE POLICY "No direct delete access to payments"
  ON public.payments FOR DELETE
  TO anon, authenticated
  USING (false);
