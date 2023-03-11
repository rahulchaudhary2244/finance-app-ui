import React from 'react';
import Logo from '../Logo/Logo';
import SectionName from '../SectionName/SectionName';
import styles from './LogoWithSectionName.module.css';

function LogoWithSectionName() {
    return (
        <div className={styles['container']}>
            <Logo />
            <SectionName />
        </div>
    );
}

export default LogoWithSectionName;
