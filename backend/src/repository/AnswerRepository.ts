import knex from '../database/connection';

interface NewAnswer {
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
}

export default AnswerRepository;