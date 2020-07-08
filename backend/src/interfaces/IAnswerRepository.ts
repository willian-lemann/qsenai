interface NewAnswer {
    content: string,
    question_id: number,
}

interface IAnswerRepository {
    Create(newAnswer: NewAnswer): Promise<any>;
}

export default IAnswerRepository;