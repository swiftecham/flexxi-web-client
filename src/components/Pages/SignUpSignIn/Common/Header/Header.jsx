import React from 'react';
import ButtonDropDown from '../../../../UiKitComponents/ButtonDropDown/ButtonDropDown';
import styles from './header.module.scss';
import Button from '../../../../UiKitComponents/Button';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
    const { pathname } = location;

    const handleClick = () => {

    };

    return(
        <div className={styles.headerWrapper}>
            <ButtonDropDown />
            <div>
                <span>
                    {pathname=== '/signup' ? 'You have already account' : 'Don’t have an account?'}
                </span>
                <Link to={pathname=== '/signup' ? '/signin' : '/signup'}>
                    <Button
                        onClick={handleClick}
                    >
                        {pathname=== '/signup' ? 'Login' : 'Sign up'}
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default withRouter(Header);