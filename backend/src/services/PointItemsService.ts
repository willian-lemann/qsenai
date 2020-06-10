import knex from '../database/connection';

import PointItemsRepository from '../repository/PointItemsRepository';
import { Transaction } from 'knex';

const pointItemsRepository = new PointItemsRepository();

class PointItemsService {

    async Create(pointItems: any, trx: Transaction) {
        await pointItemsRepository.Create(pointItems, trx);
    }
}

export default PointItemsService;