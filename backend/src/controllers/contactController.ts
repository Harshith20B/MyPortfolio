// Updated contactController.js
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/contactModel';

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    // Save contact message to database
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    // Configure nodemailer transporter with Gmail settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Using Gmail service instead of custom SMTP settings
      auth: {
        user: process.env.EMAIL_USER || 'hdummyuse@gmail.com',
        pass: process.env.EMAIL_PASS || 'tvzwdpsjjsxreiiw'
      }
    });

    // Set up email options
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'harshabezawada20@gmail.com',
      to: process.env.EMAIL_TO || 'harsh20y@gmail.com',
      subject: `Portfolio Contact Form: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Message from Portfolio Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send the email - UNCOMMENTED this line to actually send emails
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Still return success to user, but log the email error
    }

    return res.status(200).json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};