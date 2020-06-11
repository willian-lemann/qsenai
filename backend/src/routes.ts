import express from 'express';
const routes = express.Router();

import UserController from './controllers/UserController';
import QuestionController from './controllers/QuestionController';
import AnswerController from './controllers/AnswerController';

const userController = new UserController();
const questionController = new QuestionController();
const answerController = new AnswerController();

routes.get('/users', userController.Index);
routes.post('/users', userController.Create);

routes.get('/questions', questionController.Index);
routes.post('/questions', questionController.Create);

routes.get('/answers', answerController.Index);
routes.post('/answers', answerController.Create);

export default routes;