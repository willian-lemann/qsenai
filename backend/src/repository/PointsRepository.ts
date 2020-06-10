import { Transaction } from "knex";
import knex from '../database/connection';

class PointsRepository {

    async Index(filterParams: any) { 
        return await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', filterParams.parsedItems)
            .where('city', String(filterParams.city))
            .where('uf', String(filterParams.uf))
            .distinct()
            .select('points.*');
    }

    async Show(pointId: any) {
        const point = await knex('points').where('id', pointId).first();
        const items = await knex('items')
            .select('items.title')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', pointId);

        return { point, items };
    }

    async Create(point: any, trx: Transaction) {
        return await trx('points').insert(point);
    }


}

export default PointsRepository;