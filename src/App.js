import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import List from './components/List';
import NewTransaction from './components/NewTransaction';

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpense />
      <List />
      <NewTransaction />
    </div>
  );
}

export default App;
