import { Request, Response } from 'express';

import AnswerService from '../services/AnswerService';

const answerService = new AnswerService();

class AnswerController {

    async Create(request: Request, response: Response) {
        return await answerService.Create(request, response);
    }
};

export default AnswerController;