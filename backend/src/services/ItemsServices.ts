import knex from '../database/connection';

import ItemsRepository from '../repository/ItemsRepository';

const itemsRepository = new ItemsRepository();

class ItemsService {
    async Index() {
        const items = await itemsRepository.Index();

        const serializedItems = items.map((item: any) => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        });

        return serializedItems;
    }

   
}

export default ItemsService;