import React, { createContext, useReducer } from 'react';
import MyReducer from './MyReducer'

export const TransactionContext = createContext()

// INITIAL STATE
const initialTransaction = [
    { description: 'bill payment', amount: -4000, id: 0 },
    { description: 'water payment', amount: 20000, id: 1 },
    { description: 'grocery payment', amount: -8000, id: 2 },
]

export const MyProvider = ({ children }) => {
    const [mystate, dispatch] = useReducer(MyReducer, initialTransaction)
    console.log(mystate)

    // ACTIONS
    // function deleteTransaction(id) {
    //     dispatch({
    //         type: 'DELETE_TRANSACTION',
    //         payload: id
    //     })
    // }

    return (
        <TransactionContext.Provider value={{
            mystate,
            dispatch
            // deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider >

    )
}
