import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActionLogin, clearAuth, } from '../../actions/actionCreator';
import styles from './LoginForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import Error from '../../components/Error/Error';
import { bindActionCreators } from 'redux';

const LoginForm = (props) => {

  const {handleSubmit, submitting } = props;

  const { isFetching, error } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const login = bindActionCreators(authActionLogin, dispatch);
  const authClear = bindActionCreators(clearAuth, dispatch);
  


  const clickSubmit = (values) => {
    login(values);
  };

  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    notValid: styles.notValid,
    valid: styles.valid,
  };

  return (
    <form onSubmit={ handleSubmit(clickSubmit) }>
      { error && <Error data={ error.data } status={ error.status }
                      clearError={ authClear }/> }
      <Field
        name='email'
        classes={ formInputClasses }
        component={ FormInput }
        type='text'
        label='Email Address'
      />
      <Field
        name='password'
        classes={ formInputClasses }
        component={ FormInput }
        type='password'
        label='password'
      />
      <button type='submit' disabled={ submitting }
              className={ styles.submitContainer }>
        <span className={ styles.inscription }>{ isFetching
          ? 'Submitting...'
          : 'LOGIN' }</span>
      </button>
    </form>
  );
  
}

export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.LoginSchem),
})(LoginForm);