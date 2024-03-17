import Notifications from "./NotificationInteface.js";

class Notification {
    notifiable = null;
    subject = null;
    body = null;
    constructor(notifiable, subject,  body) {
        this.notifiable = notifiable;
        this.subject = subject;
        this.body = body;
    }
    async via(channel) {
        const mailable = {
            email: this.notifiable,
            subject: this.subject,
            html: this.body,
        }
        switch(channel) {
            case 'viaEmail':
                return await new Notifications().sendEmail(mailable);
            case 'viaSms':
                return;

        }
    }
}

export default Notification;