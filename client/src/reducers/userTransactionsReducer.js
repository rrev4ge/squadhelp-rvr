import produce from 'immer'
import ACTION from '../actions/actionTypes'

const initialState = {
    isFetching: false,
    error: null,
    transactions: [],
}

export default (state = initialState, { type, data, error }) => {
    switch (type) {

    case ACTION.GET_USER_TRANSACTIONS_REQUEST:
        return produce(state, draftState => { 
            draftState.isFetching = true;
            draftState.error = null;
        })

    case ACTION.GET_USER_TRANSACTIONS_SUCCESS:
        return produce(state, draftState => {
            draftState.isFetching = false;
            draftState.transactions = [...data];
        })

    case ACTION.GET_USER_TRANSACTIONS_ERROR:
        return produce(state, draftState => {
            draftState.isFetching = false;
            draftState.error = error;
        })

    default:
        return state
    }
}

