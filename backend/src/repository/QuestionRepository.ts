import knex from '../database/connection';

interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

interface UpdateQuestion {
    id: number,
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

    async Show(questionId: number) {
        const question = await knex('question')
            .select('question.*')
            .select('user.name as owner')
            .select('user.email')
            .select('user.graduation')
            .join('user', 'question.user_id', '=', 'user.id')
            .where('question.id', questionId).first();

        const answers = await knex('answer')
            .select('answer.id')
            .select('answer.content')
            .select('user.name as answerOwner')
            .select('answer.question_id')
            .join('user', 'answer.user_id', '=', 'user.id')
            .join('question', 'question.id', '=', 'answer.question_id')
            .where('question.id', questionId);

        return {
            question,
            answers
        }
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
        const question = await knex('question').insert(newQuestion);

        const createdQuestion = await knex('question')
            .select('question.*')
            .select('user.name as owner')
            .select('user.email')
            .select('user.graduation')
            .join('user', 'question.user_id', '=', 'user.id')
            .where('question.id', question[0]).first();

        return createdQuestion;
    }

    async Update(updateQuestion: UpdateQuestion, id: number) {
        return await knex('question')
            .where('id', id)
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