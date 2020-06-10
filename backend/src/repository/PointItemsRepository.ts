import { Transaction } from 'knex';

class PointItemsRepository {

    async Create(pointItems: any, trx: Transaction) {
        await trx('point_items').insert(pointItems);
    }
}

export default PointItemsRepository;