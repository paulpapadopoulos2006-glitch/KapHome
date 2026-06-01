import { NextResponse }      from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export const revalidate = 60

export async function GET() {
  const supabase = createAdminClient()
  const { data, error } = await supabase.from('booked_ranges').select('check_in, check_out, source')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ranges: data ?? [] })
}
