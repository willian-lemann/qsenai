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
};

export default AnswerController;