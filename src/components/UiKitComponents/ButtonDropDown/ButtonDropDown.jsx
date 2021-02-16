import React from 'react';
import styles from './buttonDropDown.module.scss';
import Arrow from '../../Icons/arrow.svg'

const ButtonDropDown = () => {

  return(
        <button className={styles.buttonStyles} onClick={() => 1}>
            EN <img src={Arrow}/>
        </button>
  )
};

export default ButtonDropDown