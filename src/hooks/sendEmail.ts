import emailService from "../services/email.service";

export async function sendMail(body: any) {
    console.log('body from first request:', body);
    const response = await emailService.sendEmail(body);
    if (!response) return;
}