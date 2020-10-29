import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface Answer {
   content: string,
   question_id: number,
   answerOwner: string
}

interface Question {
   id: number,
   subject: string,
   content: string,
   user_id: number,
   owner: string,
   email: string,
   graduation: string,
   
}

export const QuestionContext = createContext<{ state: Question[], dispatch: Dispatch<SetStateAction<Question[]>> }>({
   state: [],
   dispatch: () => { }
});

const QuestionProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useState<Question[]>([]);

   return (
      <QuestionContext.Provider value={{ state, dispatch }}>
         {children}
      </QuestionContext.Provider>
   )
};

export default QuestionProvider;