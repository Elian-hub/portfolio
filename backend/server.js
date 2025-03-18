import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'POST',
    allowedHeaders: 'Content-Type',
  })
);
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `Sender: ${name} \nEmail: ${email} \n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
