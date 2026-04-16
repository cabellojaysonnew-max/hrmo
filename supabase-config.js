<script>
    // --- SUPABASE INITIALIZATION (Directly embedded to bypass local CORS blocks) ---
    const SUPABASE_URL = "https://ytfpiyfapvybihlngxks.supabase.co";
    const SUPABASE_KEY = "sb_publishable_poSZUQ9HI4wcY9poEo5b1w_Z-pAJbKo";
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // --- SYSTEM CORE ---
    let currentUser = null;
    let employeesData = [];
    let activeEmpId = null;
    // ... the rest of your code stays exactly the same
