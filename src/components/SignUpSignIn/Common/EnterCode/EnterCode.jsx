import React from 'react';
import styles from '../../SignUp/RegistrationSteps/registrationSteps.module.scss';
import Logo from '../../../Icons/background.svg';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import Button from '../../../UiKitComponents/Button';
import * as PropTypes from 'prop-types';
import ConfirmCodeField from '../../../ReusableFields/ConfirmCodeField';
import { verifyPhoneNumber } from '../../../../api/LoginResetRegistrationApi';


const EnterCode = ({ setRegistrationStep, setVerificationCode,  verificationCode, phoneNumber }) => {

    const handleSubmit = () => {
       const requestObj = {
            mobile: phoneNumber,
            smsCode: verificationCode
        };
        verifyPhoneNumber(requestObj)
            .then(data => console.log(data));
        setRegistrationStep && setRegistrationStep(2)
    };
    // TODO timer 1:30
    return (
        <div className={styles.registrationBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText>  {'+' + phoneNumber } </BoldText>
            <br/>
            <p> Please fill in the 6-digit code you just received from us via sms. </p>
            <ConfirmCodeField verificationCode={verificationCode} setVerificationCode={setVerificationCode}/>
            <p> You can request new code in 1:30 </p>
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
