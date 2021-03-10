import React from 'react';
import styles from './requestJobBody.module.scss';
import RequestByService from '../RequestByService';
import RequestByProvider from '../RequestByProvider';

const RequestJobBody = () => {
    return(
        <section className={styles.body}>
            <RequestByService />
            <RequestByProvider />
        </section>
    )
};

export default RequestJobBody;