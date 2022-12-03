// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handle(req: NextApiRequest, res: NextApiResponse) {  
  let nodemailer = require('nodemailer');

  console.log(req.body);
  
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.prosesindia.in",
    auth: {
      user: 'support@prosesindia.in',
      pass: 'proses1412',
    },
    secure: true,
  })
  const mailData = {
    from: 'support@prosesindia.in',
    to: 'vishalacharya814@gmail.com',
    subject: `Message From Techsense`,
    text: `${req.body.name} just registered with email ${req.body.email}`,
    html: `<p>${req.body.name} just registered with email ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err:any, info:any) {
    if(err){
      console.log(err);
    
      res.status(500).json({msg: 'server error'})
    } else {
      console.log(info);
      
      res.status(200).json({msg: 'success'})
    }
  })
  res.status(200).json({msg: 'success'})
}