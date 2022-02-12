import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NmailerService {

    constructor(private readonly mailerService: MailerService){}

    public sendMail(email: string, uuid: string): void {
        this
            .mailerService
            .sendMail({
                to: email,
                from: 'smanovkutman0258@gmail.com',
                subject: 'Nestjs nodemailer service test',
                text: uuid,
                html: `
                <form action="httpP//127.0.0.1:8080/user/verify-email" method="post" target="_blank">
                    <input type="text" name="verification" value="${uuid}" readonly>
                    <input type="submit" value="Verify email">
                </form>`
            })
            .then((success) => {
                console.log(success)
            })
            .catch((error) => {
                console.log(error)
            });
    }

}
