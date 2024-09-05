'use server'
import { render } from '@react-email/render'
import TestTemplate from '@/emails'
import {Resend} from 'resend'

console.log(process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(to,subject,html)  {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['rubemviscard2635@gmail.com'],
        subject: 'Hello world',
        react: render(TestTemplate()),
    });

    if(error) {
        console.error('Error while sending email',error)
    }
    console.log('Sent Email')
}