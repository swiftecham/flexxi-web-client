import React from 'react';
import styles from './confirmCodeField.module.scss';


const ConfirmCodeField = ({ verificationCode, setVerificationCode }) => {
    const handleChange = (e) => {
        if (e.currentTarget.value.length === 6 ){
            e.currentTarget.blur();
            setVerificationCode(e.currentTarget.value);
        }
    };
    return (
            <input className={styles.confirmCodeField} placeholder={'------'} maxLength="6" onChange={handleChange} value={verificationCode}/>
        )
};

export default ConfirmCodeField;