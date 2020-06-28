import knex from '../database/connection';

interface NewQuestion {
    id: number ,
    subject: string,
    content: string,
    user_id: number,
}

class QuestionRepository {
    async Index(userId: number) {
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

    async Update(updateQuestion: NewQuestion) {
        return await knex('question')
        .where('question.id', updateQuestion.id)
        .update({
            subject: updateQuestion.subject,
            content: updateQuestion.content
        });
    }

    async Delete(questionId: number) {
        return await knex('question')
        .where('question.id', questionId)
        .del()
    }

}



export default QuestionRepository;