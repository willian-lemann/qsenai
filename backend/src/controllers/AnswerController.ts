import { Request, Response } from 'express';

import AnswerService from '../services/AnswerService';

const answerService = new AnswerService();

class AnswerController {
    async Index(request: Request, response: Response) {
        const { question_id } = request.query;
        const answers = await answerService.Index(Number(question_id));

        return response.json(answers);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;

        const answer = await answerService.Create(data);

        return response.json(answer);
    }

    async Update(request: Request, response: Response) {
        const data = request.body;

        console.log('simples: ', data);

        const user = await answerService.Update(data);

        return response.json(user);
    }

    async Delete(request: Request, response: Response) {
        const { id } = request.query;

        var answer = 0;
        try {
            answer = await answerService.Delete(Number(id));

        } catch (error) {
            return response.status(400).json({ error: 'Answer delete failed.' })
        }

        return response.json(answer);
    }
};

export default AnswerController;