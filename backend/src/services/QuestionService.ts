import { Request, Response } from 'express';

import QuestionRepository from '../repository/QuestionRepository';

const questionRepository = new QuestionRepository();

class QuestionService {

    async Index(request: Request, response: Response) {
        const [questions, count] = await questionRepository.Index();
        console.log(questions)
        response.header('x-total-count', count['count(*)']);

        return response.json(questions);
    }

    async AllByUserID(request: Request, response: Response) {
        const { user_id } = request.params;

        if (user_id == null || !Number(user_id))
            return response.status(400).send({ error: 'user id need to be a number' });


        const [questions, count] = await questionRepository.AllByUserID(Number(user_id));

        if (questions.length == 0)
            return response.status(404).send({ error: 'user haven\'t made questions yet' });

        response.header('X-total-count', count['count(*)']);

        return response.json(questions);
    }

    async Show(request: Request, response: Response) {
        const { question_id } = request.params;

        if (question_id == null || !Number(question_id))
            return response.status(400).send({ error: 'question id need to be a number' });

        const data = await questionRepository.Show(Number(question_id));
        const { question } = data;

        if (!question)
            return response.status(404).send({ error: 'question doens\'t exist' });

        return response.json(data);
    }

    async Create(request: Request, response: Response) {
        const newQuestion = request.body;

        const user = await questionRepository.Create(newQuestion);
        return response.json(user);
    }

    async Update(request: Request, response: Response) {
        const newQuestion = request.body;
        const { id } = request.params;

        const updateQuestion = await questionRepository.Update(newQuestion, Number(id));

        if (!updateQuestion) response.status(404).json({ error: 'Question not found' });

        return response.json(updateQuestion);
    }

    async Delete(request: Request, response: Response) {
        const { id } = request.params;

        if (id == null || !Number(id))
            return response.status(400).send({ error: 'question id need to be a number' });

        const questionDeleted = await questionRepository.Delete(Number(id));

        if (!questionDeleted) response.status(404).json({ error: 'Question not found' });

        return response.json(questionDeleted);
    }
};

export default QuestionService;