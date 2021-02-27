import React, { useState } from 'react';
import styles from '../resetPasswordSteps.module.scss'
import Logo from '../../../../Icons/background.svg';
import BoldText from '../../../../UiKitComponents/BoldText/BoldText';
import Input from '../../../../UiKitComponents/Input';
import Button from '../../../../UiKitComponents/Button';
import { Link } from 'react-router-dom';

const EnterEmail  = ( { email, setEmail, handleSubmitEmail }) => {


    const handleEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    };

    return (
        <div className={styles.resetPasswordBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Forgot password</BoldText>
            <p>Enter your email and we’ll send you a verification code to your email address.</p>
            <Input
                placeholder={'Email'}
                onChange={handleEmailChange}
                value={email}
                name={'email'}
            />
            <Button
                primary
                onClick={handleSubmitEmail}
            >
                Reset Password
            </Button>
            <Link to={'/signin'}> Back </Link>
        </div>
    )
};

export default EnterEmail;