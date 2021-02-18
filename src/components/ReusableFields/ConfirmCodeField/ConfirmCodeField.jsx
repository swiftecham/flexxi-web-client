import React from 'react';
import styles from './confirmCodeField.module.scss';


const ConfirmCodeField = () => {
        const handleChange = (e) => {
            if (e.currentTarget.value.length === 6 ){
                e.currentTarget.blur()
            }
        };
        return (
            <input className={styles.confirmCodeField} placeholder={'------'} maxLength="6" onChange={handleChange} />
        )
};

export default ConfirmCodeField;