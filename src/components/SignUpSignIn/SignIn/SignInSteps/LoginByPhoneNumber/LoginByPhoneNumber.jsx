import React, { useState } from 'react';
import PhoneNumberField from '../../../../ReusableFields/PhoneNumberField';

const LoginByPhoneNumber = ( { phoneNumberObj } ) => {

    return (
        <>
                <PhoneNumberField
                    phoneNumberObj={phoneNumberObj}
                />

        </>
    )
};

export default LoginByPhoneNumber