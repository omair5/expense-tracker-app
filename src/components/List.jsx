import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import AlertDialogSlide from './ConfirmationDialog'



const List = () => {
    // -------------------LOGIC
    const { mystate, dispatch, handleUpdate, forUpdate, ToggleState: { checkedC: currencyToggler } } = useContext(TransactionContext)
    
    // -------------------USER INTERFACE
    return (
        <div className='list'>
            <div className='list-button'>
                <h3 className='history'>{mystate.length === 0 ? 'NO HISTORY YET' : 'HISTORY'}</h3>
                <div className='reset-button'><AlertDialogSlide /></div>
            </div>
            <hr />

            {
                mystate.map((value, index) => {
                    console.log(value)
                    return (
                        <div className={`listitem ${value.amount < 0 ? 'background-red' : 'background-green'}`} key={index}>
                            <div className='box-1'>
                                <h3 className='box-child '>{value.description}</h3>
                                <h3 className='box-child child-2'>{currencyToggler ? '$' : 'Rs'} {value.amount < 0 ? ` -${Math.abs(value.amount)}` : value.amount}</h3>
                                <div className='box-child '>
                                    <h5> {value.date}</h5>
                                    <h5>{value.time}</h5>
                                </div>

                            </div>
                            <div className='box-2'>
                                <h2 className='my-icons' onClick={() => dispatch({ type: 'DELETE_TRANSACTION', payload: value.id })}> <DeleteForeverIcon /></h2>
                                <h2 className={`my-icons ${forUpdate && 'unclickable'}`} onClick={() => handleUpdate(value.id)}><EditIcon /></h2>

                            </div>

                        </div>)
                })
            }

        </div >
    );
}

export default List;

