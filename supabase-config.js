const SUPABASE_URL = "https://ytfpiyfapvybihlngxks.supabase.co";
const SUPABASE_KEY = "sb_secret_YNX-IJjveulE3N3gT_yBdA_6PzxoKdB";

// By attaching it to 'window', we force the browser to make it available globally to your HTML file.
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);