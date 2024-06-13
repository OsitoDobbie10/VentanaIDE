import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://clnghpvijimjfykoaboc.supabase.co';
const supaBaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbmdocHZpamltamZ5a29hYm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxODc3MjYsImV4cCI6MjAzMjc2MzcyNn0.mxAomHyH9IelwaBtW_zauTCLhRB4zPG_6FYbxTaeQhg';
export const supabase = createClient(supabaseUrl, supaBaseKey);