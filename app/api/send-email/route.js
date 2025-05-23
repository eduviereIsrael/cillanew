import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createWriteStream } from "fs";
import { mkdir, rm } from "fs/promises";
import path from "path";
import { tmpdir } from "os";
import Busboy from "busboy";
import { randomUUID } from "crypto";
import { Readable } from "stream";

export const POST = async (req) => {
  const headers = {};
  for (const [key, value] of req.headers.entries()) {
    headers[key] = value;
  }

  const busboy = Busboy({ headers });

  const fields = {};
  let filePath = "";
  let fileName = "";

  const uploadsDir = path.join(tmpdir(), "uploads");
  await mkdir(uploadsDir, { recursive: true });

  const busboyFinished = new Promise((resolve, reject) => {
    busboy.on("file", (fieldname, file, filename) => {
      fileName = `${randomUUID()}-${filename}`;
      filePath = path.join(uploadsDir, fileName);
      const stream = createWriteStream(filePath);
      file.pipe(stream);
    });

    busboy.on("field", (name, value) => {
      fields[name] = value;
    });

    busboy.on("finish", resolve);
    busboy.on("error", reject);
  });

  // Convert web stream to Node stream
  const reader = req.body.getReader();
  const stream = new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) return this.push(null);
      this.push(value);
    },
  });

  stream.pipe(busboy);
  await busboyFinished;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailBody = `
Full Name: ${fields.fullName}
Telephone: ${fields.telephone}
Email: ${fields.email}
Location: ${fields.location}
Position: ${fields.position}

Message:
${fields.message}
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: fields.email,
      subject: `Application from ${fields.fullName}`,
      text: emailBody,
      attachments: filePath
        ? [
            {
              filename: `${fields.fullName}-resume`,
              path: filePath,
            },
          ]
        : [],
    });

    if (filePath) await rm(filePath);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};

