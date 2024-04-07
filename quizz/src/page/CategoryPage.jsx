import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { questions } from '../data';
import { Question } from '../components';

const shuffleArray = (array) => {

    const newArray = array.sort(() => Math.random() - 0.5)
    return newArray.slice(0, 5)
}


export const CategoryPage = () => {

    const { category } = useParams()

    const [questionFiltered, setQuestionFiltered] = useState(
        questions.filter(question => question.category === category)
    )

    const [indexQuestion, setIndexQuestion] = useState(0)
    const [resetQuizz, setResetQizz] = useState(false)


    useEffect(() => {

        const newQuestions = shuffleArray(questionFiltered);
        setQuestionFiltered(newQuestions);
        if (resetQuizz) {
            setIndexQuestion(0);
            setResetQizz(false);
        }
    }, [resetQuizz])

    return (
        <div className='container flex flex-col items-center justify-center gap-10'
            style={{ height: 'calc(100vh - 5rem)' }}
        >
            <Question filteredQuestion={questionFiltered[indexQuestion]} setIndexQuestion={setIndexQuestion} indexQuestion={indexQuestion} questionFiltered={questionFiltered} reset={setResetQizz} />
        </div>
    );
};

