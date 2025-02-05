'use server'

import { Resend } from "resend"

export const sendEmail = async (from: string, to: string, subject: string, content: string) => {
    "use server"

    const resend = new Resend(process.env.RESEND_API_KEY)

    if (!process.env.PROD) {
        to = 'projetos.niaefeup@gmail.com'
    }

    let serviceAuthor = 'Acme <onboarding@resend.dev>'
    if (process.env.RESEND_EMAIL) serviceAuthor = `AEFEUP <${process.env.RESEND_EMAIL}>`

    return await resend.emails.send({
        from: serviceAuthor,
        cc: from, // Sender is notified of the email
        replyTo: from, // Sender receives the replies
        to: to,
        subject: subject,
        html: content,
    })
}

export const sendEmailWithoutFrom = async (to: string, subject: string, content: string) => {
    "use server"

    const resend = new Resend(process.env.RESEND_API_KEY)

    if (!process.env.PROD) {
        to = 'projetos.niaefeup@gmail.com'
    }

    let serviceAuthor = 'Acme <onboarding@resend.dev>'
    if (process.env.RESEND_EMAIL) serviceAuthor = `AEFEUP <${process.env.RESEND_EMAIL}>`

    return await resend.emails.send({
        from: serviceAuthor,
        to: to,
        subject: subject,
        html: content,
    })
}