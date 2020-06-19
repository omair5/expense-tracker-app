import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'

const Balance = () => {
    const transaction = useContext(TransactionContext)

    return (
        <div className='balance'>
            <h3>YOUR BALANCE <br />
                <span>
                    ${transaction.reduce((balance, value) =>
                        (balance += value.amount),0
                    )}
                </span></h3>
        </div>
    );
}

export default Balance;