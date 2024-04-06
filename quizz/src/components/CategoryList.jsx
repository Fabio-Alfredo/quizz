import React from 'react';
import { imgs, categories } from '../data'
import { CategoryCard } from './CategoryCard';
const [
    imgCiencias,
    imgDeportes,
    imgFilosofia,
    imgGeografia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia
] = imgs


export const CategoryList = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
            <CategoryCard
                category={categories.ciencia}
                src={imgCiencias}
                alt={`Categoria ${categories.ciencia}`}
                gradientColor={' from-purple-500 to-pink-500'}
            />
            <CategoryCard
                category={categories.deportes}
                src={imgDeportes}
                alt={`Categoria ${categories.deportes}`}
                gradientColor={'from-green-500 to-yellow-500'}
            />
            <CategoryCard
                category={categories.filosofia}
                src={imgFilosofia}
                alt={`Categoria ${categories.filosofia}`}
                gradientColor={'from-blue-500 to-red-500'}
            />
            <CategoryCard
                category={categories.geografia}
                src={imgGeografia}
                alt={`Categoria ${categories.geografia}`}
                gradientColor={'from-red-500 to-black-500'}
            />
            <CategoryCard
                category={categories.historia}
                src={imgHistoria}
                alt={`Categoria ${categories.historia}`}
                gradientColor={'from-blue-500 to-orange-500'}
            />
            <CategoryCard
                category={categories.literatura}
                src={imgLiteratura}
                alt={`Categoria ${categories.literatura}`}
                gradientColor={'from-pink-500 to-black-500'}
            />
            <CategoryCard
                category={categories.tecnologia}
                src={imgTecnologia}
                alt={`Categoria ${categories.tecnologia}`}
                gradientColor={'from-gray-500 to-green-500'}
            />
        </div>
    );
};

