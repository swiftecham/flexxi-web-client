import React from 'react';
import countryPickerData from '../../../constants/countryPickerData';
import styles from './countryPicker.module.scss';

const CountryPicker = () => {
    const countryObject = getCountryObject('AM');
    return(
        <div className={styles.countryPicker}>
            <img src={countryObject.flag}/>
        </div>
    )
};

const getCountryObject = (countryCode) => {
      return countryPickerData.find((country) => country.key === countryCode)
};

export default CountryPicker;