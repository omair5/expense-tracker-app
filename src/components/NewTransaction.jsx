import React, { useState } from 'react';

const NewTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    return (
        <div className='list'>
            <h3>ADD NEW TRANSACTION</h3>
            <hr />
            <form className='myform'>

                <div className="for-input">
                    <p>Text</p>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} required placeholder="ENTER TEXT...." />
                </div>

                <div className="for-input">
                    <p>Amount <br />(Negative-Expense,Positive-Income</p>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="ENTER AMOUNT...." />
                </div>

                <button>ADD TRANSACTION</button>
            </form>
        </div>

    );
}

export default NewTransaction;