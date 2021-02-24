import React from 'react';
import styles from './boldText.module.scss';

const BoldText = (props) => {
    return(
        <b className={styles.boldText}>{props.children}</b>
    )
};

export default BoldText