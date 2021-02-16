import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './boldText.module.scss';

const BoldText = (props) => {
    return(
        <b className={styles.boldText}>{props.children}</b>
    )
};

BoldText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default BoldText