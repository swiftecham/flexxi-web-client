import React, { useState } from 'react';
import styles from '../registrationSteps.module.scss';
import Logo from '../../../../../Icons/logo.svg';
import BoldText from '../../../../../UiKitComponents/BoldText/BoldText';
import Button from '../../../../../UiKitComponents/Button';
import Input from '../../../../../UiKitComponents/Input';
import { signInWithAuthToken, signUpUser } from '../../../../../../api/LoginResetRegistrationApi';
import { useHistory } from 'react-router-dom';

const EnterYourDetails = ({ phoneNumberObj : { countryCode , callingCode, number } }) => {

    const [ fullName, setFullName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    const handleSubmit = () => {
        const requestObj = {
            countryCode: countryCode,
            email,
            fullName,
            language: 'EN',
            mobile : callingCode + ' ' + number,
            password,
            referralId : null
        };

        signUpUser(requestObj)
            .then((data) => {
                signInWithAuthToken({
                    authToken: data.authToken
                }).then((data) => {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    history.push("/requestjob");
                })
            });
    };

    const handleNameChange = (e) => {
        setFullName(e.currentTarget.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.currentTarget.value);
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
                onChange={handleNameChange}
                value={fullName}
                name={'name'}
            />
            <Input
                placeholder={'Email'}
                marginBottom
                onChange={handleEmailChange}
                value={email}
                name={'email'}
            />
            <Input
                placeholder={'Password'}
                onChange={handlePasswordChange}
                value={password}
                type="password"
                name={'password'}
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