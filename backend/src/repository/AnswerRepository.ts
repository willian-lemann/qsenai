import knex from '../database/connection';
import IAnswerRepository from '../interfaces/IAnswerRepository';

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerRepository implements IAnswerRepository {

    private static instance: AnswerRepository;

    private AnswerRepository() {}

    public static getInstance(): AnswerRepository {
        if (!AnswerRepository.instance) {
            AnswerRepository.instance = new AnswerRepository();
        }

        return AnswerRepository.instance;
    }

    async Create(newAnswer: NewAnswer) {
        return await knex('answer').insert(newAnswer);
    }
}

export default AnswerRepository;