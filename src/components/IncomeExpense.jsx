import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'

const IncomeExpense = () => {
    const transaction = useContext(TransactionContext)

    const income = transaction.mystate.filter(value => value.amount > 0).reduce((income, value) => (income += value.amount), 0)
    const expense = transaction.mystate.filter(value => value.amount < 0).reduce((income, value) => (income += value.amount), 0)
    return (
        <div className='incomeexpense'>
            <div>
                <h3 className='income'>INCOME <br /><span>${income}</span></h3>
            </div>
            <div>
                <h3 className='expense'>EXPENSE <br /><span>${expense}</span></h3>
            </div>
        </div>
    );
}

export default IncomeExpense;