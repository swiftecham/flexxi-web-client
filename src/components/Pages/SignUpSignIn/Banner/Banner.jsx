import React from 'react';
import styles from './banner.module.scss';
import AppStore from '../../../Icons/appstore-medium.svg';
import PlayStore from '../../../Icons/playstore-medium.svg';

const Banner = () => {
    return(
        <>
            <div
                className={styles.banner}
            >
                <div
                    className={styles.bannerText}
                >
                    <span> I’m a customer </span>
                    <br/>
                    <span> Flexxi bietet eine flexible Lösung für die Beantragung von Entlastungs Pflegediensten zu Hause.  </span>
                        <img
                            src={AppStore}
                        />
                        <img
                            src={PlayStore}
                        />
                </div>
            </div>
        </>
    )
};

export default Banner;
