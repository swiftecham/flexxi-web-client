import React, { useState } from 'react';
import Header from './Header';
import styles from './registrationSteps.module.scss';
import EnterYourPhone from './EnterYourPhone';
import EnterCode from './EnterCode/EnterCode';
import EnterYourDetails from './EnterYourDetails';

const RegistrationSteps = () => {

        const [ registrationStep ,  setRegistrationStep ] = useState(0);

        return(
            <div className={styles.registrationSteps}>
                <Header />
                {registrationStep === 0 ? <EnterYourPhone setRegistrationStep={setRegistrationStep}/> : []}
                {registrationStep === 1 ? <EnterCode setRegistrationStep={setRegistrationStep}/> : []}
                {registrationStep === 2 ? <EnterYourDetails setRegistrationStep={setRegistrationStep}/> : []}
                <span className={'termsOfUse'} > Terms of use</span>
            </div>)
};

export default RegistrationSteps;