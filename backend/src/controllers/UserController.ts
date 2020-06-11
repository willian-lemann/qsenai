import { Request, Response } from 'express';

import UserService from '../services/UserService';

const userService = new UserService();

class UserController {
    async Index(request: Request, response: Response) {
        const users = await userService.Index();

        return response.json(users);
    }

    async Create(request: Request, response: Response) {
        const data = request.body;
       
        const user = await userService.Create(data);

        return response.json(user);
    }
};

export default UserController;