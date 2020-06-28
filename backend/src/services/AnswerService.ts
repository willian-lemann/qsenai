import AnswerRepository from '../repository/AnswerRepository';

const answerRepository = new AnswerRepository();

interface NewAnswer {
    id: number;
    content: string,
    question_id: number,
}

class AnswerService {
    async Index(questionId: number) {
        const answers = await answerRepository.Index(questionId);

        return answers;
    }

    async Create(newAnswer: NewAnswer) {
        const answer = await answerRepository.Create(newAnswer);

        return answer;
    }

    async Update(updateAnswer: NewAnswer) {
        const answer = await answerRepository.Update(updateAnswer);

        return answer;
    }

    async Delete(answerId: number) {
        const answer = await answerRepository.Delete(answerId);
        
        return answer;
    }
};

export default AnswerService;