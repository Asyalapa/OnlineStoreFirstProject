import React from 'react';
import '../styles/Modal.css'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : "modal__content"}
                 onClick={(event) => event.stopPropagation()}>
                <h3 className='modal__title'>{children[0]}</h3>
                <p className='modal__text'>{children[1]}</p>
            </div>
        </div>
    );
};

export default Modal;