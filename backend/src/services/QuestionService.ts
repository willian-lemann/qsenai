import QuestionRepository from '../repository/QuestionRepository';
import { response } from 'express';

const questionRepository = new QuestionRepository();

interface NewQuestion {
    id: number,
    subject: string,
    content: string,
    user_id: number,
}

class QuestionService {
    async Index(userId: number) {
        const questions = await questionRepository.Index(userId);

        return questions;
    }

    async Create(newQuestion: NewQuestion) {
        const question = await questionRepository.Create(newQuestion);

        return question;
    }

    async Update(updateQuestion: NewQuestion) {
        const question = await questionRepository.Update(updateQuestion);

        return question;
    }

    async Delete(questionId: number) {
        const question = await questionRepository.Delete(questionId);
        
        return question;
    }
};

export default QuestionService;