import React, { Component } from 'react';
import './App.css';
import List from '../List';
import Header from '../Header';
import Total from '../Total';
import Form from '../Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: '',
      transactions: [],
      total: 0,
      type: 'credit',
    };
  }

  componentWillMount() {
    const transactionsJson = localStorage.getItem('transactions');
    const total = parseFloat(localStorage.getItem('total'));
    if (transactionsJson) {
      this.setState({
        transactions: JSON.parse(transactionsJson),
        total: total,
      });
    }
  }

  onChange = event => {
    this.setState({ transaction: event.target.value });
    if (event.target.value < 0) {
      this.setState({
        type: 'debit',
      });
    } else {
      this.setState({
        type: 'credit',
      });
    }
  };

  onChangeSelect = event => {
    this.setState({ type: event.target.value });
    let newValue;
    if (event.target.value === 'debit') {
      newValue = -Math.abs(this.state.transaction);
    } else {
      newValue = Math.abs(this.state.transaction);
    }
    this.setState({
      transaction: newValue,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const value = parseFloat(parseFloat(this.state.transaction).toFixed(2));
    if (value) {
      const newTransaction = {
        date: new Date().toLocaleString('pt-br'),
        value: value,
      };
      const total = this.state.total + value;
      const transactions = [...this.state.transactions, newTransaction];
      this.setState({
        transaction: '',
        transactions: transactions,
        total: total,
      });

      // Save in LocalStorage
      localStorage.setItem('total', total);
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__body">
          <Form
            onSubmit={this.onSubmit}
            transaction={this.state.transaction}
            onChange={this.onChange}
            onChangeSelect={this.onChangeSelect}
            type={this.state.type}
          />
          <div className="app__transactions">
            <p className="app__title">Transactions</p>
            <List transactions={this.state.transactions} />
          </div>
        </div>
        <Total total={this.state.total} />
      </div>
    );
  }
}
