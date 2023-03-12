import React from 'react';
import styles from './Button.module.css';

function Button({ btnText = '', onClick, style = {} }) {
    return (
        <button
            onClick={onClick}
            className={styles['button']}
            style={style || {}}
        >
            {btnText}
        </button>
    );
}

export default Button;
