import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../config/auth.json';

export = (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization; // variavel application

    if (!authHeader)
        return response.status(401).json({ error: 'No token provided.' });

    const parts = authHeader.split(' ');

    if (parts.length !== 2)
        return response.status(401).json({ error: 'Token error. Cannot find the "Bearer" string.' });


    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return response.status(401).json({ error: 'Token malformatted.' });

    jwt.verify(token, secret, (error, decoded: any) => {
        if (error)
            return response.status(401).json({ error: 'Token invalid.' });

        request.body.userId = decoded.id;

        return next();
    });
}