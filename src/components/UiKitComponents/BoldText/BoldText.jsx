import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './boldText.module.scss';
import { string } from 'prop-types';

const BoldText = (props) => {
    return(
        <b className={styles.boldText}>{props.children}</b>
    )
};

BoldText.propTypes = {
  children: PropTypes.arrayOf(string).isRequired,
};

export default BoldText