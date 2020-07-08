import { Request, Response } from 'express';

interface NewUser {
    id: number,
    name: string,
    email: string,
    password: string | undefined,
    graduation: string,
}

interface IAuthService {
    Register(request: Request, response: Response): Promise<any>;

    Authenticate(request: Request, response: Response): Promise<any>;
}

export default IAuthService;