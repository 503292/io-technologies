import React from 'react';

import css from './ChooseProject.module.css';

const ChooseProject = () => {
  return (
    <div className={css.choose}>
      <div className={css.title}>
        <span>Hi,</span> Nikita!
      </div>
      <div className={css.descr}>Please choose your project.</div>

      <select className={css.select} name="select" size="4">
        <option value="proj1">Flirchi</option>
        <option value="proj2">io</option>
        <option value="proj3">company name</option>
        <option value="proj4">facenews.com</option>
        <option value="proj5">todo list</option>
        <option value="proj6">karnavalnews.com</option>
      </select>
    </div>
  );
};

export default ChooseProject;
