import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    imageSrc?: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ children, imageSrc, title }) => {
    return (
        <div className={styles.card} style={{ width: '18rem' }}>
            {imageSrc && <img src={imageSrc} className={styles.cardImg} alt="Card image cap" />}
            <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{title}</h5>
                <div className={styles.cardContent}>{children}</div>
                <a href="#" className={styles.btnPrimary}>Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;