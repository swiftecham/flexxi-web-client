import React from 'react';
import styles from '../registrationSteps.module.scss';
import Logo from '../../../Icons/background.svg';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import Button from '../../../UiKitComponents/Button';
import Input from '../../../UiKitComponents/Input';

const EnterYourDetails = ({ setRegistrationStep }) => {

    const handleSubmit = () => {
        // setRegistrationStep(3)
    };

    return (
        <div className={styles.registrationBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Sign up to Flexxi</BoldText>
            <br/>
            <p> Enter your email and password </p>
            <Input
                placeholder={'Full name'}
                marginBottom
            />
            <Input
                placeholder={'Email'}
                marginBottom
            />
            <Input
                placeholder={'Password'}
            />
           <Button
                primary
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    )
};

export default EnterYourDetails;