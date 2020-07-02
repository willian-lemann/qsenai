import { Request, Response } from 'express';

import AnswerService from '../services/AnswerService';

const answerService = new AnswerService();

class AnswerController {
    async Create(request: Request, response: Response) {
        const { content, question_id } = request.body;

        const data = {
            content,
            question_id
        }
        
        const answer = await answerService.Create(data);

        return response.json(answer);
    }
};

export default AnswerController;