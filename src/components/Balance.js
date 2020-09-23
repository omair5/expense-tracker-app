import React, { useContext } from 'react';
import { TransactionContext } from '../context/globalState'
import CountUp from 'react-countup';
import Toggler from './toggler'

const Balance = () => {
    const { mystate, ToggleState: { checkedC: currencyToggler } } = useContext(TransactionContext)

    return (
        <div className='balance-container'>
            <div className='balance'>
                <h3>YOUR BALANCE</h3>
                <h1 style={{ color: 'rgb(88, 180, 241)' }}>
                    {currencyToggler ? '$' : 'Rs'} < CountUp end={mystate.reduce((balance, value) =>
                        (balance += parseInt(value.amount)), 0
                    )} duration={1.2} separator="," />
                </h1>
            </div>
            <div style={{ paddingRight: '10px' }}>
                <Toggler />
            </div>
        </div>
    );
}

export default Balance;