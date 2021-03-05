import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header';
import TransactionsList from '../../components/TransactonsList/index';
import styles from './TransactionPage.module.sass'

// const transactions = false

const transactions = [
    {
        id: 1,
        type: true,
        sum: 100,
        user: 'Vasia',
    },
    {
        id: 2,
        type: true,
        sum: 100,
        user: 'John Doy',
    },
    {
        id: 3,
        type: false,
        sum: 300,
        user: 'Johanna Doy',
    },
    {
        id: 4,
        type: true,
        sum: 400,
        user: 'Del Toro',
    },
]

function TransactionsPage(props) {


    const listClasses = {
        table: styles.table,
        tableHeader: styles.tableHeader,
        tableBody: styles.tableBody,
        tableItem: styles.tableItem,
        headerData: styles.headerData,
        itemData: styles.itemData,
    }

    return (
        <div>
            <Header />
            <div className={styles.listWrapper}>
                <div className={styles.listName}>Users Transactions</div>
                {
                    transactions 
                    ? <TransactionsList transactions={transactions} classes={listClasses}/>
                    : <div className={styles.noData}>No transactions</div>
                }
                
            </div>
            
        </div>
    )
}

// TransactionsPage.propTypes = {

// }

export default TransactionsPage

