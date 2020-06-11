import knex from '../database/connection';

interface NewAnswer {
    content: string,
    question_id: number,
}

class AnswerRepository {
    async Index() {
        return await knex('question').select('*');
    }

    async Create(newAnswer: NewAnswer) {
        return await knex('question').insert(newAnswer);
    }
}

export default AnswerRepository;