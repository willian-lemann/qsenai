import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionProvider';

export const useQuestions = () => {
   const context = useContext(QuestionContext);
   const { state: questions, dispatch: setQuestions } = context;
   return { questions, setQuestions };
};

