import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'FreshAI <support@freshai.io>',
      to: email,
      subject: '🚀 Welcome to the FreshAI Waitlist!',
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9f9fc; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background: #6246ea; padding: 30px 20px; color: white; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">🚀 You're In!</h1>
              <p style="margin: 5px 0 0; font-size: 16px;">Welcome to the FreshAI Waitlist</p>
            </div>

            <!-- Body -->
            <div style="padding: 30px 25px; color: #333;">
              <p style="font-size: 16px; line-height: 1.6;">
                Hey there,
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                Thanks for joining the <strong>FreshAI waitlist</strong>! You're one step closer to unlocking powerful AI tools designed specifically for solopreneurs — to help you understand your code, secure your projects, automate testing, and seamlessly integrate your workflow.
              </p>
              <p style="font-size: 16px; line-height: 1.6;">
                We'll be rolling out early access soon. Meanwhile, keep an eye on your inbox for updates, sneak peeks, and exclusive invites.
              </p>

              <div style="margin: 30px 0; text-align: center;">
                <a href="https://freshai.io" style="background: #6246ea; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                  Learn More About FreshAI
                </a>
              </div>

              <p style="font-size: 16px; line-height: 1.6;">
                Welcome aboard!<br>
                – The FreshAI Team
              </p>
            </div>

            <!-- Footer -->
            <div style="background: #f1f1f1; padding: 15px 20px; text-align: center; font-size: 13px; color: #777;">
              You received this email because you joined the FreshAI waitlist. 
              <br />No longer interested? No worries — you can unsubscribe any time.
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully to:', email);
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
