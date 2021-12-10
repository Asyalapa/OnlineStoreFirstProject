import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Main>
                <AppRouter />
            </Main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;