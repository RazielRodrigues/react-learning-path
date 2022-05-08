import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4534d3e6df3a49",
      pass: "a85fc9555674a2"
    }
  });

routes.post('/feedbacks', async (req, res) => {

    const {type, comment, screenshot } = req.body;

    const feedback = '';

    transport.sendMail({
        from: 'Equipe do RZ <razielx3@live.com>',
        to: 'razielx3@live.com',
        subject: 'Feedback do RZ',
        html: [
            `<div style="text-align: center;">`,
                `<h1>tipo: ${type}</h1>`,
                `<h1>comentario: ${comment}</h1>`,
                `<h1>foto: ${screenshot}</h1>`,
            `</div>`,
        ].join('\n')
    });

    return res.status(201).json({data: feedback});
});
