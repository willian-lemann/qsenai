import IAnswerRepository from '../interfaces/IAnswerRepository';

let _answerRepository: IAnswerRepository;

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerService implements IAnswerRepository {
    constructor(answerRepository: IAnswerRepository) {
        _answerRepository = answerRepository;
    }

    async Create(newAnswer: NewAnswer) {
        const answer = await _answerRepository.Create(newAnswer);

        return answer;
    }
};

export default AnswerService;