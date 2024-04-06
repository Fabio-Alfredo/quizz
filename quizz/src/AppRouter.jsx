import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage } from './page';
import { Navbar } from './components';

const AppRouter = () => {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='/category/:category' Component={CategoryPage} />
            </Routes>
        </>

    );
};

export default AppRouter;