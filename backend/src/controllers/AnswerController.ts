import { Request, Response } from 'express';

import AnswerService from '../services/AnswerService';

const answerService = new AnswerService();

class AnswerController {
    async Index(request: Request, response: Response) {
        const users = await answerService.Index();

        return response.json(users);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;

        const user = await answerService.Create(data);

        return response.json(user);
    }
};

export default AnswerController;