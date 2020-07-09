import AnswerRepository from '../repository/AnswerRepository';
import IAnswerService from '../interfaces/IAnswerService';

const answerRepository = new AnswerRepository();

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerService implements IAnswerService {

    async Create(newAnswer: NewAnswer) {
        const answer = await answerRepository.Create(newAnswer);

        return answer;
    }
};

export default AnswerService;