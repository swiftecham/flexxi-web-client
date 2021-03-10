import React from 'react';
import styles from './serviceCard.module.scss';
import cx from 'classnames';

const ServiceCard = ( { imageSrc, text, large } ) => {
    return(
        <button
            className={cx(styles.serviceCard, {[styles.largeCard]: large})}
        >
          <div>
              <img src={imageSrc}/>
          </div>
            <span>{text}</span>
        </button>
    )
};

export default ServiceCard;