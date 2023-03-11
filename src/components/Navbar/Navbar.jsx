import React from 'react';
import Button from '../Button/Button';
import LogoWithSectionName from '../LogoWithSectionName/LogoWithSectionName';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles['container']}>
            <LogoWithSectionName />
            <Button btnText="download app" />
        </div>
    );
}

export default Navbar;
