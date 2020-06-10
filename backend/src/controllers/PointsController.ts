import { Request, Response } from 'express';

import PointsService from '../services/PointsService';

const pointsService = new PointsService();

class PointsController {

    async Index(request: Request, response: Response) {
        const data = request.query;

        const filteredPoints = await pointsService.Index(data)

        return response.json(filteredPoints);
    }

    async Show(request: Request, response: Response) {
        const { id } = request.params;
        const point = await pointsService.Show(id);

        if (!point) {
            return response.status(400).json({ message: 'Point not found.' });
        }

        return response.json(point);
    }


    async Create(request: Request, response: Response) {
        const data = request.body;

        const createdPoint = await pointsService.Create(data);

        return response.json(createdPoint);
    }
}


export default PointsController;