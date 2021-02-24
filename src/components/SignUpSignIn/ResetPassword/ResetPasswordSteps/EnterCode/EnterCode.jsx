import React, { useState } from 'react';
import styles from '../resetPasswordSteps.module.scss';
import Logo from '../../../../Icons/background.svg';
import BoldText from '../../../../UiKitComponents/BoldText/BoldText';
import ConfirmCodeField from '../../../../ReusableFields/ConfirmCodeField';
import Button from '../../../../UiKitComponents/Button';
import { verifyForgotPassword } from '../../../../../api/LoginResetRegistrationApi';

const EnterCode = ( { handleSubmitEmail, email, setResetPasswordSteps, setToken } ) => {
    const [ verificationCode, setVerificationCode ] = useState('');

    const verifyCode = () => {
        const requestObj = {
            applicationType: 'CLIENT',
            code: verificationCode,
            email,
        };
        verifyForgotPassword(requestObj)
            .then((data) => {
                setToken(data.token);
                setResetPasswordSteps(2)
            })
    };

    return(
        <div className={styles.resetPasswordBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Forgot password</BoldText>
            <p> You are going to receive an email with the 6-digit password. </p>
            <ConfirmCodeField
                setVerificationCode={setVerificationCode}
                verificationCode={verificationCode}
            />
            <Button
                text
                onClick={handleSubmitEmail}
            >
                Resend email
            </Button>
            <Button
                primary
                onClick={verifyCode}
            >
                Next
            </Button>
        </div>
    )
};

export default EnterCode