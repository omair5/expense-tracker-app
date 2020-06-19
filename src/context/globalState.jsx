import React, { createContext } from 'react';

export const TransactionContext = createContext()


export const MyProvider = ({ children }) => {
    const initialTransaction = [
        { description: 'bill payment', amount: -4000 },
        { description: 'water payment', amount: 20000 },
        { description: 'grocery payment', amount: -8000 },
    ]
    return (
        <TransactionContext.Provider value={initialTransaction}>
            {children}
        </TransactionContext.Provider >

    )
}