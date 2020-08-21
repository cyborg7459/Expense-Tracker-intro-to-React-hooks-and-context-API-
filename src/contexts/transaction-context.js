import React, {createContext, useReducer, useEffect} from 'react';
import {TransactionsReducer} from '../reducers/transactions-reducer'

export const TransactionsContext = createContext();

const TransactionsContextProvider = (props) => {
    const[transactions, dispatch] = useReducer(TransactionsReducer,[], () => {
        const localData = localStorage.getItem('transactions');
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    })

    return (
        <TransactionsContext.Provider value={{transactions, dispatch}}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export default TransactionsContextProvider;