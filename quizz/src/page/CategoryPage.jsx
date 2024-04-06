import React from 'react';
import { useParams } from 'react-router-dom';

export const CategoryPage = () => {
    
    const{category}=useParams()

    return (
        <div>
            <h1>categoria</h1>
        </div>
    );
};

