import React, {useContext} from 'react';
import '../styles/App.css'
import ProductCard from "./ProductCard";
import {Context} from "../index";

const ProductList = () => {
    const {product} = useContext(Context)

    return (
        <div className="shop__card-list">
            {product.products.map(item =>
                <ProductCard key={item.id} product={item}/>
            )}
        </div>
    );
};

export default ProductList;