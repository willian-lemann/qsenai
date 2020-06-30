import { Request, Response } from 'express';

import QuestionService from '../services/QuestionService';

const questionService = new QuestionService();

class QuestionController {
    async Index(request: Request, response: Response) {
        const users = await questionService.Index();

        return response.json(users);
    }

    async AllByUserID(request: Request, response: Response) {
        const { user_id } = request.params;
        console.log(request.params);

        if (user_id == null || !Number(user_id)) 
            return response.status(400).send({ error: 'user id need to be a number' });
        

        const returnQuestions = await questionService.AllByUserID(Number(user_id));

        if (returnQuestions.length == 0)
            return response.status(404).send({ error: 'user haven\'t made questions yet' });
        
        return response.json(returnQuestions);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;
        console.log(data);

        const user = await questionService.Create(data);

        return response.json(user);
    }
};

export default QuestionController;