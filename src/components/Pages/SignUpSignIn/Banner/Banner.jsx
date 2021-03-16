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
                    <a
                        href='https://apps.apple.com/us/app/flexxi-client/id1503640612'
                        target='_blank'
                    >
                        <img
                            src={AppStore}
                        />
                    </a>
                    <a
                        href='https://play.google.com/store/apps/details?id=com.flexxi.client'
                        target='_blank'
                    >
                        <img
                            src={PlayStore}
                        />
                    </a>
                </div>
            </div>
        </>
    )
};

export default Banner;
