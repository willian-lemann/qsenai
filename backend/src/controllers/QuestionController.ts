import { Request, Response } from 'express';

import QuestionService from '../services/QuestionService';

const questionService = new QuestionService();

class QuestionController {

    async Index(request: Request, response: Response) {
        return await questionService.Index(request, response);
    }

    async Show(request: Request, response: Response) {
        return await questionService.Show(request, response);
    }

    async AllByUserID(request: Request, response: Response) {
        return await questionService.AllByUserID(request, response);
    }

    async Create(request: Request, response: Response) {
        return await questionService.Create(request, response);
    }

    async Update(request: Request, response: Response) {
        return await questionService.Update(request, response);
    }

    async Delete(request: Request, response: Response) {
        return await questionService.Delete(request, response);
    }

};

export default QuestionController;