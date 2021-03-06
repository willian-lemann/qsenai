import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../config/auth.json';

import AuthRepository from '../repository/AuthRepository';

const authRepository = new AuthRepository();

interface NewUser {
    id: number,
    name: string,
    email: string,
    password: string | undefined,
    graduation: string,
}

interface tokenParams {
    id: number,
}

const GenerateToken = (params: tokenParams) => {
    return jwt.sign(params, secret, {
        expiresIn,
    });
}

class AuthService {
    async Register(request: Request, response: Response) {
        const { email } = request.body;
        const newUser: NewUser = request.body;

        try {
            if (await authRepository.findByEmail(email))
                return response.status(400).json({ error: 'User already exists.' });

            const hash = await bcrypt.hash(newUser.password, 10);
            newUser.password = hash;

            await authRepository.Register(newUser);

            newUser.password = undefined;

            const token = GenerateToken({ id: newUser.id })

            return response.json({
                newUser,
                token,
            });

        } catch (error) {
            return response.status(400).json({ error: 'Registration failed.' })
        }
    }

    async Authenticate(request: Request, response: Response) {
        const { email, password } = request.body;

        const user = await authRepository.findByEmail(email);

        if (!user)
            return response.status(400).json({ error: 'User not found.' });

        if (!await bcrypt.compare(String(password), String(user.password)))
            return response.status(400).json({ error: 'Invalid password.' });

        user.password = undefined;

        const token = GenerateToken({ id: user.id })
   
        return response.json({
            user,
            token,
        });
    }
}

export default AuthService;