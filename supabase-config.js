
// ==========================================
// LOCALBIZ - SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = "https://udetdzybrzgrnmmbyase.supabase.co";

// Paste your Supabase Publishable key below.
// Never use your service_role or secret key here.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Y4HehPqgz_SBr3Hz_L6fpQ_JI7gH5ZQ";

// Create the Supabase client.
const localBizSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Make the client available to other pages.
window.localBizSupabase = localBizSupabase;
