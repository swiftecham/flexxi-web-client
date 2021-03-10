import React from 'react';
import styles from '../registrationSteps.module.scss';
import Logo from '../../../../../Icons/background.svg';
import BoldText from '../../../../../UiKitComponents/BoldText/BoldText';
import PhoneNumberField from '../../../../../ReusableFields/PhoneNumberField';
import Button from '../../../../../UiKitComponents/Button';
import * as PropTypes from 'prop-types';
import { submitPhoneNumber } from '../../../../../../api/LoginResetRegistrationApi';


const EnterYourPhone = ({ setPhoneNumber, setVerificationCode, setRegistrationStep, setPhoneNumberObj, phoneNumberObj }) => {


    const handleChange = (newPhoneNumberObj) => {

        setPhoneNumberObj({ ...newPhoneNumberObj });
    };

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

    return (
        <div className={styles.registrationBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Sign up to Flexxi</BoldText>
            <br/>
            <p> Provide your phone number </p>
            <PhoneNumberField onChange={handleChange} phoneNumberObj={phoneNumberObj}/>
            <br />
            <Button
                primary
                onClick={handleSubmitPhoneNumber}
            >
                Submit
            </Button>
        </div>
    )
};

EnterYourPhone.propTypes = {
    setRegistrationStep: PropTypes.func,
    setPhoneNumber: PropTypes.func
};

export default EnterYourPhone;
