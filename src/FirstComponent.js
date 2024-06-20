import React from 'react';
import styles from './FirstComponent.module.css';

const FirstComponent = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>This is the First Component</p>
        </div>
    );
};

export default FirstComponent;