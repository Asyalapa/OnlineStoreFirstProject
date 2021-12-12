import React from 'react';
import '../styles/App.css'
import {PRODUCT_ROUTE} from "../utils/consts";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    return (
        <div className="shop__card-items"
             onClick={() => navigate(PRODUCT_ROUTE + `/${product.id}`)}>
            <div className="shop__card-item">
                <img className="shop__item-picture" src={''} alt={''}/>
                <div className="">
                    <h3>Заголовок</h3>
                    <div>
                        <div>{product.rating}</div>
                    </div>
                </div>
                <div>{product.name}</div>
            </div>
        </div>
    );
};

export default ProductCard;