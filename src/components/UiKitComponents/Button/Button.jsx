import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './button.module.scss';
import cx from 'classnames';

const Button = ({ children, primary, text , large, disabled, ...props }) => {
    return(
        <button
            className={cx(styles.button, {
                [styles.primary] : primary,
                [styles.text] : text,
                [styles.large] : large,
                [styles.disabled] : disabled,
            })}
            {...props}
        >
             {children}
        </button>
    )
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Button;