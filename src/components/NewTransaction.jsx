import React from 'react';

const NewTransaction = () => {
    return (
        <div className='list'>
            <h3>ADD NEW TRANSACTION</h3>
            <hr />
            <form className='myform'>
                <div className="for-input">
                    <p>Text</p>
                    <input type="text" required placeholder="ENTER TEXT...." />
                </div>
                <div className="for-input">
                    <p>Amount <br />(Negative-Expense,Positive-Income</p>
                    <input type="number" required placeholder="ENTER AMOUNT...." />
                </div>
                <button>ADD TRANSACTION</button>
            </form>
        </div>

    );
}

export default NewTransaction;