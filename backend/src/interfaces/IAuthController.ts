import { Request, Response } from 'express';

interface IAuthController {
    Register(request: Request, response: Response): Promise<any>;

    Authenticate(request: Request, response: Response): Promise<any>;
}

export default IAuthController;