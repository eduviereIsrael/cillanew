import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const body = await req.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // receiver fallback
      subject: `New Contact Message from ${name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

