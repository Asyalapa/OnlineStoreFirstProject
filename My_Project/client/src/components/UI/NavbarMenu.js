import React from 'react';
import {Link} from "react-router-dom";
import './NavbarMenu.css'

const NavbarMenu = ({items, show, setShow}) => {
    return (
        <div className={show ? 'navbar__menu show' : 'navbar__menu'} onClick={() => setShow(false)}>
            <div className={show ? 'menu__blur show' : 'menu__blur'}/>
            <ul className='menu__content' onClick={event => event.stopPropagation()}>
                {items.map(item =>
                <li className='menu__item' key={item.id}>
                    <Link to={item.link} className='menu__item-link'>{item.value}</Link>
                </li>
                )}
            </ul>
        </div>
    );
};

export default NavbarMenu;