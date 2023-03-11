import React from 'react';
import styles from './Logo.module.css';

function Logo() {
    return (
        <div className={`${styles['logo-text']}`}>
            <img
                src={require('../../assets/logo-image.png')}
                alt="logo"
                height={24}
                width={24}
            />
            <span>Finance App</span>
        </div>
    );
}

export default Logo;
