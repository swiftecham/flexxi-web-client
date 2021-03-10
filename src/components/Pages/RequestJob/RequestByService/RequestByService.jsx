import React from 'react';
import styles from './requestByService.module.scss';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import ServiceCard from './ServiceCard';
import MedServiceIcon from '../../../Icons/types-medical-services.svg';
import WakeUpAndBath from '../../../Icons/types-wake-up-and-bath-routine.svg';
import Companionship from '../../../Icons/types-companionship.svg';
import HealthMonitoring from '../../../Icons/types-health-monitoring.svg';
import PersonalHygiene from '../../../Icons/types-personal-hygiene.svg';
import HouseholdAndMeal from '../../../Icons/types-household-and-meal.svg';

const RequestByService = () => {
    return (
        <section
            className={styles.requestByService}
        >
            <BoldText>
                Choose the services you want to order
            </BoldText>
            <div
                className={styles.cardsGrid}
            >
                <ServiceCard
                    imageSrc={MedServiceIcon}
                    text={'Medical services'}
                    key={'medservice'}
                />
                <ServiceCard
                    imageSrc={WakeUpAndBath}
                    text={'Wake up and bath routine'}
                    key={'wakeupandbath'}
                />
                <ServiceCard
                    imageSrc={Companionship}
                    text={'Companionship'}
                    key={'companionship'}
                />
                <ServiceCard
                    imageSrc={HealthMonitoring}
                    text={'Health monitoring'}
                    key={'helthmonitoring'}
                />
                <ServiceCard
                    imageSrc={PersonalHygiene}
                    text={'Personal Hygiene'}
                    key={'personalhygiene'}
                />
                <ServiceCard
                    imageSrc={HouseholdAndMeal}
                    text={'Household and meal'}
                    key={'houseHoldAndMeal'}
                />
            </div>
        </section>
    )
};

export default RequestByService;