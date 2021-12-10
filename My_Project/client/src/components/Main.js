import React from 'react';
import '../styles/Main.css'

const Main = ({children, ...props}) => {
    return (
        <div {...props} className={'main'}>
            <div className="main__wrapper">
                {children}
            </div>
        </div>
    );
};

export default Main;