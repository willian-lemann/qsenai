import { Request, Response } from 'express';

import AuthService from '../services/AuthService';

const authService = new AuthService();

class AuthController {
    async Register(request: Request, response: Response) {
        return await authService.Register(request, response);
    }

    async Authenticate(request: Request, response: Response) {
        return await authService.Authenticate(request, response);
    }
};

export default AuthController;