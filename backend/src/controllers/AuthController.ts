import { Request, Response } from 'express';

import IAuthService from '../interfaces/IAuthService';

let _authService: IAuthService;

class AuthController {
    constructor(authService: IAuthService) {
        _authService = authService;
    }

    async Register(request: Request, response: Response) {
        return await _authService.Register(request, response);
    }

    async Authenticate(request: Request, response: Response) {
        return await _authService.Authenticate(request, response);
    }
};

export default AuthController;