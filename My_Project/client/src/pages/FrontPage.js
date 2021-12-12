import React from 'react';
import '../styles/App.css'

const FrontPage = () => {
    return (
        <div>
             <section className="main__section">
                    <h2 className="main__title">Компания IDEAL&nbsp;матрас</h2>
                    <article className="main__article">Интернет&nbsp;&mdash; магазин IDEAL представляет вашему
                                    вниманию широкий ассортимент матрасов для комфортного сна. Ведь как известно,
                                    хороший сон&nbsp;&mdash; залог крепкого здоровья. А&nbsp;значит, к&nbsp;покупке
                                    матраса Вашей мечты стоит подойти со&nbsp;всей серьезностью.
                    </article>
                    <p className="main__article">На&nbsp;нашем сайте&nbsp;Вы сможете легко найти и&nbsp;заказать
                                    аксессуары для сна любой степени жесткости и&nbsp;с&nbsp;любым наполнителем.</p>
                </section>
                <section className="main__section">
                    <h2 className="main__title">5&nbsp;причин почему&nbsp;Вы должны приобрести матрас именно
                                    у&nbsp;нас</h2>
                    <ul className="main__list">
                        <li className="main__list-item">Высокое качество</li>
                        <li className="main__list-item">Собственное производство</li>
                        <li className="main__list-item">Простой сервис подбора товаров по&nbsp;параметрам
                                    </li>
                        <li className="main__list-item">Доставка прямо до&nbsp;двери</li>
                        <li className="main__list-item">Ваша спина скажет Вам: &laquo;Спасибо!&raquo;</li>
                    </ul>
                </section>
                <section className="main__section">
                     <h2 className="main__title">Популярные категории</h2>
                     <ul className="main__list-popular">
                         <li className="main__list-item-popular">
                             <div className="main__item-box item-box-1">
                                 <p className="main-item-text">Пружинные матрасы</p>
                             </div>
                         </li>
                         <li className="main__list-item-popular">
                              <div className="main__item-box item-box-2">
                                  <p className="main-item-text">Беспружинные матрасы</p>
                              </div>
                         </li>
                         <li className="main__list-item-popular">
                             <div className="main__item-box item-box-3">
                                 <p className="main-item-text">Детские матрасы</p>
                             </div>
                         </li>
                     </ul>
                </section>
        </div>
    );
};

export default FrontPage;