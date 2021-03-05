import React from 'react'
import PropTypes from 'prop-types'



const TransactionsListItem = (props) => {

    const { transactions, classes } = props
    return transactions.map((t) => 
        <tr key={t.id} className={classes.tableItem}>
            <td className={classes.itemData}>{t.id}</td>
            <td className={classes.itemData}>{t.type ? 'receipt' : 'withdrawal'}</td>
            <td className={classes.itemData}>{`${t.type ? '+' : '-'}${t.sum}`}</td>
            <td className={classes.itemData}>{t.user}</td>
        </tr>
    )
}
export default TransactionsListItem;