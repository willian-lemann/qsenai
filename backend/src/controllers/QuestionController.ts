import { Request, Response } from 'express';

import IQuestionService from '../interfaces/IQuestionService';

let _questionService: IQuestionService;

class QuestionController {
    constructor(questionService: IQuestionService) {
        _questionService = questionService;
    }

    async Index(response: Response) {
        const [questions, count] = await _questionService.Index();

        response.header('x-total-count', count['count(*)']);

        return response.json(questions);
    }

    async Show(request: Request, response: Response) {
        const { question_id } = request.params;

        if (question_id == null || !Number(question_id))
            return response.status(400).send({ error: 'question id need to be a number' });

        const data = await _questionService.Show(Number(question_id));
        const { question } = data;

        if (!question)
            return response.status(404).send({ error: 'question doens\'t exist' });

        return response.json(data);
    }

    async AllByUserID(request: Request, response: Response) {
        const { user_id } = request.params;


        if (user_id == null || !Number(user_id))
            return response.status(400).send({ error: 'user id need to be a number' });


        const [questions, count] = await _questionService.AllByUserID(Number(user_id));

        if (questions.length == 0)
            return response.status(404).send({ error: 'user haven\'t made questions yet' });

        response.header('X-total-count', count['count(*)']);

        return response.json(questions);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;

        const user = await _questionService.Create(data);

        return response.json(user);
    }

    async Update(request: Request, response: Response) {
        const data = request.body;
        const { id } = request.params;

        const question = await _questionService.Show(Number(id));

        if (!question) response.status(404).json({ error: 'Question not found' });

        const updateQuestion = await _questionService.Update(data, Number(id));

        return response.json(updateQuestion);
    }

    async Delete(request: Request, response: Response) {
        const { id } = request.params;

        if (id == null || !Number(id))
            return response.status(400).send({ error: 'question id need to be a number' });

        const question = await _questionService.Show(Number(id));

        if (!question) response.status(404).json({ error: 'Question not found' });

        const questionDeleted = await _questionService.Delete(Number(id));

        return response.json(questionDeleted);
    }

};

export default QuestionController;