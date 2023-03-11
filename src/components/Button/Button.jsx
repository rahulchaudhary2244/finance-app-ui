import React from 'react';
import styles from './Button.module.css';

function Button({ btnText = '', onClick }) {
    return (
        <button onClick={onClick} className={styles['button']}>
            {btnText}
        </button>
    );
}

export default Button;
