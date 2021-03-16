import React from 'react';
import styles from '../registrationSteps.module.scss';
import Logo from '../../../../../Icons/logo.svg';
import BoldText from '../../../../../UiKitComponents/BoldText/BoldText';
import PhoneNumberField from '../../../../../ReusableFields/PhoneNumberField';
import Button from '../../../../../UiKitComponents/Button';
import * as PropTypes from 'prop-types';

const EnterYourPhone = ({ setPhoneNumberObj, phoneNumberObj, handleSubmitPhoneNumber }) => {


    const handleChange = (newPhoneNumberObj) => {
        setPhoneNumberObj({ ...newPhoneNumberObj });
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
