import { Request, Response } from 'express';

import IAnswerService from '../interfaces/IAnswerService';

let _answerService: IAnswerService;

class AnswerController {
    constructor(answerService: IAnswerService) {
        _answerService = answerService;
    }

    async Create(request: Request, response: Response) {
        const { content, question_id, user_id } = request.body;

        const data = {
            content,
            question_id,
            user_id
        };

        const answer = await _answerService.Create(data);

        return response.json(answer);
    }
};

export default AnswerController;