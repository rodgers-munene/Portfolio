"use server" 

import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { render } from '@react-email/render'

const resend = new Resend('re_dAw7DmSr_4N9FcumyDjiMkrorsTgngibr')


export const SendEmail = async (email: string, message: string)  => {
    try {
        const emaiHtml = await render(<EmailTemplate message={message} senderEmail={email} />)

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "munenerodgers72@gmail.com",
            subject: "A message from Your portfolio",
            html: emaiHtml,
        })

        console.log("Email sent to Rodgers")
    } catch (error) {
        console.error("Failed to send Email", error)
    }

}