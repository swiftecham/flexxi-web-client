import React from 'react';
import styles from './radioButton.module.scss';
import RadioActive from '../../Icons/radiobutton-icon-active.svg';
import Radio from '../../Icons/radiobutton-icon.svg';

const RadioButton = ( { label, active, onClick } ) => {
    return(
        <>
            <input type="radio" className={styles.radioItem} value="" name="radio" id='radio'/>
            <label className={styles.label} htmlFor="radio"> <img src={active ? RadioActive : Radio} onClick={onClick}/> {label} </label>
        </>
    )
};

export default RadioButton;