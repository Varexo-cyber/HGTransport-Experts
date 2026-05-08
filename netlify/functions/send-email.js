const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { name, company, email, phone, service, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Verplichte velden ontbreken" }) };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #18181b; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #facc15; margin: 0;">Nieuwe Contact Aanvraag</h2>
          <p style="color: #a1a1aa; margin: 5px 0 0 0;">Via website hgexperts.nl</p>
        </div>
        <div style="background: #f4f4f5; padding: 20px; border-radius: 0 0 8px 8px;">
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>Bedrijf:</strong> ${company || "-"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefoon:</strong> ${phone || "-"}</p>
          <p><strong>Dienst:</strong> ${service || "-"}</p>
          <hr style="border: none; border-top: 1px solid #d4d4d8; margin: 15px 0;">
          <p><strong>Bericht:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #71717a; font-size: 12px; text-align: center; margin-top: 15px;">
          Verzonden via hgexperts.nl contactformulier
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"HG Experts Website" <${process.env.SMTP_USER}>`,
      to: "info@hgexperts.nl",
      replyTo: email,
      subject: `Nieuwe aanvraag van ${name}${company ? ` (${company})` : ""}`,
      html,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Kon email niet versturen", details: error.message }),
    };
  }
};
