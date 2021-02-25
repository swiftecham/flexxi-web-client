import React, { useState } from 'react';
import Header from '../../SignUp/RegistrationSteps/Header';
import styles from './signInSteps.module.scss';
import Button from '../../../UiKitComponents/Button';
import SignInFirstPage from './SignInFIrstPage';
import EnterCode from '../../Common/EnterCode';

const SignInSteps = () => {

    const [ verifyPinStep, setVerifyPinStep ] = useState(false);

    const phoneNumberObj =  {
        countryCode: 'AM',
        callingCode: '374',
        number: ''
    };

    const handleClick = () => {

    };

    return(
        <div className={styles.signInSteps}>
            <Header />
            <div className={styles.signInBody}>
                {
                    !verifyPinStep ?
                        <>
                            <SignInFirstPage
                                phoneNumberObj={phoneNumberObj}
                            />
                            <Button
                                primary
                                onClick={handleClick}
                            >
                                Login
                            </Button>
                        </>
                        : <EnterCode />
                }
            </div>
        </div>
    )
};

export default SignInSteps;