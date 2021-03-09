import {put} from 'redux-saga/effects';
import { getUserTransactionsError, getUserTransactionsRequest, getUserTransactionsSuccess } from '../actions/actionCreator';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';
import {controller} from '../api/ws/socketController';



export  function* privateSaga(action){
    yield put({type: ACTION.GET_USER_REQUEST});
    try{
        const {data}=yield  restController.getUser();
        yield  put({type: ACTION.GET_USER_SUCCESS, data: data});
        controller.subscribe(data.id);
    }
    catch (e) {
        yield put({type: ACTION.GET_USER_ERROR, error: e.response});
    }
}


export function* notAuthorizeSaga(action){
    yield put({type: ACTION.GET_USER_REQUEST});
    try{
        const {data}=yield  restController.getUser();
        action.replace('/');
        yield  put({type: ACTION.GET_USER_SUCCESS, data: data});

    }
    catch (e) {
        yield put({type: ACTION.GET_USER_ERROR,error: e});
    }
}

export function* getUserTransactionsSaga(action){
    const {data} = action
    yield put(getUserTransactionsRequest());
    try{
        const {
            data: {
                data: transactions
            }
        } = yield restController.getUserTransactions();
        yield  put(getUserTransactionsSuccess(transactions));
    }
    catch (error) {
        yield put(getUserTransactionsError(error));
    }
}


export  function* updateUserData(action){
    try{
        const {data}=yield restController.updateUser(action.data);
        yield put({type: ACTION.UPDATE_USER_DATA_SUCCESS,data: data});
        yield put({type: ACTION.CHANGE_EDIT_MODE_ON_USER_PROFILE,data: false});
    }
    catch (e) {
        yield  put({type: ACTION.UPDATE_USER_DATA_ERROR, error: e.response});
    }
}

export function* headerRequest(){
    yield put({type: ACTION.GET_USER_REQUEST});
    try{
        const {data}=yield  restController.getUser();
        yield  put({type: ACTION.GET_USER_SUCCESS, data: data});
        controller.subscribe(data.id);
    }
    catch (e) {
        yield put({type: ACTION.GET_USER_ERROR, error: e.response});
    }
}