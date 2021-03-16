import React from 'react'
import styles from './signup.module.scss'
import RegistrationSteps from './SignUpSteps/SignUpSteps';
import Banner from '../Banner';

const SignUp = () => {
    return(
        <div
            className={styles.wrapper}
        >
            <Banner />
            <RegistrationSteps />
        </div>
    );
};

export default SignUp;