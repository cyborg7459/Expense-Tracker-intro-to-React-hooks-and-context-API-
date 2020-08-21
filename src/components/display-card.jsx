import React, {useContext} from 'react';
import { TransactionsContext } from '../contexts/transaction-context';

const DisplayCard = () => {
    const {transactions} = useContext(TransactionsContext);
    const earning = transactions.filter(transaction => !transaction.isExpense).reduce((acc,transaction) => acc+transaction.amount, 0).toFixed(2);
    const expense = transactions.filter(transaction => transaction.isExpense).reduce((acc,transaction) => acc+transaction.amount, 0).toFixed(2);
    const Balance = (earning - expense).toFixed(2);
    return (
        <div className='display-card'>
            <h3>Total Balance</h3>
            <h2>₹ {Balance}</h2>
            <br />
            <div className='display-card-details'>
                <div className='earning'>
                    <h3>Earning</h3>
                    <h2>₹ {earning}</h2>
                </div>
                <div className="expense">
                    <h3>Expenses</h3>
                    <h2>₹ {expense}</h2>
                </div>
            </div>
        </div>
    )
}

export default DisplayCard;