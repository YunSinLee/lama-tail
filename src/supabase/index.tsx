import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pselwfegmubnuksvpaih.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZWx3ZmVnbXVibnVrc3ZwYWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2MTI5MzUsImV4cCI6MTk5MjE4ODkzNX0.1ThtdhBQE4dbeHuc4FdHG2NRwK-SKGJm9yM8z3j0RdM"
export const client = createClient(supabaseUrl, supabaseKey)