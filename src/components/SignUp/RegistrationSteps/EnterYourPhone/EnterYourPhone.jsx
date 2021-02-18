import React from 'react';
import styles from '../registrationSteps.module.scss';
import Logo from '../../../Icons/background.svg';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import PhoneNumberField from '../../../ReusableFields/PhoneNumberField';
import Button from '../../../UiKitComponents/Button';
import * as PropTypes from 'prop-types';


const EnterYourPhone = ({ setRegistrationStep }) => {

    const handleSubmit = () => {
        setRegistrationStep(1)
    };

    return (
        <div className={styles.registrationBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Sign up to Flexxi</BoldText>
            <br/>
            <p> Provide your phone number </p>
            <PhoneNumberField />
            <br />
            <Button
                primary
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    )
};

EnterYourPhone.propTypes = {
    setRegistrationStep: PropTypes.func
};

export default EnterYourPhone;
