import React, { useState } from 'react';
import BoldText from '../../../../UiKitComponents/BoldText/BoldText';
import LoginTypeRadio from '../../LoginTypeRadio';
import Input from '../../../../UiKitComponents/Input';
import LoginByPhoneNumber from '../LoginByPhoneNumber';
import Logo from '../../../../Icons/background.svg';

const SignInFirstPage = ( { phoneNumberObj }) => {

    const [ signInBy, setSignInBy ] = useState('number');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

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
                    signInBy === 'number' ?
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
                        : <LoginByPhoneNumber phoneNumberObj={phoneNumberObj} />
                }

                Forgot Password
            </>
        )
};

export default SignInFirstPage