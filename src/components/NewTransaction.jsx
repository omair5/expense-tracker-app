import React, { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../context/globalState'
import { v4 as uuidv4 } from 'uuid';

const NewTransaction = () => {
    // --------------------LOGIC
    const { mystate, dispatch, text, TextDispatch, amount, AmountDispatch, forUpdate, UpdateDispatch } = useContext(TransactionContext)
    const [validationError, setValidationError] = useState({ textvalid: false, amountvalid: false })

    // AMOUNT HANDLER
    const AmountHandler = (e) => {
        AmountDispatch({ type: 'setAmount', payload: e.target.value })
        setValidationError({ textvalid: false, amountvalid: false })
    }
    // DESCRIPTION HANDLER
    const DescriptionHandler = (e) => {
        TextDispatch({ type: 'setText', payload: e.target.value })
        setValidationError({ textvalid: false, amountvalid: false })
    }

    //    HANDLE SUMMIT
    const HandleSubmit = (e) => {
        e.preventDefault()
        const dateObj = new Date()
        const date = dateObj.toDateString()
        const time = dateObj.toLocaleTimeString('en-US', { hour12: true })
        if (text !== '' && text !== null && amount.match("^[0-9]+$") && amount !== '') {
            setValidationError({ textvalid: false, amountvalid: false })
            if (e.target.textContent === 'ADD INCOME')
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: { description: text, amount: amount, id: uuidv4(), date: date, time: time }
                })
            else {
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: { description: text, amount: -amount, id: uuidv4(), date: date, time: time }
                })
            }
            TextDispatch({ type: 'empty', payload: '' })
            AmountDispatch({ type: 'empty', payload: '' })
            UpdateDispatch({ type: 'ChangeState', payload: false })
        }
        else {
            if (text === '' || null) {
                setValidationError({ textvalid: true, amountvalid: false })
            }
            if (!amount.match("^[0-9]+$") || amount === '') {
                setValidationError({ textvalid: validationError.textvalid, amountvalid: true })
            }
        }
    }

    // TO SAVE DATA IN LOCAL STORAGE
    useEffect(() => {
        if (mystate.length !== 0) {
            localStorage.setItem('mystate', JSON.stringify(mystate))
        }
    }, [mystate])


    // --------------------USER INTERFACE
    return (
        <div className='list'>
            <h3 style={{ padding: '5px 0px' }}>ADD NEW TRANSACTION</h3>
            <hr />
            <div className='myform' >

                <div className='for-input' >
                    <h4>Description</h4>
                    {validationError.textvalid && <span className={'validation-error'}>This Field Should Not Be Empty!</span>}
                    <input className={`${forUpdate && 'inputforupdate'}`} type="text" value={text} onChange={DescriptionHandler} placeholder="ENTER DESCRIPTION...." />
                </div>

                <div className="for-input">
                    <h4>Amount </h4>
                    {validationError.amountvalid ? <span className={'validation-error'}>This Field Only Except Numbers & It Should Not Be Empty</span> : null}
                    <input className={`${forUpdate && 'inputforupdate'}`} type="number" value={amount} onChange={AmountHandler} placeholder="ENTER AMOUNT...." />
                </div>

                {/* <button className={amount === '' ? "my-button" : amount >= 0 ? "green-button" : "red-button"}>
                    {forUpdate ? "UPDATE" :
                        amount === '' ? "ADD" : amount < 0 ? "ADD EXPENSE" : "ADD INCOME"}


                </button> */}
                <div>
                    <button className={'green-button'} onClick={HandleSubmit}>ADD INCOME</button>
                    <button className={'red-button'} onClick={HandleSubmit}>ADD EXPENSE</button>
                </div>
            </div>
        </div >

    );
}

export default NewTransaction;