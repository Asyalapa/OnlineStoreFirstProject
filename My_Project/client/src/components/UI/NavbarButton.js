import React from 'react';
import './NavbarButton.css'

function NavbarButton({children, ...props}) {
    return (
        <div>
            <button className="navbar__btn" {...props}>
                {children}
            </button>
        </div>
    );
}

export default NavbarButton;