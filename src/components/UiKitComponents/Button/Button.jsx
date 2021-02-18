import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './button.module.scss';
import cx from 'classnames';

const Button = ({ children, primary, ...props }) => {
    return(
        <button
            className={cx(styles.button, {[styles.primary] : primary})}
            {...props}
        >
             {children}
        </button>
    )
};

Button.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Button;