import React, { useState, useEffect, ChangeEvent, useMemo } from 'react';
import api from '../../services/api';
import { orderBy } from 'lodash';

import './index.css';

import QuestionCard from '../../components/QuestionCard';
import { useQuestions } from '../../hooks/useQuestion';

interface Question {
    id: number,
    subject: string,
    content: string,
    user_id: number,
    owner: string,
    email: string,
    graduation: string
}

interface QuestionResponse {
    id: number,
    subject: string,
    content: string,
    owner: string,
}


const Layout: React.FC = () => {
    const { questions, setQuestions } = useQuestions();
    const [inputValue, setInputValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const loadQuestions = async () => {
        const response = await api.get<Question[]>('/questions');
        setQuestions(response.data);
    }

    useEffect(() => {
        loadQuestions();
    }, []);

    let filteredQuestions = questions.filter(question => question.subject.includes(filterValue))

    return (
        <div className='layout-container'>
            <section>
                <input
                    placeholder='Buscar questão...'
                    type="text"
                    value={inputValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} />

                <button
                    onClick={() => setFilterValue(inputValue && inputValue)}
                >Buscar
                </button>
            </section>

            <ul>
                {filteredQuestions.map((question: Question) => (
                    <QuestionCard key={question.id} question={question} />
                ))}
            </ul>
        </div>
    );
}

export default Layout;