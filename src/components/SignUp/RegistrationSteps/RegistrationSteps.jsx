import React from 'react';
import Header from './Header/Header';
import styles from './registrationSteps.module.scss';
import Logo from '../../Icons/background.svg';
import BoldText from '../../UiKitComponents/BoldText/BoldText';
import PhoneNumberField from '../../ReusableFields/PhoneNumberField';
import Button from '../../UiKitComponents/Button';

const RegistrationSteps = () => {

        return(
            <div className={styles.registrationSteps}>
                <Header />
                <div className={styles.registrationBody}>
                        <img src={Logo}/>
                        <br/>
                        <BoldText> Sign up to Flexxi</BoldText>
                        <br/>
                        <p> Provide your phone number </p>
                        <PhoneNumberField />
                        <br />
                        <Button  primary>
                            Submit
                        </Button>
                </div>
                    <span className={'termsOfUse'}> Terms of use</span>

            </div>)
};

export default RegistrationSteps;