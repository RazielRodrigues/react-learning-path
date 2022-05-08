import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => { } },
    { sendMail:  async () => { } }
);

describe('Submit feedback', () => {

    it('should submit feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'bug description',
            screenshot: 'data:image/png;base64.suahsuahsaohsoasaou'
        })).resolves.not.toThrow();

    });

    it('should submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: 'bug description',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow();

    });

    it('should submit feedback without comment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow();

    });

    it('should submit feedback without screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'asasas',
            screenshot: ''
        })).resolves.not.toThrow();

    });

});

// test('sum 2 and 2', () => {
//     expect(2 + 2).toBe(4);
// });