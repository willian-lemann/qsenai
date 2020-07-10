import { Request, Response } from 'express';

import AnswerRepository from '../repository/AnswerRepository';

const answerRepository = new AnswerRepository();

class AnswerService {

    async Create(request: Request, response: Response) {
        const { content, question_id, user_id } = request.body;

        const newAnswer = {
            content,
            question_id,
            user_id
        }

        const answer = await answerRepository.Create(newAnswer);

        return response.json(answer);
    }
};

export default AnswerService;