import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface ContactForm {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}

export interface VolunteerForm {
  id?: string
  name: string
  email: string
  phone?: string
  interest: string
  availability: string
  experience?: string
  created_at?: string
}

export interface DonationRecord {
  id?: string
  donor_name: string
  donor_email?: string
  amount: number
  payment_method: string
  message?: string
  created_at?: string
}