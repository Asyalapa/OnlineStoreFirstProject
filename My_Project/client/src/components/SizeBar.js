import React, {useContext} from 'react';
import '../styles/App.css'
import {Context} from "../index";

const SizeBar = () => {
    const {product} = useContext(Context)
    return (
        <ul className="shop__size">
            {product.sizes.map(sizes =>
                <li className={'shop__product-size-item'}
                    active={sizes.id === product.selectedSizes.id}
                    onClick={() => product.setSelectedSizes(sizes)}
                    key={sizes.id}>
                    {sizes.name}
                </li>
            )}
        </ul>
    );
};

export default SizeBar;