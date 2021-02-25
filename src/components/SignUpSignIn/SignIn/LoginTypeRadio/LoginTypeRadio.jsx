import React from 'react';
import RadioButton from '../../../UiKitComponents/RadioButton';
import styles from './loginTypeRadio.module.scss';

const LoginTypeRadio = ( { signInBy, setSignInBy } ) => {
    return(
        <div className={styles.loginTypeRadio}>
           <RadioButton
               label={'By Email'}
               active={signInBy==='number'}
               onClick={() => setSignInBy('number')}
           />
           <RadioButton
               label={'By Number'}
               active={signInBy!=='number'}
               onClick={() => setSignInBy('email')}
           />
        </div>
    )
};

export default LoginTypeRadio;

