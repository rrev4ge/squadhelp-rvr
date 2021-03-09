import React from 'react'



const TransactionsListItem = (props) => {

    const { transactions, classes } = props

    return transactions.map((t) => 
        <tr key={t.id} className={classes.tableItem}>
            <td className={classes.itemData}>{t.id}</td>
            <td className={classes.itemData}>{t.type ? 'receipt' : 'withdrawal'}</td>
            <td className={classes.itemData}>{`${t.type ? '+' : '-'}${t.sum}`}</td>
            <td className={classes.itemData}>{t.User.displayName}</td>
        </tr>
    )
}
export default TransactionsListItem;