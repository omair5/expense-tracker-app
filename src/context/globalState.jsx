import React, { createContext, useEffect, useReducer } from 'react';
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
    // REDUCERS
    const [mystate, dispatch] = useReducer(MyReducer, initialTransaction)
    const [text, TextDispatch] = useReducer(ReducerForValueText, '')
    const [amount, AmountDispatch] = useReducer(ReducerForValueAmount, '')
    const [forUpdate, UpdateDispatch] = useReducer(ReducerForUpdate, false)

    // METHOD
    const handleUpdate = (id) => {
        const [valueForUpdate] = mystate.filter(value => (value.id === id))
        const { description, amount } = valueForUpdate
        TextDispatch({ type: 'ValueForUpdate', payload: description })
        AmountDispatch({ type: 'ValueForUpdate', payload: `${Math.abs(amount)}` })
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
        UpdateDispatch({ type: 'ChangeState', payload: true })
    }
    // FOR TOGGLER
    const [ToggleState, setToggleState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    // READING LOCAL STORAGE DATA ON APP LOAD
    useEffect(() => {
        if (localStorage.getItem('mystate') !== null)
            dispatch({ type: 'FROM LOCALSTORAGE', payload: JSON.parse(localStorage.getItem('mystate')) })
        console.log('i m 1st')
    }, [])
    
    // TO SAVE DATA IN LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('mystate', JSON.stringify(mystate))
        console.log('i m 2nd')
    }, [mystate])


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
            UpdateDispatch,
            ToggleState,
            setToggleState
            // deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider >

    )
}
