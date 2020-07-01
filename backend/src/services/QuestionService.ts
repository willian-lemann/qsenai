import QuestionRepository from '../repository/QuestionRepository';

const questionRepository = new QuestionRepository();

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

class QuestionService {

    async Index(page: number) {
        const questions = await questionRepository.Index(page);

        return questions;
    }


    async AllByUserID(userId: number, page: number) {
        const questions = await questionRepository.AllByUserID(userId, page);

        return questions;
    }

    async Create(newQuestion: NewQuestion) {
        const question = await questionRepository.Create(newQuestion);

        return question;
    }
};

export default QuestionService;