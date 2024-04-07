import React from 'react';

export const Question = () => {
    return (
        <>
            <div className='flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg'>
                <div className='flex justify-between'>
                    <span className='text-xl font-bold'>
                    </span>
                    <div>
                        <span className='font-semibold'>
                            dificultad
                        </span>
                        <span className='font-bold'>
                        </span>
                    </div>
                </div>
                <button className='border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900'>
                    reiniciar
                </button>
                <div>
                    <h1 className='font-bold'>
                        titulo pregunta
                    </h1>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <button className='border-p-5 rounded-lg flex justify-center items-center hover:scale-105'>
                        <p className='font-medium text-center text-sm'>
                            alguna respuesta
                        </p>
                    </button>
                </div>
                <button className='border-2 border-yellow-600 rounded-md px-5 py-2
                hover:bg-yellow-600 hover:text-black font-medium'>
                    finalizar o siguiente pregunta
                </button>
            </div>

        </>
    );
};

