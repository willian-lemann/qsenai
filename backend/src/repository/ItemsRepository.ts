import knex from '../database/connection';

class ItemsRepository {
    async Index() {
        return await knex('items').select('*');
    }
}

export default ItemsRepository;