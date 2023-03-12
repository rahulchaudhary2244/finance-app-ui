import React from 'react';
import styles from './Socials.module.css';

function Socials({ links }) {
    return (
        <div className={styles['container']}>
            {links.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={item.image}
                        alt={item.alt}
                        height={item.height}
                        width={item.width}
                    />
                </a>
            ))}
        </div>
    );
}

export default Socials;
