import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/globalState'


const NewTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const { mystate, dispatch } = useContext(TransactionContext)

    

    const HandleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: { description: text, amount: amount, id: mystate.length }
        })
        setText('')
        setAmount('')
         
    }

return (
    <div className='list'>
        <h3>ADD NEW TRANSACTION</h3>
        <hr />
        <form className='myform' onSubmit={HandleSubmit}>

            <div className="for-input">
                <p>Text</p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} required placeholder="ENTER TEXT...." />
            </div>

            <div className="for-input">
                <p>Amount <br />(Negative-Expense,Positive-Income</p>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="ENTER AMOUNT...." />
            </div>

            <button className={amount === '' ? "my-button" : amount >= 0 ? "green-button" : "red-button"}>
                {amount === '' ? "ADD" : amount < 0 ? "ADD EXPENSE" : "ADD INCOME"}

            </button>
        </form>
    </div >

);
}

export default NewTransaction;