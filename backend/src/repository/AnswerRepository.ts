import knex from '../database/connection';

interface NewAnswer {
    id: number,
    content: string,
    question_id: number,
}

class AnswerRepository {
    async Index(questionId: number) {
        return await knex('answer')
            .select('answer.*')
            .join('question', 'question.id', '=', 'answer.question_id')
            .where('question.id', questionId);
    }

    async Create(newAnswer: NewAnswer) {
        return await knex('answer').insert(newAnswer);
    }

    async Update(updateAnswer: NewAnswer) {
        return await knex('answer')
        .where('answer.id', updateAnswer.id)
        .update({
            content: updateAnswer.content
        });
    }

    async Delete(answerId: number) {
        return await knex('answer')
        .where('answer.id', answerId)
        .del()
    }
}

export default AnswerRepository;