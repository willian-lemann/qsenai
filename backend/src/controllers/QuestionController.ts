import { Request, Response } from 'express';

import QuestionService from '../services/QuestionService';

const questionService = new QuestionService();

class QuestionController {
    async Index(request: Request, response: Response) {
        const { user_id } = request.query;
        const users = await questionService.Index(Number(user_id));

        return response.json(users);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;

        const user = await questionService.Create(data);

        return response.json(user);
    }
};

export default QuestionController;