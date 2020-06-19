import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'

const List = () => {
    const transaction = useContext(TransactionContext)
    return (
        <div className='list'>
            <h3>HISTORY</h3>
            <hr />


            {transaction.map(value => {
                return (
                    <div className={`listitem ${value.amount < 0 ? 'border-red' : 'border-green'}`}>
                        <h4>{value.description}</h4>
                        <h5>{value.amount < 0 ? ` -${Math.abs(value.amount)}` : value.amount}</h5>
                    </div>)
            })}

        </div>
    );
}

export default List;

