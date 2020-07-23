import knex from '../database/connection';

import IAuthRepository from '../interfaces/IAuthRepository';

interface NewUser {
    id: number,
    name: string,
    email: string,
    password: string | undefined,
    graduation: string,
}
class AuthRepository {


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