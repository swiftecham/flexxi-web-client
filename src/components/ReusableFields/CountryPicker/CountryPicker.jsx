import React, { useState } from 'react';
import countryPickerData from '../../../constants/countryPickerData';
import styles from './countryPicker.module.scss';
import SmallArrow from '../../Icons/smallArrow.svg';
import PickList from './PickList/PickList';

const CountryPicker = ({ countryCode, handleChangeCountryCode }) => {
    const [ pickListIsOpen, setPickListIsOpen ] = useState(false);
    const countryObject = getCountryObject(countryCode);

    const handleOpenPickList = () => {
        setPickListIsOpen(true)
    };

    const handleClosePickList = () => {
        setPickListIsOpen(false)
    };

    const handleChangeCountryKey = (countryCode, callingCode) => {
        handleChangeCountryCode(countryCode, callingCode);
    };

    return(
        <div className={styles.countryPicker} onClick={handleOpenPickList}>
            <img src={countryObject.flag}/>
            <img src={SmallArrow}/>
            {pickListIsOpen && <PickList
                options={countryPickerData}
                onClose={handleClosePickList}
                onChange={handleChangeCountryKey}
            /> }
        </div>
    )
};

const getCountryObject = (countryCode) => {
      return countryPickerData.find((country) => country.key === countryCode)
};

export default CountryPicker;