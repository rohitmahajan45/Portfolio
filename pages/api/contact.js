import nodemailer from 'nodemailer'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body

  // Configure via environment variables in deployment (VERCEL)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.example.com',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'user@example.com',
      pass: process.env.SMTP_PASS || 'pass'
    }
  })

  const to = process.env.CONTACT_EMAIL || 'you@example.com'
  try{
    await transporter.sendMail({
      from: email,
      to,
      subject: `Portfolio contact from ${name}`,
      text: message
    })
    return res.status(200).json({ ok: true })
  }catch(err){
    console.error('mail error', err)
    return res.status(500).json({ error: 'failed' })
  }
}
