import React from 'react';
import '../styles/App.css'
import {PRODUCT_ROUTE} from "../utils/consts";
import { useNavigate } from 'react-router-dom';
import picture from '../img/111.png'

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    return (
        <div className="shop__card-items"
             style={{backgroundImage: `url(${picture})`}}
             onClick={() => navigate(PRODUCT_ROUTE + `/${product.id}`)}>
            <div className="shop__card-item">
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