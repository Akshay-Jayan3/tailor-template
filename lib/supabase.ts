import { createClient } from '@supabase/supabase-js'

/* Read-only client for the public website. Uses the same Supabase
   project as the Seww Fashions app — Portfolio Manager, Testimonial
   Manager, and Services Editor in the app write here; this client only
   reads rows marked visible = true (enforced by RLS, not just this
   query), so the website becomes a live mirror of what's curated in
   the app. No auth here — anonymous, public-read only. */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null
