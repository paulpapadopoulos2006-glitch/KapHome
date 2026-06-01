import { NextRequest, NextResponse } from 'next/server'
import { stripe }                    from '@/lib/stripe'
import { createAdminClient }         from '@/lib/supabase/server'
import type Stripe                   from 'stripe'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body      = await req.text()
  const signature = req.headers.get('stripe-signature')!
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = createAdminClient()

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    await supabase.from('reservations').update({
      status: 'confirmed', payment_status: 'paid',
      stripe_payment_intent_id: session.payment_intent as string,
    }).eq('stripe_session_id', session.id)
  }

  if (event.type === 'checkout.session.expired') {
    const session = event.data.object as Stripe.Checkout.Session
    await supabase.from('reservations')
      .update({ status: 'cancelled', payment_status: 'cancelled' })
      .eq('stripe_session_id', session.id).eq('status', 'pending')
  }

  return NextResponse.json({ received: true })
}
