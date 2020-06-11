import knex from '../database/connection';

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

class QuestionRepository {
    async Index() {
        return await knex('question').select('*');
    }

    async Create(newQuestion: NewQuestion) {
        return await knex('question').insert(newQuestion);
    }
}

export default QuestionRepository;