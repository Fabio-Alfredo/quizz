import React from 'react';
import { Link } from 'react-router-dom';


export const Results = ({score, questionFiltered, reset, setScore}) => {
    return (
        <div className='flex flex-col justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5' >
            <h1 className='text-4xl font-bold'>
                resultado
            </h1>
            <div className='flex flex-col gap-5 text-center text-lg font-bold'>
                <span>
                    acertaste
                </span>
                <span className='font-black bg-gradient-to-t from-purple-400 to-pink-300 bg-clip-text text-transparent text-6xl animate-pulse'>
                    {((score / questionFiltered.length) * 100).toFixed(0)}%
                </span>
                de las preguntas {score} de {questionFiltered.length}
            </div>
            <Link to={'/'}>
                <button className='border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-400 hover:text-gray-900' onClick={() => {
                    reset(true)
                    setScore(0)
                }}>
                    vamos de nuevo
                </button>
            </Link>
        </div>
    );
};

