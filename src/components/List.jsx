import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';



const List = () => {
    const { mystate, dispatch } = useContext(TransactionContext)
    return (
        <div className='list'>
            <div className='list-button'>
                <h3 className='history'>{mystate.length === 0 ? 'NO HISTORY YET' : 'HISTORY'}</h3>
                <button className='reset-button'>RESET</button>
            </div>
            <hr />


            {mystate.map((value, index) => {
                return (
                    <div className={`listitem ${value.amount < 0 ? 'background-red' : 'background-green'}`} key={index}>
                        <div className='box-1'>
                            <h3>{value.description}</h3>
                            <h3>${value.amount < 0 ? ` -${Math.abs(value.amount)}` : value.amount}</h3>
                            <div>
                                <h5>9/19/2020</h5>
                                <h5>7:23 PM</h5>
                            </div>

                        </div>
                        <div className='box-2'>
                            <h2 className='my-icons' onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: value.id })}> <DeleteForeverIcon /></h2>
                            <h2 className='my-icons'><EditIcon /></h2>

                        </div>

                    </div>)
            })}

        </div>
    );
}

export default List;

