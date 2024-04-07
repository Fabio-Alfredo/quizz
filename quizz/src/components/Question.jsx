import React, { useEffect, useState } from 'react';
import { Results } from './Results';

export const Question = ({ filteredQuestion, questionFiltered, indexQuestion, setIndexQuestion, reset }) => {


    const [selectAnswerIndex, setSelectAnsweIndex] = useState(null)
    const [answered, setAnswered] = useState(false)
    const [score, setScore] = useState(0)
    const [answerRandom, setAnswerRandom] = useState([])
    const [activateResult, setActivateResult] = useState(false)

    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnsweIndex(null)
        setAnswered(false)
    }

    const checkAnswer = (answerText, index) => {
        if (answerText === filteredQuestion.correct_answer) {
            setScore(score + 1)
        }
        setSelectAnsweIndex(index)
        setAnswered(true)
    }


    useEffect(() => {
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer
        ]
        setAnswerRandom(answers.sort(() =>
            Math.random() - 0.5
        ))

    }, [filteredQuestion])


    return (
        <>
            {activateResult ? (
                <Results questionFiltered={questionFiltered} score={score} setScore={setScore} reset={reset}/>
            ) : (
                <div className='flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg'>
                    <div className='flex justify-between'>
                        <span className='text-xl font-bold'>
                            {indexQuestion + 1} / {questionFiltered.length}

                        </span>
                        <div>
                            <span className='font-semibold'>
                                {filteredQuestion.difficulty}
                            </span>
                            <span className='font-bold'>
                            </span>
                        </div>
                    </div>
                    <button className='border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900'
                        onClick={() => {
                            reset(true)
                            setScore(0)
                        }}
                    >
                        Reiniciar
                    </button>
                    <div>
                        <h1 className='font-bold'>
                            {filteredQuestion.question}
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            answerRandom.map((answer, index) => (
                                <button className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                                    selectAnswerIndex!==null && 
                                    index === selectAnswerIndex 
                                    ? answer === filteredQuestion.correct_answer 
                                    ? 'bg-green-500':'bg-red-500':''
                                }`}
                                    key={answer}
                                    onClick={() => checkAnswer(answer, index)}
                                    disabled ={answered && selectAnswerIndex !==index}
                                >
                                    <p className='font-medium text-center text-sm'>
                                        {answer}
                                    </p>
                                </button>
                            ))
                        }

                    </div>
                    {
                        indexQuestion + 1 === questionFiltered.length ? (
                            <button className='border-2 border-yellow-600 rounded-md px-5 py-2
            hover:bg-yellow-600 hover:text-black font-medium' onClick={() => {
                                    setAnswered(false)
                                    setActivateResult(true)
                                }

                                }>
                                finalizar
                            </button>
                        ) : (
                            <button className='border-2 border-yellow-600 rounded-md px-5 py-2
                    hover:bg-yellow-600 hover:text-black font-medium' onClick={onNextQuestion}>
                                siguiente pregunta
                            </button>
                        )
                    }

                </div>
            )}


        </>
    );
};

