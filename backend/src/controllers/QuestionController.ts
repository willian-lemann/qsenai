import { Request, Response } from 'express';

import QuestionService from '../services/QuestionService';

const questionService = new QuestionService();

class QuestionController {
    async Index(request: Request, response: Response) {
        const { user_id } = request.query;
        console.log('user_id:', user_id);
        const users = await questionService.Index(Number(user_id));

        return response.json(users);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;

        console.log('simples: ', data);

        const user = await questionService.Create(data);

        return response.json(user);
    }

    async Update(request: Request, response: Response) {
        const data = request.body;

        console.log('simples: ', data);


        const user = await questionService.Update(data);

        return response.json(user);
    }

    async Delete(request: Request, response: Response) {
        const { id } = request.query;

        var question = 0;
        try {
            question = await questionService.Delete(Number(id));

        } catch (error) {
            return response.status(400).json({ error: 'Question delete failed.' })
        }

        return response.json(question);
    }
};

export default QuestionController;