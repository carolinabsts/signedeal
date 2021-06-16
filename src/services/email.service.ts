class EmailService {
    async sendEmail(email: any): 
    Promise<any> {
      const response = await fetch(`http://localhost:4000/send-email`, {
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