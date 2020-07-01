import { Request, Response } from 'express';

import QuestionService from '../services/QuestionService';

const questionService = new QuestionService();

class QuestionController {
    async Index(request: Request, response: Response) {
        const { user_id } = request.query;

        if (user_id) {
            console.log(`return question from user id ${user_id}`);

            if (user_id == null || !Number(user_id))
                return response.status(400).send({ error: 'user id need to be a number' });


            const returnQuestions = await questionService.AllByUserID(Number(user_id));

            if (returnQuestions.length == 0)
                return response.status(404).send({ error: 'user haven\'t made questions yet' });

            return response.json(returnQuestions);
        } else {
            const users = await questionService.Index();

            return response.json(users);
        }
    }

    async Create(request: Request, response: Response) {
        const data = request.body;
        console.log(data);

        const user = await questionService.Create(data);

        return response.json(user);
    }

    async QuestionByID(request: Request, response: Response) {
        const { id } = request.params;
        console.log(`search question id ${id}`);

        if (id == null || !Number(id))
            return response.status(400).send({ error: 'question id need to be a number' });


        const returnQuestions = await questionService.QuestionByID(Number(id));

        if (returnQuestions.length == 0)
            return response.status(404).send({ error: 'question doens\'t exist' });

        return response.json(returnQuestions);
    }

};

export default QuestionController;