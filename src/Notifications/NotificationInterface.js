import transporter from '../services/Mail.js';
import mail from '../config/mail.js';

class Notifications {
    via(channel){}
    async sendEmail(mailable, ...args){
        const info = await transporter.sendMail({
            from: mail.from,
            to: mailable.email,
            subject: mailable.subject,
            html: mailable.html,
            ...args,
        });

        transporter.close();
        return info;
    };
    
}

export default Notifications;