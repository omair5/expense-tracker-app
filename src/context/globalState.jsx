import React, { createContext, useReducer } from 'react';
import MyReducer from './MyReducer'
import ReducerForValueText from './ReducerForValueText'
import ReducerForValueAmount from './ReducerForValueAmount'
import ReducerForUpdate from './ReducerForUpdate';

export const TransactionContext = createContext()

// INITIAL STATE
const initialTransaction = [
    // { description: 'bill payment', amount: -4000, id: 0 },
    // { description: 'water payment', amount: 20000, id: 1 },
    // { description: 'grocery payment', amount: -8000, id: 2 },
]

export const MyProvider = ({ children }) => {
    // for list
    const [mystate, dispatch] = useReducer(MyReducer, initialTransaction)
    const [text, TextDispatch] = useReducer(ReducerForValueText, '')
    const [amount, AmountDispatch] = useReducer(ReducerForValueAmount, '')
    const [forUpdate, UpdateDispatch] = useReducer(ReducerForUpdate, false)


    const handleUpdate = (id) => {
        const { description, amount } = mystate[id]
        TextDispatch({ type: 'ValueForUpdate', payload: description })
        AmountDispatch({ type: 'ValueForUpdate', payload: amount })
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
        UpdateDispatch({ type: 'ChangeState', payload: true })
    }

    return (
        <TransactionContext.Provider value={{
            mystate,
            dispatch,
            text,
            amount,
            AmountDispatch,
            TextDispatch,
            handleUpdate,
            forUpdate,
            UpdateDispatch
            // deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider >

    )
}
