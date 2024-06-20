import React from 'react';
import styles from './SecondComponent.module.css';

const SecondComponent = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>This is the Second Component</p>
        </div>
    );
};

export default SecondComponent;