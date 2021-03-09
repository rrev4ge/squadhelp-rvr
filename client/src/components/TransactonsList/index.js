import React from 'react'
import PropTypes from 'prop-types'
import TransactionsListItem from './TransactionListItem'

const TransactionsList = (props) => {

    const { classes, transactions } = props

    return (
        <table className={classes.table}>
            <thead className={classes.tableHeader}>
                <tr className={classes.tableItem}>
                    <td className={classes.headerData}>Id</td>
                    <td className={classes.headerData}>Type</td>
                    <td className={classes.headerData}>Sum</td>
                    <td className={classes.headerData}>User</td>
                </tr>
            </thead>
            <tbody className={classes.tableBody}>
                <TransactionsListItem transactions={transactions}
                                    classes={{
                                        tableItem: classes.tableItem,
                                        itemData: classes.itemData,
                                    }}
                />
            </tbody>
        </table>
    )
}

TransactionsList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.bool.isRequired,
        sum: PropTypes.number.isRequired,
    })).isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default TransactionsList;
