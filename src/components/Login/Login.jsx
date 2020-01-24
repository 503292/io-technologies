import React, { Component } from 'react';

import { validateAll } from 'indicative/validator';
import PropTypes from 'prop-types';
import ErrorNotification from './ErrorNotification';

import css from './Login.module.css';

const rules = {
  email: 'required|email',
  password: 'required|string|min:8',
};

const messages = {
  'email.required': 'Enter a valid email address.',
  'email.email': 'Email is invalid',
  'password.required': 'Enter a valid password.',
  'password.min': 'Password must be at least 8 characters long',
};

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: null,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();

    validateAll({ email, password }, rules, messages)
      .then(data => {
        console.log('success: ', data);

        this.props.handleSignUp({ ...this.state });
      })
      .catch(errors => {
        const formattedErrors = {};

        errors.forEach(error => {
          formattedErrors[error.field] = error.message;
        });

        this.setState({
          errors: formattedErrors,
        });
      });
  };

  render() {
    const { handleReset } = this.props;
    const { email, password, errors } = this.state;

    return (
      <div className={css.login}>
        <h2 className={css.title}>Welcome back</h2>
        <p className={css.descr}>Sing in to IO Technologies.</p>

        <form
          onSubmit={this.handleSubmit}
          className={css.wrapInput}
          type="submit"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={email}
            onChange={this.handleChange}
            autoFocus
          />
          {errors && <ErrorNotification label={errors.email} />}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={this.handleChange}
          />
          {errors && <ErrorNotification label={errors.password} />}
          <button className={css.loginBtn} type="submit">
            Log in ➜
          </button>
        </form>

        <p className={css.reset}>Forgot your password?</p>
        <button className={css.btnReset} type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Login;
