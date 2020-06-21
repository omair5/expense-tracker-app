import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'

const List = () => {
    const { mystate, dispatch } = useContext(TransactionContext)
    return (
        <div className='list'>
            <h3>{mystate.length === 0 ? 'NO HISTORY YET' : 'HISTORY'}</h3>
            <hr />


            {mystate.map((value, index) => {
                return (
                    <div className={`listitem ${value.amount < 0 ? 'border-red' : 'border-green'}`} key={index}>
                        <h2 style={{ cursor: 'pointer' }} onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: value.id })}>X</h2>
                        <h4>{value.description}</h4>
                        <h5>{value.amount < 0 ? ` -${Math.abs(value.amount)}` : value.amount}</h5>

                    </div>)
            })}

        </div>
    );
}

export default List;

