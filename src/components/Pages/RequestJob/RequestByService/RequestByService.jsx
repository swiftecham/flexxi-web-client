import React from 'react';
import styles from './requestByService.module.scss';
import BoldText from '../../../UiKitComponents/BoldText/BoldText';
import ServiceCard from '../ServiceProviderCard';
import MedServiceIcon from '../../../Icons/types-medical-services.svg';
import WakeUpAndBath from '../../../Icons/types-wake-up-and-bath-routine.svg';
import Companionship from '../../../Icons/types-companionship.svg';
import HealthMonitoring from '../../../Icons/types-health-monitoring.svg';
import PersonalHygiene from '../../../Icons/types-personal-hygiene.svg';
import HouseholdAndMeal from '../../../Icons/types-household-and-meal.svg';
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedServices } from '../../../../redux/actions/JobRequest';
import Button from '../../../UiKitComponents/Button';

const RequestByService = () => {
    const dispatch = useDispatch();
    const selectedServices = useSelector(state => state.jobRequest.selectedServices);


    const handleCardClick = (serviceKey) => {

        let newSelectedServices;
        if (selectedServices.indexOf(serviceKey) === -1){
            newSelectedServices = [...selectedServices, serviceKey]
        }else {
            newSelectedServices = [...selectedServices].filter((key) => serviceKey !== key)
        }

        dispatch(updateSelectedServices(newSelectedServices));
    };

    return (
        <section
            className={styles.requestByService}
        >
            <div
                className={styles.requestByServiceHeader}
            >
                <BoldText>
                    Choose the services you want to order
                </BoldText>
                 <Button primary large disabled={!selectedServices.length}> Create order</Button>
            </div>
            <div
                className={styles.cardsGrid}
            >
                <ServiceCard
                    imageSrc={MedServiceIcon}
                    text={'Medical services'}
                    onClick={handleCardClick}
                    serviceKey={'medservice'}
                    selected={selectedServices.indexOf('medservice') !== -1}
                />
                <ServiceCard
                    imageSrc={WakeUpAndBath}
                    text={'Wake up and bath routine'}
                    onClick={handleCardClick}
                    serviceKey={'wakeupandbath'}
                    selected={selectedServices.indexOf('wakeupandbath') !== -1}
                />
                <ServiceCard
                    imageSrc={Companionship}
                    text={'Companionship'}
                    onClick={handleCardClick}
                    serviceKey={'companionship'}
                    selected={selectedServices.indexOf('companionship') !== -1}
                />
                <ServiceCard
                    imageSrc={HealthMonitoring}
                    text={'Health monitoring'}
                    onClick={handleCardClick}
                    serviceKey={'helthmonitoring'}
                    selected={selectedServices.indexOf('helthmonitoring') !== -1}
                />
                <ServiceCard
                    imageSrc={PersonalHygiene}
                    text={'Personal Hygiene'}
                    onClick={handleCardClick}
                    serviceKey={'personalhygiene'}
                    selected={selectedServices.indexOf('personalhygiene') !== -1}
                />
                <ServiceCard
                    imageSrc={HouseholdAndMeal}
                    text={'Household and meal'}
                    onClick={handleCardClick}
                    serviceKey={'householdandmeal'}
                    selected={selectedServices.indexOf('householdandmeal') !== -1}
                />
            </div>
        </section>
    )
};

export default RequestByService;