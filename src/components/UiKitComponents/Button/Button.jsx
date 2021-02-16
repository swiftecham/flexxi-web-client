import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './button.module.scss';
import cx from 'classnames';

const Button = ({ children, primary }) => {
    return(
        <button
            className={cx(styles.button, {[styles.primary] : primary})}
        >
             {children}
        </button>
    )
};

Button.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Button;