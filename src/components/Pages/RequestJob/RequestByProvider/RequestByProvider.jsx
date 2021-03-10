import React from 'react'
import styles from './requestByProvider.module.scss';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import ServiceCard from '../RequestByService/ServiceCard';
import Nurse from '../../../Icons/types-nurse.svg';
import Caregiver from '../../../Icons/types-caregiver.svg';

const RequestByProvider = () => {
    return(
        <section
            className={styles.requestByProvider}
        >
            <BoldText>
                You can choose just the type of your nurse
            </BoldText>
            <div
                className={styles.cardsGrid}
            >
                <ServiceCard
                    imageSrc={Nurse}
                    text={'I need a Nurse'}
                    key={'nurse'}
                    large
                />
                <ServiceCard
                    imageSrc={Caregiver}
                    text={'I need a Caregiver'}
                    key={'caregiver'}
                    large
                />
            </div>
        </section>
    )
};

export default RequestByProvider;