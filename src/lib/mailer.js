import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // App Password for Gmail
    },
});

export const sendConfirmationEmail = async (email, name, course) => {
    const htmlTemplate = `
      <div style="background-color: #050505; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px;">
        <div style="background: rgba(20, 20, 20, 0.9); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 10px 40px rgba(255, 215, 0, 0.05);">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0)); padding: 40px 20px; text-align: center; border-bottom: 1px solid rgba(255, 215, 0, 0.2);">
            <h1 style="color: #FFD700; margin: 0; font-size: 28px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">Application Received</h1>
            <p style="color: #aaaaaa; margin-top: 10px; font-size: 14px; letter-spacing: 1px;">VD FINANCEPEDIA ACADEMY</p>
          </div>

          <!-- Body -->
          <div style="padding: 40px 30px;">
            <p style="font-size: 16px; color: #eeeeee; line-height: 1.6;">Welcome, <strong style="color: #FFD700;">${name}</strong>.</p>
            <p style="font-size: 16px; color: #cccccc; line-height: 1.6;">
              We have successfully received your enrollment application. Your journey into institutional-grade trading starts here.
            </p>

            <!-- Course Tag -->
            <div style="background: rgba(255, 215, 0, 0.05); border-left: 4px solid #FFD700; padding: 18px 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Applied Program</p>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: #FFD700; letter-spacing: 0.5px;">${course}</p>
            </div>

            <p style="font-size: 16px; color: #cccccc; line-height: 1.6;">
              Our team is currently reviewing your profile to ensure you are a good fit for the academy. We will reach out to you shortly on your provided phone number with the next steps for onboarding.
            </p>
            
            <p style="font-size: 16px; color: #cccccc; line-height: 1.6; margin-top: 30px;">
              Prepare to elevate your edge.
            </p>
          </div>

          <!-- Footer -->
          <div style="background: #0A0A0A; padding: 25px 30px; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
            <p style="font-size: 12px; color: #666666; margin: 0; letter-spacing: 1px; text-transform: uppercase;">
              Powered by Vinith D'Costa & Associates<br>
              <span style="display: block; margin-top: 8px;">SEBI Registered Research Analyst: INH000022367</span>
            </p>
            <p style="margin-top: 15px; font-size: 12px;">
              <a href="https://vdfinancepedia.com" style="color: #FFD700; text-decoration: none;">vdfinancepedia.com</a>
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
        from: `"VD Financepedia" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Application Received: ${course} - VD Financepedia`,
        html: htmlTemplate,
    };

    return transporter.sendMail(mailOptions);
};
