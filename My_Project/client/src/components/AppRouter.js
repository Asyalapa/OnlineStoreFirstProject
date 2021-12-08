import React from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import FrontPage from "../pages/FrontPage";

const AppRouter = () => {
    // const isAuth = true
    const isAuth = false
    return (
        isAuth ?
            <Routes>
                {authRoutes.map(routes =>
                    <Route key={routes.path} path={routes.path} element={<routes.component />} />
                )}
                <Route path='*' element={<FrontPage />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(routes =>
                    <Route key={routes.path} path={routes.path} element={<routes.component />} />
                )}
                <Route path='*' element={<FrontPage />}/>
            </Routes>
    );
};

export default AppRouter;