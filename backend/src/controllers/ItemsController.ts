import { Request, Response } from 'express';

import ItemsService from '../services/ItemsServices';

const itemsService = new ItemsService();

class ItemsController {
    async Index(request: Request, response: Response) {
        const items = await itemsService.Index();

        return response.json(items);
    }
};

export default ItemsController;