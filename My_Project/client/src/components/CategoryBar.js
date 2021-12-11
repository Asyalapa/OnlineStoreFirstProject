import React, {useContext} from 'react';
import '../styles/App.css'
import {Context} from "../index";

const CategoryBar = () => {
    const {product} = useContext(Context)
    return (
        <ul className={'shop__product-category'}>
            {product.categories.map(categories =>
                <li className={'shop__product-category-item'}
                    active={categories.id === product.selectedCategories.id}
                    onClick={() => product.setSelectedCategories(categories)}
                    key={categories.id}>
                    {categories.name}
                </li>
            )}
        </ul>
    );
};

export default CategoryBar;