import QuestionRepository from '../repository/QuestionRepository';

const questionRepository = new QuestionRepository();

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

class QuestionService {
    async Index() {
        const questions = await questionRepository.Index();

        return questions;
    }

    async Create(newQuestion: NewQuestion) {
        const question = await questionRepository.Create(newQuestion);

        return question;
    }
};

export default QuestionService;