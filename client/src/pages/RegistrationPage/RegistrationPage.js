import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import RegistrationForm
  from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';

import CONSTANTS from '../../constants';
import faq from './faq.json';
import FaqList from '../../components/ArticlesComponents/FaqList';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';


const RegistrationPage = (props) => {

  const dispatch = useDispatch();
  const clearError = bindActionCreators(clearErrorSignUpAndLogin, dispatch);

  clearError();

  const changeRoute = () => {
    props.history.replace('/');
  };

  return (
    <div className={ styles.signUpPage }>
      <div className={ styles.signUpContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` }/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/login'
                  style={ {textDecoration: 'none'} }><span>Login</span></Link>
          </div>
        </div>
        <div className={ styles.signUpFormContainer }>
        <div className={ styles.headerFormContainer }>
          <h2>
            CREATE AN ACCOUNT
          </h2>
          <h4>
            We always keep your name and email address private.
          </h4>
        </div>
        <RegistrationForm changeRoute={ changeRoute }/>
        </div>
      </div>
      <div className={ styles.footer }>
        <FaqList faq={faq} classes={{
              articlesMainContainer: styles.articlesMainContainer,
              ColumnContainer: styles.ColumnContainer,
              headerArticle: styles.headerArticle,
              article: styles.article,
        }} />
      </div>
    </div>
  );
};

export default RegistrationPage;