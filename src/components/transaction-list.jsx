import React, {useContext} from 'react';
import TransactionCard from './transaction-card';
import { TransactionsContext } from '../contexts/transaction-context';

const TransactionList = () => {
    const {transactions} = useContext(TransactionsContext);
    return (
        <div className="transaction-list">
            <h1 className="text-center">
                Your transactions
            </h1>
            <hr className='section-hr'/>
            <div className="transaction-cards">
               {
                   transactions.map(transaction => {
                       return (
                           <TransactionCard key={transaction.id} transaction={transaction}/>
                       )
                   })
               }
            </div>
        </div>
    )
}

export default TransactionList;