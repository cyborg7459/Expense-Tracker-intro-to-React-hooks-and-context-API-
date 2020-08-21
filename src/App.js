import React from 'react';
import DisplayCard from './components/display-card.jsx';
import TransactionList from './components/transaction-list.jsx';
import AddTransactionForm from './components/add-transaction-form.jsx';
import TransactionsContextProvider from './contexts/transaction-context.js';

const App = () => {
  return (
    <div className='container'>
      <h1 className='text-center display-4'>Expense tracker</h1>
      <p className='text-center lead'>Manage all your expenses in one place</p>
      <hr className='mb-4'/>
      <TransactionsContextProvider>
        <DisplayCard />
        <TransactionList />
        <AddTransactionForm />
      </TransactionsContextProvider>   
    </div>
  )
}

export default App;