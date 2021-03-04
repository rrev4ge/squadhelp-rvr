import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import styles from './LoginPage.module.sass';
import CONSTANTS from '../../constants';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';

const LoginPage = (props) => {

  const dispatch = useDispatch();
  const clearError = bindActionCreators(clearErrorSignUpAndLogin, dispatch);

  clearError();
  
  const changeRoute = () => {
    props.history.replace('/');
  };

  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.loginContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` } alt="logo"/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/registration'
                  style={ {textDecoration: 'none'} }><span>Signup</span></Link>
          </div>
        </div>
        <div className={ styles.loginFormContainer }>
          <div className={ styles.loginForm }>
            <h2>LOGIN TO YOUR ACCOUNT</h2>
            <LoginForm changeRoute={ changeRoute }/>
          </div>
        </div>
      </div>
    </div>
  );

};

export default LoginPage;