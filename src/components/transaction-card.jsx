import React, {useContext} from 'react';
import { TransactionsContext } from '../contexts/transaction-context';

const TransactionCard = ({transaction}) => {
    const divClass = transaction.isExpense? 'transaction-card expense' : 'transaction-card earning';
    const {dispatch} = useContext(TransactionsContext);
    return (
        <div className={divClass}>
            <div onClick={() => {
                    dispatch({
                        type : 'REMOVE_TRANSACTION',
                        id : transaction.id
                    })
                }} className="close-btn">
                <span  className='fa fa-times'></span>
            </div>
            <div className="transaction-card-details">
                <h5 className="m-0 transaction-item">
                    {transaction.name}
                    <span className="transaction-amount">
                        ₹{transaction.amount}
                    </span>
                </h5>
            </div>
        </div>
    )
}

export default TransactionCard;