import knex from '../database/connection';

import PointsRepository from '../repository/PointsRepository';
import PointItemsService from '../services/PointItemsService';

const pointsRepository = new PointsRepository();
const pointItemsService = new PointItemsService();

class PointsService {

    async Index(data: any) {
        const { city, uf, items } = data;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const filterParams = {
            city,
            uf,
            parsedItems
        }

        const points = await pointsRepository.Index(filterParams);

        return points;
    }

    async Show(id: any) {
        const point = await pointsRepository.Show(id);
        return point;
    }

    async Create(data: any) {
        const trx = await knex.transaction();

        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = data;

        const point = {
            image: 'https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        };

        const insertedPointIds = await pointsRepository.Create(point, trx);

        const point_id = insertedPointIds[0];

        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            };
        });

        await pointItemsService.Create(pointItems, trx);

        await trx.commit();

        return { point_id };
    }

}

export default PointsService;