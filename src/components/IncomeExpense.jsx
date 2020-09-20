import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'
import CountUp from 'react-countup';

const IncomeExpense = () => {
    const { mystate } = useContext(TransactionContext)
    console.log(mystate)

    const income = mystate.filter(value => value.amount > 0).reduce((income, value) => (income += +value.amount), 0)
    console.log(income)
    const expense = mystate.filter(value => value.amount < 0).reduce((income, value) => (income += +value.amount), 0)
    return (
        <div className='incomeexpense'>
            <div>
                <h5 className='income'>INCOME <br /><span>$<CountUp end={income} duration={1.2} separator=',' /></span></h5>
            </div>
            <div>
                <h5 className='expense'>EXPENSE <br /><span>$<CountUp end={expense} duration={1.2} separator=',' /></span></h5>
            </div>
        </div>
    );
}

export default IncomeExpense;