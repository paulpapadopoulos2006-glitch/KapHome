import { NextRequest, NextResponse } from 'next/server'
import { isAdmin }                   from '@/lib/admin-auth'
import { createAdminClient }         from '@/lib/supabase/server'

export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { nightly_rate } = await req.json()
  const rate = Number(nightly_rate)
  if (isNaN(rate) || rate < 1 || rate > 9999)
    return NextResponse.json({ error: 'Invalid rate' }, { status: 400 })
  const supabase = createAdminClient()
  const { error } = await supabase.from('pricing_config')
    .update({ value: rate, updated_at: new Date().toISOString() }).eq('key', 'nightly_rate')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, nightly_rate: rate })
}
