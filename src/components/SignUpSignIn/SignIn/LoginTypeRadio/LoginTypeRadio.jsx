import React from 'react';
import RadioButton from '../../../UiKitComponents/RadioButton';
import styles from './loginTypeRadio.module.scss';

const LoginTypeRadio = ( { signInBy, setSignInBy } ) => {
    return(
        <div className={styles.loginTypeRadio}>
           <RadioButton
               label={'By Email'}
               active={signInBy==='email'}
               onClick={() => setSignInBy('email')}
           />
           <RadioButton
               label={'By Number'}
               active={signInBy === 'number'}
               onClick={() => setSignInBy('number')}
           />
        </div>
    )
};

export default LoginTypeRadio;

