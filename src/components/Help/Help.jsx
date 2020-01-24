import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircle } from '@fortawesome/free-solid-svg-icons';

import css from './Help.module.css';

const Help = () => {
  return (
    <div className={css.help}>
      <div className={css.wrapTitle}>
        <div className={css.wrapLogo}>
          <div className={css.line} />
          <FontAwesomeIcon className={css.circleN} icon={faCircleNotch} />
          <FontAwesomeIcon className={css.circle} icon={faCircle} />
        </div>
        <p className={css.title}>Technologies</p>
      </div>

      <p className={css.discr}>
        Get how-to help and instructions or specific features in
      </p>
      <div className={css.wrapBtn}>
        <button type="button">help center</button>
        <p>or</p>
        <button type="button">suport</button>
      </div>
    </div>
  );
};

export default Help;
