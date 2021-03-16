import React, { useState } from 'react';
import styles from '../../SignUp/SignUpSteps/registrationSteps.module.scss';
import Logo from '../../../../Icons/logo.svg';
import BoldText from '../../../../UiKitComponents/BoldText/BoldText';
import Button from '../../../../UiKitComponents/Button';
import * as PropTypes from 'prop-types';
import ConfirmCodeField from '../../../../ReusableFields/ConfirmCodeField';
import { signInWithAuthToken, verifyPhoneNumber } from '../../../../../api/LoginResetRegistrationApi';
import { useHistory } from 'react-router-dom';
import Countdown from "react-countdown";

const EnterCode = ({ setRegistrationStep, setVerificationCode,  verificationCode, phoneNumber, handleSubmitPhoneNumber }) => {
    const history = useHistory();

    const [ resendIsAvailable, setResendIsAvailable ] = useState(false);

    const renderer = ({ minutes, seconds }) => {
        return (
            <p> You can request new code in {minutes}:{seconds} </p>
        );
    };

    const handleSubmit = () => {
       const requestObj = {
            mobile: phoneNumber,
            smsCode: verificationCode
        };
        verifyPhoneNumber(requestObj)
            .then(data => {
                if (setRegistrationStep) {
                    setRegistrationStep(2)
                }else {
                    signInWithAuthToken({
                        authToken: data.authToken
                    }).then((data) => {
                        localStorage.setItem('accessToken', data.accessToken);
                        localStorage.setItem('refreshToken', data.refreshToken);
                        history.push("/requestjob");
                    })
                }
            });
    };

    return (
        <div className={styles.registrationBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText>  {'+' + phoneNumber } </BoldText>
            <br/>
            <p> Please fill in the 6-digit code you just received from us via sms. </p>
            <ConfirmCodeField verificationCode={verificationCode} setVerificationCode={setVerificationCode}/>
            {resendIsAvailable ?
                <Button text onClick={() => {
                    handleSubmitPhoneNumber();
                    setResendIsAvailable(false)
                }}>Resend code</Button> :
                <Countdown  date={Date.now() + 90000} renderer={renderer} onComplete={() =>setResendIsAvailable(true)}/>
            }
            <br />
            <Button
                primary
                onClick={handleSubmit}
            >
                Next
            </Button>
        </div>
    )
};

EnterCode.propTypes = {
    setRegistrationStep: PropTypes.func
};

export default EnterCode;
