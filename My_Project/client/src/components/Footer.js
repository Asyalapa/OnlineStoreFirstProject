import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    const infoList = [
        {id: 1, value: `О\u00A0\ компании`},
        {id: 2, value: 'О\u00A0\ производстве'},
        {id: 3, value: 'Как\u00A0\ заказать'},
        {id: 4, value: 'Доставка\u00A0\ и\u00A0\ оплата'},
        {id: 5, value: 'Полезная\u00A0\ информация'}]
    const categoryList = [
        {id: 1, value: 'Пружинные\u00A0\матрасы'},
        {id: 2, value: 'Беспружинные\u00A0\матрасы'},
        {id: 3, value: 'Десткие\u00A0\матрасы'},
        {id: 4, value: 'Матрасы\u00A0\для\u00A0\грудничков'},
        {id: 5, value: 'Подушки'}]
    return (
        <div>
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__left">
                        <ul className="footer__list"> {
                            infoList.map(item =>
                                <li className="footer__list-item" key={item.id}>{item.value}</li>
                            )
                        }
                        </ul>
                        <ul className="footer__list">{
                            categoryList.map(item =>
                                <li className="footer__list-item" key={item.id}>{item.value}</li>
                            )
                        }
                        </ul>
                    </div>
                    <div className="footer__right">
                        <address className="footer__address">
                            <a href="tel:+79913941842"
                               className="footer__address-item">+7&nbsp;991&nbsp;394&nbsp;18&nbsp;42</a>
                            <a href="tel:+78312228044"
                               className="footer__address-item">+7&nbsp;831&nbsp;222&nbsp;80&nbsp;44</a>
                            <a href="mailto:zakaz@ideal-matras.ru"
                               className="footer__address-item">zakaz@ideal-matras.ru</a>
                            <p className="footer__address-item">603164,&nbsp;г.&nbsp;Нижний&nbsp;Новгород</p>
                            <p className="footer__address-item">ул.&nbsp;Окская&nbsp;гавань,&nbsp;д.&nbsp;1а</p>
                        </address>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A61be2cd2fbfd1732f03095ef6d3955f05367ecf379ce95702c77228d60283ed7&amp;source=constructor"
                            min-width="320" height="100" frameBorder="0"/>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;