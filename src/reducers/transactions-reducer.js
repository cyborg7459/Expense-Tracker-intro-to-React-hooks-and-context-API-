import uuid from 'uuid/dist/v1';

export const TransactionsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION':
            return [
                ...state,
                {
                    name : action.transaction.name,
                    amount : action.transaction.amount,
                    isExpense : action.transaction.isExpense,
                    id : uuid()
                }
            ]
        case 'REMOVE_TRANSACTION':
            return state.filter(transaction => transaction.id !== action.id)
        default:
            return state
    }
}