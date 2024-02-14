import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.process.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.process.VITE_SUPABASE_PROJECT_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
