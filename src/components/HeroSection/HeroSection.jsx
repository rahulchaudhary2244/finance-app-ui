import React from 'react';
import Button from '../Button/Button';
import ProfileCard from '../ProfileCard/ProfileCard';
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <section style={{ marginTop: '83px' }} className={styles['container']}>
            {HeroContent()}
            {HeroImage()}
        </section>
    );
}

function HeroContent() {
    return (
        <article className={styles['article-container']}>
            <h1>Save money fast from app.</h1>
            <h2>
                Transfer business money easily through finance app without any
                hassle. This app can help you control
            </h2>
            <Button
                style={{ marginTop: '32px', padding: '19px 25px' }}
                btnText="check our features"
            />
            <h3>
                “ Transfer business money easily through finance app without any
                hassle. This app can help you control.Transfer business money
                easily through finance ”
            </h3>
            <ProfileCard
                style={{ marginTop: '28px' }}
                image={require('../../assets/darika samak.png')}
                alt={'darika samak'}
                name={'Darika samak'}
                description={'From amazon.com'}
            />
        </article>
    );
}

function HeroImage() {
    return (
        <aside className={styles['aside-container']}>
            <span className={styles['ellipse']}></span>
            <img src={require('../../assets/hero-img.png')} alt="hero-pic" />
        </aside>
    );
}

export default HeroSection;
