interface NewAnswer {
    content: string,
    question_id: number,
}

interface IAnswerService {
    Create(newAnswer: NewAnswer): Promise<any>;
}

export default IAnswerService;