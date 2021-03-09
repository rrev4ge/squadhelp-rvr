import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header';
import TransactionsList from '../../components/TransactonsList';
import styles from './TransactionPage.module.sass'
import { bindActionCreators } from 'redux';
import { getUserTransactionsAction } from '../../actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { isEmpty } from 'lodash/isEmpty';

function TransactionsPage(props) {

    const {transactions, isFetching, error} = useSelector(({userTransactions}) =>  userTransactions);
    const dispatch = useDispatch();
    const getTransactions = bindActionCreators(getUserTransactionsAction, dispatch);

    useEffect(()=>{
        getTransactions()
    },[]);

    const isEmpty = _.isEmpty(transactions)

    const listClasses = {
        table: styles.table,
        tableHeader: styles.tableHeader,
        tableBody: styles.tableBody,
        tableItem: styles.tableItem,
        headerData: styles.headerData,
        itemData: styles.itemData,
        noData: styles.noData,
    }

    return (
        <div>
            <Header />
            <div className={styles.listWrapper}>
                <div className={styles.listName}>Users Transactions</div>
                {   
                !isEmpty
                ?
                <TransactionsList transactions={transactions} classes={listClasses}/>
                :
                <div className={styles.noData}>No transactions.</div>
                } 
            </div>
            
        </div>
    )
}

export default TransactionsPage

