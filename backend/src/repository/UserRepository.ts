import knex from '../database/connection';

interface NewUser {
    name: string,
    email: string,
    password: string,
    graduation: string,
}

class UserRepository {
    async Index() {
        return await knex('user').select('*');
    }

    async Create(newUser: NewUser) {
        return await knex('user').insert(newUser);
    }
}

export default UserRepository;