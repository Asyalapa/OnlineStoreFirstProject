import React from 'react';
import '../styles/App.css'
import CategoryBar from "../components/CategoryBar";
import SizeBar from "../components/SizeBar";
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";

const Shop = () => {
    return (
        <div className={'shop_wrapper'}>
            <section className="shop__product-sizes">
                <div className="shop__sort">Сортировка</div>
                <SizeBar />
            </section>
            <CategoryBar />
            <ProductList />
        </div>
    );
};

export default Shop;