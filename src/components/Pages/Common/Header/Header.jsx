import React from 'react';
import styles from './header.module.scss';
import Logo from '../../../Icons/logo.svg';
import { NavLink } from 'react-router-dom';
import ButtonDropDown from '../../../UiKitComponents/ButtonDropDown/ButtonDropDown';

const Header = () => {
    return(
        <header
             className={styles.header}
        >
            <img src={Logo}/>
            <NavLink to={'requestjob'}>
                Job offers
            </NavLink>
            <NavLink to={'orders'}>
                Orders
            </NavLink>
            <ButtonDropDown />
        </header>
    )
};

export default Header;