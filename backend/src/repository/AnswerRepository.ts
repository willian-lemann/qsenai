import knex from '../database/connection';

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerRepository {
    async Create(newAnswer: NewAnswer) {
        return await knex('answer').insert(newAnswer);
    }
}

export default AnswerRepository;