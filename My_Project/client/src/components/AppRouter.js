import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import FrontPage from "../pages/FrontPage";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        user.isAuth ?
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