import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Email configuration
    const targetEmail = "7techsoft7@gmail.com";

    // Create email content
    const emailSubject = `New Contact from ${name} - 7TechSoft Website`;
    const emailBody = `
New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     ${name}
Email:    ${email}
Company:  ${company || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from: 7TechSoft Contact Form
Date: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Using Nodemailer with Gmail
    // Make sure to install: npm install nodemailer
    // And configure .env.local with GMAIL_USER and GMAIL_APP_PASSWORD

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const nodemailer = await import("nodemailer");

        const transporter = nodemailer.default.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        // Verify connection
        await transporter.verify();
        console.log("✅ SMTP connection verified");

        const info = await transporter.sendMail({
          from: `"7TechSoft Contact Form" <${process.env.GMAIL_USER}>`,
          to: targetEmail,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ea580c; border-bottom: 3px solid #ea580c; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Company:</strong> ${company || "Not provided"}</p>
              </div>
              
              <div style="background: #ffffff; padding: 20px; border-left: 4px solid #ea580c; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                <p>Sent from 7TechSoft Contact Form</p>
                <p>Date: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          `,
        });

        console.log("✅ Email sent successfully!");
        console.log("📧 Message ID:", info.messageId);
        console.log("📬 To:", targetEmail);
        console.log("👤 From:", name, `(${email})`);

        return NextResponse.json(
          {
            success: true,
            message: "Thank you! Your message has been sent successfully.",
          },
          { status: 200 },
        );
      } catch (emailError: unknown) {
        console.error("❌ Error sending email:", emailError);
        const error = emailError as { message?: string; code?: string };
        console.error("Error details:", error.message);

        let errorMessage = "Failed to send email. ";
        if (error.code === "EAUTH") {
          errorMessage +=
            "Invalid Gmail credentials. Please check your App Password.";
        } else if (error.code === "ESOCKET") {
          errorMessage += "Connection failed. Check your internet connection.";
        } else {
          errorMessage += error.message || "Please try again later.";
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
      }
    } else {
      // Email service not configured - log to console instead
      console.log("⚠️  Email service not configured!");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Missing environment variables:");
      console.log(
        "GMAIL_USER:",
        process.env.GMAIL_USER ? "✅ Set" : "❌ Missing",
      );
      console.log(
        "GMAIL_APP_PASSWORD:",
        process.env.GMAIL_APP_PASSWORD ? "✅ Set" : "❌ Missing",
      );
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Email would be sent to:", targetEmail);
      console.log("Subject:", emailSubject);
      console.log(emailBody);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("To enable email sending:");
      console.log("1. Install: npm install nodemailer");
      console.log("2. Edit .env.local and add your Gmail App Password");
      console.log("3. Restart your dev server");

      return NextResponse.json(
        {
          success: false,
          error: "Email service not configured. Please contact administrator.",
        },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error("Error processing email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
