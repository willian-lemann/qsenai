import knex from '../database/connection';
import IAnswerRepository from '../interfaces/IAnswerRepository';

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerRepository implements IAnswerRepository {
    async Create(newAnswer: NewAnswer) {
        return await knex('answer').insert(newAnswer);
    }
}

export default AnswerRepository;