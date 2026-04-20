import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FORM_ROUTES: Record<string, string> = {
  booking: 'booking@meetatgrain.com',
  fundraiser: 'events@meetatgrain.com',
  careers: 'careers@meetatgrain.com',
  general: 'hello@meetatgrain.com',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...fields } = body

    const toEmail = FORM_ROUTES[formType] || FORM_ROUTES.general

    const subjectMap: Record<string, string> = {
      booking: 'Play at Grain — Booking Inquiry',
      fundraiser: 'Fundraiser Inquiry',
      careers: 'Work at Grain — Application',
      general: 'Website Contact',
    }

    const subject = subjectMap[formType] || 'Website Inquiry'

    // Build HTML table of fields
    const fieldsHtml = Object.entries(fields)
      .filter(([, v]) => v !== undefined && v !== '')
      .map(
        ([k, v]) => `
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; background: #f5f5f5; border: 1px solid #ddd; white-space: nowrap;">
            ${k.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
          </td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${v}</td>
        </tr>`
      )
      .join('')

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #d4720e; color: white; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0; font-size: 20px;">Grain Craft Bar + Kitchen</h2>
          <p style="margin: 4px 0 0; opacity: 0.85;">${subject}</p>
        </div>
        <div style="padding: 24px; background: white; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${fieldsHtml}
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            Submitted via MeetAtGrain.com · ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
          </p>
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'noreply@meetatgrain.com',
      to: [toEmail],
      subject,
      html,
      reply_to: fields.email as string | undefined,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
