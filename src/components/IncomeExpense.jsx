import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'
import CountUp from 'react-countup';

const IncomeExpense = () => {
    const { mystate, ToggleState: { checkedC: currencyToggler } } = useContext(TransactionContext)

    const income = mystate.filter(value => value.amount > 0).reduce((income, value) => (income += +value.amount), 0)
    const expense = mystate.filter(value => value.amount < 0).reduce((income, value) => (income += +value.amount), 0)


    return (
        <div className='incomeexpense'>
            <div>
                <h5 className='income'>INCOME <br /><span>{currencyToggler ? '$' : 'Rs'} <CountUp end={income} duration={1.2} separator=',' /></span></h5>
            </div>
            <div>
                <h5 className='expense'>EXPENSE <br /><span>{currencyToggler ? '$' : 'Rs'} <CountUp end={Math.abs(expense)} duration={1.2} separator=',' /></span></h5>
            </div>
        </div>
    );
}

export default IncomeExpense;