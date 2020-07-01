import knex from '../database/connection';

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

class QuestionRepository {
    async Index() {
        const [count] = await knex('question').count();

        const questions = await knex('question')
            .select('question.*')
            .select('user.name as owner')
            .select('user.email')
            .select('user.graduation')
            .join('user', 'question.user_id', '=', 'user.id')

        return [questions, count];
    }

    async AllByUserID(userId: number) {
        const [count] = await knex('question').count();

        const questions = await knex('question')
            .select('question.*')
            .select('user.name as owner')
            .select('user.email')
            .select('user.graduation')
            .join('user', 'question.user_id', '=', 'user.id')
            .where('question.user_id', userId);

        return [questions, count];
    }

    async Create(newQuestion: NewQuestion) {
        return await knex('question').insert(newQuestion);
    }
}

export default QuestionRepository;