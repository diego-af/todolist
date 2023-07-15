import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cpglajlclktxdatmknaj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZ2xhamxjbGt0eGRhdG1rbmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNjQyMzAsImV4cCI6MjAwNDk0MDIzMH0.y_EqU5lBFGd3wrXjd89GkNaEPv7GZeSsrLIqmquvD60"
const supabase = createClient(supabaseUrl, supabaseKey)




export {supabase}
