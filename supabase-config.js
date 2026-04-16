// supabase-config.js
const SUPABASE_URL = "https://ytfpiyfapvybihlngxks.supabase.co";

// CHANGED: Using the safe, publishable key instead of the secret key
const SUPABASE_KEY = "sb_publishable_poSZUQ9HI4wcY9poEo5b1w_Z-pAJbKo"; 

// Attach to the window object so your main HTML file can communicate with it
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
