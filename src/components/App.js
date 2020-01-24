import React, { Component } from 'react';
import Help from './Help/Help';
import Login from './Login/Login';
import ResetPass from './ResetPass/ResetPass';
import ChooseProject from './ChoseProject/ChooseProject';

import css from './App.module.css';

class App extends Component {
  state = {
    isAuth: false,
    isResetPass: false,
    isLogin: true,
  };

  handleSignUp = ({ email, password }) => {
    console.log(email);
    console.log(password);
    this.setState({
      isAuth: true,
      isResetPass: false,
      isLogin: false,
    });
  };

  handleReset = () => {
    this.setState({
      isAuth: false,
      isResetPass: true,
      isLogin: false,
    });
  };

  handleBackArrow = () => {
    this.setState({
      isAuth: false,
      isResetPass: false,
      isLogin: true,
    });
  };

  // handleLogin = () => {
  //   this.setState({
  //     isAuth: true,
  //     isResetPass: false,
  //     isLogin: false,
  //   });
  // };

  render() {
    const { isAuth, isResetPass, isLogin } = this.state;

    return (
      <div className={css.wrapApp}>
        <div className={css.wrapHelp}>
          <div className={css.bgGradient} />
          <Help />
        </div>

        <div className={css.wrapInput}>
          {isLogin && (
            <Login
              handleReset={this.handleReset}
              handleSignUp={this.handleSignUp}
            />
          )}

          {isResetPass && <ResetPass handleBackArrow={this.handleBackArrow} />}

          {isAuth && (
            <ChooseProject handleChooseProject={this.handleChooseProject} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
