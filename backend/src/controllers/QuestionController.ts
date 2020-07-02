import { Request, Response } from 'express';

import QuestionService from '../services/QuestionService';

const questionService = new QuestionService();

class QuestionController {
    async Index(request: Request, response: Response) {
        const [questions, count] = await questionService.Index();

        response.header('x-total-count', count['count(*)']);

        return response.json(questions);
    } 

    async Show(request: Request, response: Response) {
        const { question_id } = request.params;

        console.log(`search question id ${question_id}`);

        if (question_id == null || !Number(question_id))
            return response.status(400).send({ error: 'question id need to be a number' });

        const data = await questionService.Show(Number(question_id));
        const { question } = data;

        if (!question)
            return response.status(404).send({ error: 'question doens\'t exist' });

        return response.json(data);
    }

    async AllByUserID(request: Request, response: Response) {
        const { user_id } = request.params;


        if (user_id == null || !Number(user_id))
            return response.status(400).send({ error: 'user id need to be a number' });


        const [questions, count] = await questionService.AllByUserID(Number(user_id));

        if (questions.length == 0)
            return response.status(404).send({ error: 'user haven\'t made questions yet' });

        response.header('X-total-count', count['count(*)']);

        return response.json(questions);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;

        const user = await questionService.Create(data);

        return response.json(user);
    }

};

export default QuestionController;