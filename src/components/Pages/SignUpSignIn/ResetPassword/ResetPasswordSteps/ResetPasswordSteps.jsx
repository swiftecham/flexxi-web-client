import React, { useState } from 'react';
import Header from '../../Common/Header';
import styles from './resetPasswordSteps.module.scss';
import EnterEmail from './EnterEmail';
import EnterCode from './EnterCode';
import SetNewPassword from './SetNewPassword/SetNewPassword';
import { submitEmail } from '../../../../../api/LoginResetRegistrationApi';

const ResetPasswordSteps = () => {
    const [ email, setEmail ] = useState('');
    const [ resetPasswordSteps, setResetPasswordSteps ] = useState(0);
    const [ token, setToken ] = useState('');

    const handleSubmitEmail = () => {
        const requestObject = {
            applicationType: 'CLIENT',
            email
        };

        submitEmail(requestObject)
            .then(() => setResetPasswordSteps(1));
    };

    return (
        <div className={styles.resetPasswordSteps}>
            <Header />
            {resetPasswordSteps === 0 ? <EnterEmail email={email} setEmail={setEmail} handleSubmitEmail={handleSubmitEmail}/> : []}
            {resetPasswordSteps === 1 ? <EnterCode handleSubmitEmail={handleSubmitEmail} email={email} setResetPasswordSteps={setResetPasswordSteps} setToken={setToken}/> : []}
            {resetPasswordSteps === 2 ? <SetNewPassword handleSubmitEmail={handleSubmitEmail} token={token}/> : []}
        </div>
    )
};

export default ResetPasswordSteps;