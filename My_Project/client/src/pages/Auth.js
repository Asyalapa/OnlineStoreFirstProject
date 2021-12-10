import React from 'react';
import '../styles/auth.css'
import {LOGIN_ROUTE, REG_ROUTE} from "../utils/consts";
import {Link, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className={'auth__wrapper'}>
            <form className="form" id="form" noValidate>
                <h1 className="form__title">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                <div className="form__group">
                    <span>*</span>
                    <input type="email"
                           className="form__input _email req"
                           placeholder="Введите e-mail"
                           id="email"/>
                    <label className="form__label">Email</label>
                    <small/>
                </div>
                <div className="form__group group__password">
                    <span>*</span>
                    <input type="password"
                           className="form__input _password req"
                           placeholder="Введите пароль"
                           id="password"/>
                    <label className="form__label">Пароль</label>
                    <small/>
                </div>
                <div className="form__group group__checkbox">
                    <span>*</span>
                    <input type="checkbox"
                           className="form__checkbox req"/>
                    <div className="form__checkbox-mark"/>
                    <label className="form__checkbox-label">Я согласен c
                        <a href="#">Правилами пользованием приложением</a>
                    </label>
                    <small/>
                </div>
                    {isLogin ?
                        <div className="form__last-group">
                            <input type="submit" value="Авторизация" className="form__button"/>
                            <label className="form__checkbox-label">
                                <Link to={LOGIN_ROUTE}>Нет аккаунта?</Link> Зарегистрируйся!
                            </label>
                        </div>
                        :
                        <div className="form__last-group">
                            <input type="submit" value="Регистрация" className="form__button"/>
                            <label className="form__checkbox-label">
                                <Link to={REG_ROUTE}>Есть аккаунт?</Link> Войти!
                            </label>
                        </div>
                    }
            </form>
        </div>)
};

export default Auth;