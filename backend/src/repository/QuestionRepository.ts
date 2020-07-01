import knex from '../database/connection';

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

class QuestionRepository {
    async Index() {
        return await knex('question')
            .select('question.*')
            .select('user.name as owner')
            .select('user.email')
            .select('user.graduation')
            .join('user', 'question.user_id', '=', 'user.id');
            // .where('question.user_id', userId);
    }

    async AllByUserID(userId: number) {
        return await knex('question')
            .select('question.*')
            .select('user.name as owner')
            .select('user.email')
            .select('user.graduation')
            .join('user', 'question.user_id', '=', 'user.id')
            .where('question.user_id', userId);
    }

    async Create(newQuestion: NewQuestion) {
        return await knex('question').insert(newQuestion);
    }

    async QuestionByID(questionId: number) {
        return await knex('question')
            .select('question.*')
            .where('question.id', questionId);
    }

    
}

export default QuestionRepository;