interface NewQuestion {
    subject: string,
    content: string,
    user_id: number,
}

interface UpdateQuestion {
    id: number,
    subject: string,
    content: string,
    user_id: number
}

interface IQuestionRepository {
    Index(): Promise<any>;

    AllByUserID(userId: number): Promise<any>;

    Show(questionId: number): Promise<any>;

    Create(newQuestion: NewQuestion): Promise<any>;

    Update(updateQuestion: UpdateQuestion, id: number): Promise<any>;

    Delete(questionId: number): Promise<any>;
}

export default IQuestionRepository;