interface NewUser {
    id: number,
    name: string,
    email: string,
    password: string | undefined,
    graduation: string,
}

interface IAuthRepository {
    findByEmail(email: string): Promise<any>;

    Register(newUser: NewUser): Promise<any>;
}

export default IAuthRepository;