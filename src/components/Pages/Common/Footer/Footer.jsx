import React from 'react';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import AppStore from '../../../Icons/appstore.svg';
import PlayStore from '../../../Icons/playstore.svg';

const Footer = () => {
    return(
        <footer
            className={styles.footer}
        >
            <div>
                <Link to='howitworks'>
                    How it works
                </Link>
                <Link to='termsofuse'>
                    Terms of use
                </Link>
            </div>
            <div className={styles.suffix}>
                <img src={AppStore}/>
                <img src={PlayStore}/>
                <span> © Flexxi 2020 </span>
            </div>
        </footer>
    )
};

export default Footer;