import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedback-repositories";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
    ) { }

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if(!type || !comment) {
            throw new Error('Type and comment are required');
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot');
        }
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        });

        await this.mailAdapter.sendMail({
            subject: 'Feedback do RZ',
            body: [
                `<div style="text-align: center;">`,
                    `<h1>tipo: ${type}</h1>`,
                    `<h1>comentario: ${comment}</h1>`,
                    `<h1>foto: ${screenshot}</h1>`,
                `</div>`
            ].join('\n')
        });

    }

}