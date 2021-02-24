import React from 'react'
import styles from './pickList.module.scss';
import OutsideClickHandler from 'react-outside-click-handler';
const PickList  = ( { options, onClose, onChange} ) => {

    const handleClick = (e, key, code) => {
        e.stopPropagation();
        onChange(key, code);
        onClose();
    };
    return(
        <OutsideClickHandler
            onOutsideClick={onClose}
        >
            <div className={styles.pickList}>
                {
                    options.map((option) => {
                        return(
                            <div onClick={e => handleClick(e, option.key, option.callingCode)} key={option.key}>
                                <img src={option.flag}/> <span>{option.name} </span>
                            </div>
                        )
                    })
                }
            </div>
        </OutsideClickHandler>
       )
};


export default PickList;