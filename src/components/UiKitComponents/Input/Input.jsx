import React from 'react';
import styles from './input.module.scss';
import cx from 'classnames';
const Input = ({placeholder, marginBottom, ...props}) => {
    return (
        <div className={cx(styles.inputWrapper, {[styles.marginBottom]: marginBottom})}>
            <input  className={styles.inputText} {...props} required/>
            <span className={styles['floating-label']}>{placeholder}</span>
        </div>
    )
};

export default Input;