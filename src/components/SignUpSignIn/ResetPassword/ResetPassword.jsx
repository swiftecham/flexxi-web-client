import React from 'react'
import styles from './resetPassword.module.scss'
import ResetPasswordSteps from './ResetPasswordSteps/ResetPasswordSteps';

const ResetPassword = () => {
    return(
        <div
            className={styles.wrapper}
        >
            <div className={styles.image}> Img </div>
            <ResetPasswordSteps />
        </div>
    );
};

export default ResetPassword;