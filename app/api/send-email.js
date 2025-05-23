import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // required for formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const form = formidable({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Form parsing error' });
    }

    const { email, fullName, telephone, location, position, message } = fields;
    const resume = files.resume;

    const transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `New Application: ${position}`,
      text: `
        Name: ${fullName}
        Phone: ${telephone}
        Email: ${email}
        Location: ${location}
        Position: ${position}
        Message: ${message}
      `,
      attachments: resume
        ? [
            {
              filename: resume.originalFilename,
              path: resume.filepath,
            },
          ]
        : [],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: error.message });
    }
  });
}
