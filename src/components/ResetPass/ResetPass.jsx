import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import css from './ResetPass.module.css';

const ResetPass = ({ handleBackArrow }) => {
  return (
    <div className={css.resetPass}>
      <button className={css.btnArrow} type="button" onClick={handleBackArrow}>
        <FontAwesomeIcon className={css.arrow} icon={faArrowLeft} />
      </button>

      <h2 className={css.title}>Forgot password?</h2>
      <input
        className={css.input}
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        autoFocus
      />

      <button className={css.resetBtn} type="submit">
        Send me instruction
      </button>
    </div>
  );
};

ResetPass.propTypes = {
  handleBackArrow: PropTypes.func.isRequired,
};

export default ResetPass;
