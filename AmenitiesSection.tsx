import { NextResponse }      from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export const revalidate = 30

export async function GET() {
  const supabase = createAdminClient()
  const { data, error } = await supabase.from('pricing_config').select('key, value')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  const config = Object.fromEntries((data ?? []).map(r => [r.key, Number(r.value)]))
  return NextResponse.json({ config })
}
