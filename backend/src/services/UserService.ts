import UserRepository from '../repository/UserRepository';

const userRepository = new UserRepository();

interface NewUser {
    name: string,
    email: string,
    password: string,
    graduation: string,
} 

class UserService {

    async Index() {
        return await userRepository.Index();
    }

    async Create(newUser: NewUser) {
        const user = await userRepository.Create(newUser);

        return user;
    }
}

export default UserService;