import knex from '../database/connection';

import IAuthRepository from '../interfaces/IAuthRepository';

interface NewUser {
    id: number,
    name: string,
    email: string,
    password: string | undefined,
    graduation: string,
}
class AuthRepository implements IAuthRepository {

    private static instance: AuthRepository;

    private AuthRepository() {}

    public static getInstance(): AuthRepository {
        if (!AuthRepository.instance) {
            AuthRepository.instance = new AuthRepository();
        }

        return AuthRepository.instance;
    }

    async findByEmail(email: string) {
        const user = await knex<NewUser>('user')
            .select('*')
            .where('user.email', email)
            .first();

        return user;
    }

    async Register(newUser: NewUser) {
        return await knex('user').insert(newUser);
    }
}

export default AuthRepository;