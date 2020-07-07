import express from 'express';
import authMiddlwware from './middlewares/auth';

const routes = express.Router();

import AuthController from './controllers/AuthController';
import QuestionController from './controllers/QuestionController';
import AnswerController from './controllers/AnswerController';

const authController = new AuthController();
const questionController = new QuestionController();
const answerController = new AnswerController();

routes.post('/register', authController.Register);
routes.post('/authenticate', authController.Authenticate);

routes.get('/questions', authMiddlwware, questionController.Index);
routes.get('/questions/:user_id/all', authMiddlwware, questionController.AllByUserID);
routes.get('/questions/:question_id', authMiddlwware, questionController.Show);
routes.post('/questions', authMiddlwware, questionController.Create);
routes.put('/questions', authMiddlwware, questionController.Update);
routes.delete('/questions', authMiddlwware, questionController.Delete);

routes.post('/answers', authMiddlwware, answerController.Create);

export default routes;