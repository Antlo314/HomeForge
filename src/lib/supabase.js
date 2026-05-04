import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  if (process.env.NODE_ENV === 'production') {
    // We only warn in production; during build (development-like env) we use placeholders to allow static generation
    console.warn('Supabase credentials missing. Site will use placeholder client for build.')
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
