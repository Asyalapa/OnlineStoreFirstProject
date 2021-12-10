import React,{ useState } from "react";
// import {useContext} from 'react';
// import {Context} from "../index";
import '../styles/NavBar.css'
import {Link} from "react-router-dom";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    ARTICLES_ROUTE,
    BASKET_ROUTE,
    INDEX_ROUTE,
    LOGIN_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import NavbarButton from "./UI/NavbarButton";
import NavbarMenu from "./UI/NavbarMenu";

const NavBar = () => {
    // const {user} = useContext(Context)
    const [showMenu, setShowMenu] = useState(false)
    const left_items = [
        {id: 1, value: `IDEAL${'\u00A0'}матрас`, link: INDEX_ROUTE},
        {id: 2, value: `О${'\u00A0'}компании`, link: ABOUT_ROUTE},
        {id: 3, value: `Полезные${'\u00A0'}статьи`, link: ARTICLES_ROUTE},
        {id: 4, value: `Товары`, link: SHOP_ROUTE}]
    const right_items = [
        {id: 1, value: `Корзина`, link: BASKET_ROUTE},
        {id: 2, value: `Админ${'\u00A0'}панель`, link: ADMIN_ROUTE},
        {id: 2, value: `Log${'\u00A0'}In`, link: LOGIN_ROUTE}]

    return (
        <div>
            <div className="navbar">
                <div className='wrapper'>
                    <div className="navbar__left">
                        <div className="navbar__links"> {
                                left_items.map(item =>
                                    <NavbarButton key={item.id}>
                                        <Link to={item.link} className="navbar__link"> {item.value} </Link>
                                    </NavbarButton>
                                )}
                        </div>
                        <div className="navbar__baths menu-bth">
                            <NavbarButton onClick={() => setShowMenu(!showMenu)} >Меню</NavbarButton>
                        </div>
                    </div>
                    <div className="navbar__right">
                        <div className="navbar__baths">{
                            right_items.map(item =>
                                <NavbarButton key={item.id}>
                                    <Link to={item.link} className="navbar__link"> {item.value} </Link>
                                </NavbarButton>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <NavbarMenu show={showMenu} setShow={setShowMenu} items={left_items}/>
        </div>
    );
};

export default NavBar;