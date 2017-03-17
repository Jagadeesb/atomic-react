import React, { PropTypes } from 'react';
import styles from './Button.css';


const Button = (props) => {
  return (

    <button
      type="button"
      onClick={props.onClick}
      className={styles.primary}
    >
      {props.children}
    </button>

  );
};

Button.propTypes = {
  /**
   * onClick Function
  */
  onClick: PropTypes.func,
  /**
   * Children
  */
  children: PropTypes.string
};
export default Button;
