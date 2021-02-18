import React from 'react';
import styles from '../registrationSteps.module.scss';
import Logo from '../../../Icons/background.svg';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import PhoneNumberField from '../../../ReusableFields/PhoneNumberField';
import Button from '../../../UiKitComponents/Button';
import * as PropTypes from 'prop-types';
import ConfirmCodeField from '../../../ReusableFields/ConfirmCodeField';


const EnterCode = ({ setRegistrationStep }) => {

    const handleSubmit = () => {
        setRegistrationStep(2)
    };

    return (
        <div className={styles.registrationBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> +374 55 101134</BoldText>
            <br/>
            <p> Please fill in the 6-digit code you just received from us via sms. </p>
            <ConfirmCodeField />
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
