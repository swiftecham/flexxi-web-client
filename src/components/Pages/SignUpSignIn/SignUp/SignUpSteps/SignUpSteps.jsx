import React, { useState } from 'react';
import Header from '../../Common/Header';
import styles from './registrationSteps.module.scss';
import EnterYourPhone from './EnterYourPhone';
import EnterCode from '../../Common/EnterCode/EnterCode';
import EnterYourDetails from './EnterYourDetails';
import { submitPhoneNumber } from '../../../../../api/LoginResetRegistrationApi';

const RegistrationSteps = () => {

        const initialState = {
            countryCode: 'AM',
            callingCode: '374',
            number: ''
        };
        const [ phoneNumberObj, setPhoneNumberObj ] = useState(initialState);
        const [ registrationStep ,  setRegistrationStep ] = useState(0);
        const [ phoneNumber, setPhoneNumber] = useState('');
        const [ verificationCode, setVerificationCode] = useState('');

    const handleSubmitPhoneNumber = () => {
        const requestObj = {
            countryCode: phoneNumberObj.countryCode,
            language: 'EN',
            mobile: phoneNumberObj.callingCode + ' ' + phoneNumberObj.number
        };
        submitPhoneNumber(requestObj)
            .then((content) => {
                if (content.smsCode){
                    setVerificationCode(content.smsCode);
                }
                setPhoneNumber(phoneNumberObj.callingCode + ' ' + phoneNumberObj.number);
                setRegistrationStep(1);
            });
    };
        return(
            <div className={styles.registrationSteps}>
                <Header />
                {registrationStep === 0 ? <EnterYourPhone
                    setRegistrationStep={setRegistrationStep}
                    setPhoneNumber={setPhoneNumber} s
                    setVerificationCode={setVerificationCode}
                    phoneNumberObj={phoneNumberObj}
                    setPhoneNumberObj={setPhoneNumberObj}
                    handleSubmitPhoneNumber={handleSubmitPhoneNumber}
                /> : []}
                {registrationStep === 1 ? <EnterCode
                    setRegistrationStep={setRegistrationStep}
                    verificationCode={verificationCode}
                    phoneNumber={phoneNumber}
                    handleSubmitPhoneNumber={handleSubmitPhoneNumber}
                /> : []}
                {registrationStep === 2 ? <EnterYourDetails
                    setRegistrationStep={setRegistrationStep}
                    phoneNumberObj={phoneNumberObj}
                /> : []}
                <span className={'termsOfUse'} > Terms of use</span>
            </div>)
};

export default RegistrationSteps;