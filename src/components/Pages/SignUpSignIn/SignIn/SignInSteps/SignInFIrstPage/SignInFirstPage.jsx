import React, { useState } from 'react';
import BoldText from '../../../../../UiKitComponents/BoldText/BoldText';
import LoginTypeRadio from '../../LoginTypeRadio';
import Input from '../../../../../UiKitComponents/Input';
import Logo from '../../../../../Icons/logo.svg';
import Button from '../../../../../UiKitComponents/Button';
import { signInByEmail, submitPhoneNumber } from '../../../../../../api/LoginResetRegistrationApi';
import PhoneNumberField from '../../../../../ReusableFields/PhoneNumberField';
import { Link } from 'react-router-dom';

const SignInFirstPage = ( { phoneNumberObj, email, setEmail, password, setPassword, handleChangePhoneNumber, setVerifyPinStep, setVerificationCode}) => {

    const [ signInBy, setSignInBy ] = useState('email');

    const loginByEmail = () => {
        const requestObj = {
            email,
            password
        };

        signInByEmail(requestObj)
            .then((data) => console.log(data));
    };

    const loginByPhone = () => {
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
                setVerifyPinStep(true)
            });
    };

    const handleClick = () => {
        if (signInBy === 'email'){
            loginByEmail();
        }else loginByPhone();
    };


    return(
        <>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Sign in to Flexxi </BoldText>
            <LoginTypeRadio
                signInBy={signInBy}
                setSignInBy={setSignInBy}
            />
            {
                signInBy === 'email' ?
                    <>
                        <Input
                            placeholder={'Email'}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            value={email}
                        />
                        <Input
                            placeholder={'Password'}
                            type='password'
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            value={password}
                        />
                    </>
                    : <PhoneNumberField phoneNumberObj={phoneNumberObj} onChange={handleChangePhoneNumber}/>
            }

            <Link to='/resetpassword'>
                <div>Forgot Password</div>
            </Link>
            <Button
                primary
                onClick={handleClick}
            >
                Login
            </Button>
        </>
    )
};

export default SignInFirstPage