import AnswerRepository from '../repository/AnswerRepository';

const answerRepository = new AnswerRepository();

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerService {
    async Index() {
        const answers = await answerRepository.Index();

        return answers;
    }

    async Create(newAnswer: NewAnswer) {
        const answer = await answerRepository.Create(newAnswer);

        return answer;
    }
};

export default AnswerService;