import React, {useContext, useState} from "react";
import {Context} from "../index";
import '../styles/NavBar.css'
import {Link} from "react-router-dom";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    ARTICLES_ROUTE,
    BASKET_ROUTE,
    INDEX_ROUTE,
    REG_ROUTE,
    SHOP_ROUTE
} from "../utils/consts";
import NavbarButton from "./UI/NavbarButton";
import NavbarMenu from "./UI/NavbarMenu";

const NavBar = () => {
    const {user} = useContext(Context)
    const [showMenu, setShowMenu] = useState(false)
    const left_items = [
        {id: 51, value: `IDEAL${'\u00A0'}матрас`, link: INDEX_ROUTE},
        {id: 52, value: `О${'\u00A0'}компании`, link: ABOUT_ROUTE},
        {id: 53, value: `Полезные${'\u00A0'}статьи`, link: ARTICLES_ROUTE},
        {id: 54, value: `Товары`, link: SHOP_ROUTE}]
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
                        {user.isAuth ?
                            <div className="navbar__baths">
                                <NavbarButton>
                                    <Link to={BASKET_ROUTE} className="navbar__link"> Корзина </Link>
                                </NavbarButton>
                                <NavbarButton>
                                    <Link to={ADMIN_ROUTE} className="navbar__link"> Админ панель </Link>
                                </NavbarButton>
                            </div>
                            :
                            <div className="navbar__baths">
                                <NavbarButton>
                                <Link to={REG_ROUTE} className="navbar__link"> Регистрация </Link>
                                </NavbarButton>
                            </div>}
                    </div>
                </div>
            </div>
            <NavbarMenu show={showMenu} setShow={setShowMenu} items={left_items}/>
        </div>
    );
};

export default NavBar;