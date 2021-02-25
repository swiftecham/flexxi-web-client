import React from 'react'
import styles from './resetPassword.module.scss'
import ResetPasswordSteps from './ResetPasswordSteps/ResetPasswordSteps';
import Banner from '../Banner';

const ResetPassword = () => {
    return(
        <div
            className={styles.wrapper}
        >
            <Banner />
            <ResetPasswordSteps />
        </div>
    );
};

export default ResetPassword;