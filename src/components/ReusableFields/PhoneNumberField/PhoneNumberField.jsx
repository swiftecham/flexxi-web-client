import React from 'react';
import styles from './phoneNumberField.module.scss';
import CountryPicker from '../CountryPicker';
import countryPickerData from '../../../constants/countryPickerData';

const PhoneNumberField = () => {
    const countryObject = getCountryObject('AM');

    const countryCode = '+' + countryObject.callingCode + ' -';
    return (
        <div className={styles.phoneNumberField}>
           <CountryPicker />
            <span> {countryCode}</span>&nbsp;
            <input placeholder={'123456'}/>
        </div>
    )
};
const getCountryObject = (countryCode) => {
    return countryPickerData.find((country) => country.key === countryCode)
};

export default PhoneNumberField;