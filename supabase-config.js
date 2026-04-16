const SUPABASE_URL = "https://ytfpiyfapvybihlngxks.supabase.co"; // Assuming this URL is still correct
const SUPABASE_KEY = "sb_publishable_poSZUQ9HI4wcY9poEo5b1w_Z-pAJbKo"; // Replaced with your new key

// By attaching it to 'window', we force the browser to make it available globally to your HTML file.
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
