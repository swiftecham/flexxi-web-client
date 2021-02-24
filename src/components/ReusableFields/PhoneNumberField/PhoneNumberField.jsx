import React, { useState } from 'react';
import styles from './phoneNumberField.module.scss';
import CountryPicker from '../CountryPicker';
import countryPickerData from '../../../constants/countryPickerData';

const PhoneNumberField = ( { setPhoneNumber, phoneNumberObj, onChange } ) => {


    const handleChangeInputValue = (e) => {
        const newPhoneNumberObj = {
            ...phoneNumberObj,
            number: e.currentTarget.value
        };
        onChange(newPhoneNumberObj);
    };

    const handleChangeCountryCode = (countryCode, callingCode) => {
        const newPhoneNumberObj = {
            ...phoneNumberObj,
            countryCode : countryCode,
            callingCode: callingCode
        };
        onChange(newPhoneNumberObj);
    };

    return (
        <div className={styles.phoneNumberField}>
           <CountryPicker
               countryCode={phoneNumberObj.countryCode}
               handleChangeCountryCode={handleChangeCountryCode}
           />
            <span> + {phoneNumberObj.callingCode} - </span>&nbsp;
            <input placeholder={'123456'} onChange={handleChangeInputValue}/>
        </div>
    )
};
const getCountryObject = (countryKey) => {
    return countryPickerData.find((country) => country.key === countryKey)
};

export default PhoneNumberField;