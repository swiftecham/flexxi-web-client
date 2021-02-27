import React, { useState } from 'react';
import Header from '../../Common/Header';
import styles from './signInSteps.module.scss';
import SignInFirstPage from './SignInFIrstPage';
import EnterCode from '../../Common/EnterCode';

const SignInSteps = () => {

    const [ verifyPinStep, setVerifyPinStep ] = useState(false);
    const [ verificationCode, setVerificationCode ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const phoneNumberInitialStat =  {
        countryCode: 'AM',
        callingCode: '374',
        number: ''
    };

    const [ phoneNumberObj, setPhoneNumberObj ] = useState(phoneNumberInitialStat);

    const handleChangePhoneNumber = (newPhoneNumberObj) => {
        setPhoneNumberObj({ ...newPhoneNumberObj });
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
                                setEmail={setEmail}
                                email={email}
                                setPassword={setPassword}
                                password={password}
                                handleChangePhoneNumber={handleChangePhoneNumber}
                                setVerifyPinStep={setVerifyPinStep}
                                setVerificationCode={setVerificationCode}
                            />
                        </>
                        : <EnterCode
                            setVerificationCode={setVerificationCode}
                            verificationCode={verificationCode}
                            phoneNumber={phoneNumberObj.callingCode + ' ' + phoneNumberObj.number}
                        />
                }
            </div>
        </div>
    )
};

export default SignInSteps;