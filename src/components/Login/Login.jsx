import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { validateAll } from 'indicative/validator';
import PropTypes from 'prop-types';
import ErrorNotification from './ErrorNotification';

import 'react-toastify/dist/ReactToastify.css';
import css from './Login.module.css';

const superUser = {
  email: 'nikita@gmail.com',
  password: '123456789',
};

const helpMessage = {
  help: 'Щоб зайти введіть: email - nikita@gmail.com  | password - 123456789',
};

const rules = {
  email: 'required|email',
  password: 'required|string|min:8',
};

const messages = {
  'email.required': 'Емейл є обовязковим для заповнення',
  'email.email': 'Емейл не правельний',
  'password.required': 'Введіть правельний пароль',
  'password.min': 'Пароль має мати більше 8 символів',
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
        console.log('success: ', data.password);
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
    if (superUser.email !== email || superUser.password !== password) {
      toast.error(helpMessage.help);
      return;
    }
    this.props.handleSignUp({ ...this.state });
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
        <ToastContainer autoClose={6500} position="bottom-right" />
      </div>
    );
  }
}

Login.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Login;
