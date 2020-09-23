import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'
import { v4 as uuidv4 } from 'uuid';


const NewTransaction = () => {

    const { dispatch, text, TextDispatch, amount, AmountDispatch, forUpdate, UpdateDispatch } = useContext(TransactionContext)



    const HandleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: { description: text, amount: amount, id: uuidv4(), date: new Date() }
        })
        TextDispatch({ type: 'empty', payload: '' })
        AmountDispatch({ type: 'empty', payload: '' })
        UpdateDispatch({ type: 'ChangeState', payload: false })

    }

    return (
        <div className='list'>
            <h3 style={{ padding: '5px 0px' }}>ADD NEW TRANSACTION</h3>
            <hr />
            <form className='myform' onSubmit={HandleSubmit}>

                <div className='for-input' >
                    <p>Description</p>
                    <input className={`${forUpdate && 'inputforupdate'}`} type="text" value={text} onChange={(e) => TextDispatch({ type: 'setText', payload: e.target.value })} required placeholder="ENTER DESCRIPTION...." />
                </div>

                <div className="for-input">
                    <p>Amount <br />(Negative Amount=Expense , Positive Amount=Income)</p>
                    <input className={`${forUpdate && 'inputforupdate'}`} type="number" value={amount} onChange={(e) => AmountDispatch({ type: 'setAmount', payload: e.target.value })} required placeholder="ENTER AMOUNT...." />
                </div>

                <button className={amount === '' ? "my-button" : amount >= 0 ? "green-button" : "red-button"}>
                    {forUpdate ? "UPDATE" :
                        amount === '' ? "ADD" : amount < 0 ? "ADD EXPENSE" : "ADD INCOME"}


                </button>
            </form>
        </div >

    );
}

export default NewTransaction;