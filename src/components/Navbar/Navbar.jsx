import React from 'react';
import LogoWithSectionName from '../LogoWithSectionName/LogoWithSectionName';
import styles from './Navbar.module.css';

function Navbar({ extras }) {
    return (
        <div className={styles['container']}>
            <LogoWithSectionName />
            {extras}
        </div>
    );
}

export default Navbar;
