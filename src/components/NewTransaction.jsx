import React, { useContext, useEffect } from 'react';
import { TransactionContext } from '../context/globalState'
import { v4 as uuidv4 } from 'uuid';

const NewTransaction = () => {


    const { mystate, dispatch, text, TextDispatch, amount, AmountDispatch, forUpdate, UpdateDispatch } = useContext(TransactionContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        const dateObj = new Date()
        const date = dateObj.toDateString()
        const time = dateObj.toLocaleTimeString()
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: { description: text, amount: amount, id: uuidv4(), date: date, time: time }
        })
        TextDispatch({ type: 'empty', payload: '' })
        AmountDispatch({ type: 'empty', payload: '' })
        UpdateDispatch({ type: 'ChangeState', payload: false })

    }


    // TO SAVE DATA IN LOCAL STORAGE
    useEffect(() => {
        if (mystate.length !== 0) {
            localStorage.setItem('mystate', JSON.stringify(mystate))
        }
    }, [mystate])

    // FOR INVALID AMOUNT INPUT
    const handleInvalid = (e) => {

        e.target.setCustomValidity('Only numbers with - and + sign are allowed !');

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
                    <p>Amount </p>
                    <h5>(Negative Amount=Expense , Positive Amount=Income)</h5>
                    <input className={`${forUpdate && 'inputforupdate'}`} type="text" pattern="^[0-9 +-]*$" value={amount} onChange={(e) => AmountDispatch({ type: 'setAmount', payload: e.target.value })} required placeholder="ENTER AMOUNT...." onInvalid={(e) => { handleInvalid(e) }} />
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