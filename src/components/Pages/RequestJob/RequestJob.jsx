import React from 'react';
import styles from './requestJob.module.scss';
import RequestJobBody from './RequestJobBody';

const RequestJob = () => {
    return(
        <>
            <div className={styles.header}> header </div>
            <RequestJobBody/>
            <footer className={styles.footer}> footer </footer>
        </>
    )
};

export default RequestJob;