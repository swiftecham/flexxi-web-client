import React from 'react';
import styles from './serviceCard.module.scss';
import cx from 'classnames';

const ServiceCard = ( { imageSrc, text, large, serviceKey, onClick, selected} ) => {
    return(
        <button
            className={cx(styles.serviceCard, {[styles.largeCard]: large, [styles.selected]: selected})}
            onClick={() => onClick(serviceKey)}
        >
          <div>
              <img src={imageSrc}/>
          </div>
            <span>{text}</span>
        </button>
    )
};

export default ServiceCard;