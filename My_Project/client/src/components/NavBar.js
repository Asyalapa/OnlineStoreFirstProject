import React,{ useState } from "react";
import {useContext} from 'react';
import {Context} from "../index";
import '../styles/NavBar.css'
import {Link} from "react-router-dom";
import {ABOUT_ROUTE, ARTICLES_ROUTE, INDEX_ROUTE, SHOP_ROUTE} from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div>
            <div className="navbar">
                <div className='wrapper'>
                    <div className="navbar__left">
                        <ul className="navbar__links">
                            <li className="navbar__links-item">
                                <Link to={INDEX_ROUTE} className="navbar__link">IDEAL&nbsp;матрас</Link>
                            </li>
                            <li className="navbar__links-item">
                                <Link to={ABOUT_ROUTE} className="navbar__link">О&nbsp;компании</Link>
                            </li>
                            <li className="navbar__links-item">
                                <Link to={ARTICLES_ROUTE} className="navbar__link">Полезные&nbsp;статьи</Link>
                            </li>
                            <li className="navbar__links-item">
                                <Link to={SHOP_ROUTE} className="navbar__link">Товары</Link>
                            </li>
                        </ul>
                        <div className="navbar__bths">
                        <button className="navbar__btn menu-bth">Чудеса</button>
                        </div>
                    </div>
                    <div className="navbar__right">
                        <div className="navbar__bths">
                            <button className="navbar__btn">
                                Корзина
                            </button>
                            <button className="navbar__btn">
                                Админ&nbsp;панель
                            </button>
                            <button className="navbar__btn">
                                Log&nbsp;In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;