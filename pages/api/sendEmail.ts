import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Request received", req.method, req.body);
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      console.log('Recieved form data', name, email, phone, message);
      // Create a transporter object
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password
        },
      });

      // Define email options
      let mailOptions = {
        from: email,
        to: 'your-email@example.com', // Your receiving email address
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
      };

      // Send email
      let info = await transporter.sendMail(mailOptions);
      console.log('email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    console.log('Method not allowed');
    res.status(405).json({ error: 'Method not allowed' });
  }
}
