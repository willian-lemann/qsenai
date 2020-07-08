import IQuestionService from '../interfaces/IQuestionService';
import QuestionRepository from '../repository/QuestionRepository';

const questionRepository = new QuestionRepository();

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

interface UpdateQuestion {
    id: number,
    subject: string,
    content: string,
    user_id: number
}

class QuestionService implements IQuestionService {

    async Index() {
        const questions = await questionRepository.Index();
        return questions;
    }

    async AllByUserID(userId: number) {
        const questions = await questionRepository.AllByUserID(userId);
        return questions;
    }

    async Show(questionId: number) {
        const question = await questionRepository.Show(questionId);
        return question;
    }

    async Create(newQuestion: NewQuestion) {
        const question = await questionRepository.Create(newQuestion);
        return question;
    }

    async Update(updateQuestion: UpdateQuestion, id: number) {
        const answers = await questionRepository.Show(id);

        const question = await questionRepository.Update(updateQuestion, id);

        return question;
    }

    async Delete(questionId: number) {
        const question = await questionRepository.Delete(questionId);

        return question;
    }
};

export default QuestionService;