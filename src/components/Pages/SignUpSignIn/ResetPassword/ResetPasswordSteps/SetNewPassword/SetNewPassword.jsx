import React, { useState } from 'react';
import styles from '../resetPasswordSteps.module.scss';
import Logo from '../../../../../Icons/logo.svg';
import BoldText from '../../../../../UiKitComponents/BoldText/BoldText';
import Input from '../../../../../UiKitComponents/Input';
import Button from '../../../../../UiKitComponents/Button';
import { changePassword } from '../../../../../../api/LoginResetRegistrationApi';
import { useHistory } from 'react-router-dom';

const SetNewPassword = ( { token } ) => {

    const [ newPassword, setNewPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const history = useHistory();

    const handlePasswordChange = () => {

        const requestObj = {
            applicationType: "CLIENT",
            password: newPassword,
            token
        };

        if (newPassword === confirmPassword) {
            changePassword(requestObj)
                .then(() => {
                    history.push("/signin");
                })
        }
    };

    return(
        <div className={styles.resetPasswordBody}>
            <img src={Logo} alt={'Flexxi'}/>
            <br/>
            <BoldText> Reset password</BoldText>
            <p>Set new password</p>
            <Input placeholder='New password' marginBottom type='password' onChange={(e) => setNewPassword(e.currentTarget.value)} value={newPassword}/>
            <Input placeholder='Confirm new password' type='password' onChange={(e) => setConfirmPassword(e.currentTarget.value)} value={confirmPassword}/>
            <Button
                primary
                onClick={handlePasswordChange}
            >
                Submit
            </Button>
        </div>
    )
};

export default SetNewPassword