import knex from '../database/connection';

interface NewUser {
    name: string,
    email: string,
    password: string,
    graduation: string,
}

class UserRepository {
    async Index() {
        return await knex('users').select('*');
    }

    async Create(newUSer: NewUser) {
        return await knex('users').insert(newUSer);
    }
}

export default UserRepository;