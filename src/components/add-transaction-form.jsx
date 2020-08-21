import React, {useContext} from 'react';
import uuid from 'uuid/dist/v1';
import { TransactionsContext } from '../contexts/transaction-context';

const AddTransactionForm = () => {
    const {dispatch} = useContext(TransactionsContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const transaction = {
            name : document.getElementById('name').value,
            amount : Number(document.getElementById('amount').value),
            isExpense : document.getElementById('type').selectedIndex ? true : false,
            id : uuid()
        }
        dispatch({
            type : 'ADD_TRANSACTION',
            transaction : transaction
        });
        document.getElementById('name').value = "";
        document.getElementById('amount').value = "";
    }
    return (
        <div className="add-transaction-form mt-5">
            <h1 className='text-center'>Add new transaction</h1>
            <hr className="section-hr"/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter the transaction name</label>
                    <input id='name' required className='form-control' type="text"/>
                </div>
                <div  className="form-group">
                    <label>Choose the transaction type</label>
                    <select id='type' required className='form-control'>
                        <option>Earning</option>
                        <option>Expense</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Enter transaction amount (positive for earning and negative for expense)</label>
                    <input id='amount' required className='form-control' type="text"/>
                </div>
                <button className='btn btn-info btn-block mt-4'>Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransactionForm;