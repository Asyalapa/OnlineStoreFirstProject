import React from 'react';
import '../styles/App.css';

const Aboutus = () => {
    return (
        <div>
            <h2 className="main__title">О&nbsp;компании</h2>
            <article className="main__article">
                У нашей компании богатый опыт по&nbsp;реализации качественных матрасов. Матрасы IDEAL продаются с&nbsp;1996. Каждый год мы&nbsp;растем и&nbsp;развиваемся, несмотря на&nbsp;периодические кризисные явления в&nbsp;экономике.
            </article>
            <article className="main__article">
                Матрасы IDEAL нашли своего покупателя за&nbsp;счет высокого качества по&nbsp;разумной цене. Одно из&nbsp;главных преимуществ наших товаров&nbsp;&mdash; собственное производство. Свой сон нам доверили уже тысячи довольных клиентов.
            </article>
            <article className="main__article">
                Наша компания готова предложить Вам коллекции матрасов IDEAL как из&nbsp;линейки проверенных временем и&nbsp;уже зарекомендовавших себя, так и&nbsp;совершенно новые образцы.
                Вашему вниманию представляем обновленный сайт с&nbsp;удобной и&nbsp;простой навигацией. Здесь Вы&nbsp;быстро найдете любые матрасы как для взрослых, так и&nbsp;для детей.
                Для нас главное&nbsp;&mdash; Ваше здоровье и&nbsp;крепкий сон!
            </article>
            <h2 className="main__title">О&nbsp;производстве</h2>
            <article className="main__article">
                На&nbsp;нашем производстве мы&nbsp;шьем матрасы &laquo;Идеал&raquo; с&nbsp;1996&nbsp;года.
                Имея необходимое оборудование, богатый опыт и&nbsp;высококвалифицированный персонал, мы&nbsp;с&nbsp;гордостью представляем качественные, надежные и&nbsp;удобные матрасы для самых взыскательных потребителей.
            </article>
            <h2 className="main__title">Этапы&nbsp;производства</h2>
            <ul className="aboutus__making-list">
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro1.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Изготовление блока независимых пружин на&nbsp;специальным дорогостоящем станке. Работа на&nbsp;этом станке требует высокой квалификации оператора.
                        </figcaption>
                    </figure>
                </li>
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro2.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Сборка основания матраса.
                        </figcaption>
                    </figure>
                </li>
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro3.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Раскрой материалов требует точности отмера и&nbsp;отреза.
                        </figcaption>
                    </figure>
                </li>
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro4.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Заготовки оснований матрасов, осталось упаковать в&nbsp;чехол и&nbsp;обшить кромку.
                        </figcaption>
                    </figure>
                </li>
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro5.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Пошив чехлов для матрасов.
                        </figcaption>
                    </figure>
                </li>
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro6.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Обшиваем кромку, для этого требуется специальная швейная машина, участок раскроя материала и&nbsp;сборки матрасов.
                        </figcaption>
                    </figure>
                </li>
                <li className="main__list-item-popular">
                    <figure className="aboutus__making-item">
                        <img src="../img/pro7.jpg" alt="" className="aboutus__making-img"/>
                        <figcaption className="aboutus__making-desc">
                            Склад готовой продукции&nbsp;&mdash; упаковка и&nbsp;отправка покупателю.
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    );
};

export default Aboutus;