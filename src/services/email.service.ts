class EmailService {
    async sendEmail(email: any): 
    Promise<any> {
      const response = await fetch(`https://signedeal-api.herokuapp.com/send-email`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(email),
      });
      return response.json();
    }
}

const emailService = new EmailService();
export default emailService;