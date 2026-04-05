import nodemailer from 'nodemailer';

const escape = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    }[c]));

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${escape(name)}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: 'wildfiredevx@gmail.com',
            subject: `Contact Form: ${escape(subject)}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${escape(name)}</p>
                <p><strong>Email:</strong> ${escape(email)}</p>
                <p><strong>Subject:</strong> ${escape(subject)}</p>
                <p><strong>Message:</strong> ${escape(message)}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Mail error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}