import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ododkybzldaqouewubmx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kb2RreWJ6bGRhcW91ZXd1Ym14Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODEwNDAxNywiZXhwIjoyMDYzNjgwMDE3fQ.qoHAWkU4vpagJ7P95zS3ja3FuLO6Y-KARMERKDSsi8Q';
export const supabase = createClient(supabaseUrl, supabaseKey);


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);
