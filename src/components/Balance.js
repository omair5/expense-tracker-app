import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'

const Balance = () => {
    const {mystate} = useContext(TransactionContext)

    return (
        <div className='balance'>
            <h3>YOUR BALANCE <br />
                <span>
                    ${mystate.reduce((balance, value) =>
                        (balance += parseInt(value.amount)),0
                    )}
                </span></h3>
        </div>
    );
}

export default Balance;