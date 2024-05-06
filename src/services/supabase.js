import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mlfysezsmghkxgtyejby.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZnlzZXpzbWdoa3hndHllamJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MDg1MTIsImV4cCI6MjAyNzE4NDUxMn0.09IdfeWcsTIkyd8Ovz2_1FXkgFhu0l7BxA96H-dw-SE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
