import React from 'react';
import styles from './signIn.module.scss';
import SignInSteps from './SignInSteps/SignInSteps';
import Banner from '../Banner';

const SignIn = () => {
    return(
        <div
            className={styles.wrapper}
        >
            <Banner />
            <SignInSteps />
        </div>
    )
};

export default SignIn;