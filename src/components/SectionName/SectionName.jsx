import React from 'react';
import styles from './SectionName.module.css';

function SectionName() {
    return (
        <div className={styles['container']}>
            <a className={styles['text-style']} href="#demo">
                Demo
            </a>
            <a className={styles['text-style']} href="#about">
                About
            </a>
            <a className={styles['text-style']} href="#blog">
                Blog
            </a>
            <a className={styles['text-style']} href="#pages">
                Pages
            </a>
            <a className={styles['text-style']} href="#contact">
                Contact
            </a>
        </div>
    );
}

export default SectionName;
