import React from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard({ image, alt, name, description, style }) {
    return (
        <div className={styles['container']} style={style || {}}>
            <img src={image} alt={alt} height={51} width={51} />
            <div className={styles['container-text']}>
                <p>{name}</p>
                <h3>{description}</h3>
            </div>
        </div>
    );
}

export default ProfileCard;
