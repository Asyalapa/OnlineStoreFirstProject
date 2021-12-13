import React from 'react';
import '../styles/App.css';
import pro1 from '../img/pro1.jpg';
import pro2 from '../img/pro2.jpg';
import pro3 from '../img/pro3.jpg';
import pro4 from '../img/pro4.jpg';
import pro5 from '../img/pro5.jpg';
import pro6 from '../img/pro6.jpg';
import pro7 from '../img/pro7.jpg';

const Aboutus = () => {
    const stages = [
        {   id: 1,
            img: pro1,
            name: 'Stage first',
            description: 'Изготовление блока независимых пружин на\u00A0\специальным дорогостоящем станке. Работа на\u00A0\этом станке требует высокой квалификации оператора.'},
        {   id: 2,
            img: pro2,
            name: 'Stage second',
            description: 'Сборка основания матраса.'},
        {   id: 3,
            img: pro3,
            name: 'Stage third',
            description: 'Раскрой материалов требует точности отмера и\u00A0\отреза.'},
        {   id: 4,
            img: pro4,
            name: 'Stage fourth',
            description: 'Заготовки оснований матрасов, осталось упаковать в\u00A0\чехол и\u00A0\обшить кромку.'},
        {   id: 5,
            img: pro5,
            name: 'Stage fifth',
            description: 'Пошив чехлов для матрасов.'},
        {   id: 6,
            img: pro6,
            name: 'Stage sixth',
            description: 'Обшиваем кромку, для этого требуется специальная швейная машина, участок раскроя материала и\u00A0\сборки матрасов.'},
        {   id: 7,
            img: pro7,
            name: 'Stage seventh',
            description: 'Склад готовой продукции, упаковка и\u00A0\отправка покупателю.'},
    ]

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
                {
                    stages.map(item => {
                        return (
                            <li className="main__list-item-popular" key={item.id}>
                                <figure className="aboutus__making-item">
                                    <img src={item.img} alt={item.name} className="aboutus__making-img"/>
                                        <figcaption className="aboutus__making-desc">
                                            {item.description}
                                        </figcaption>
                                    </figure>
                            </li>)
                    })
                }
            </ul>
        </div>
    );
};

export default Aboutus;