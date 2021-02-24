import React from 'react'
import styles from './signup.module.scss'
import RegistrationSteps from './RegistrationSteps/RegistrationSteps';

const SignUp = () => {
    return(
        <div
            className={styles.wrapper}
        >
            <div className={styles.image}> Img </div>
            <RegistrationSteps />
        </div>
    );
};

export default SignUp;