import React from 'react';
import ButtonDropDown from '../../../UiKitComponents/ButtonDropDown/ButtonDropDown';
import styles from './header.module.scss';
import Button from '../../../UiKitComponents/Button';

const Header = () => {
    return(
        <div className={styles.headerWrapper}>
            <ButtonDropDown />
            <div>
                <span>
                    You have already account?
                </span>
                <Button>
                    Login
                </Button>
            </div>
        </div>
    )
};

export default Header;