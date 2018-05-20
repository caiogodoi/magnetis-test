import React, { Component } from 'react';
import './App.css';
import List from '../List';
import Header from '../Header';
import DisplayValue from '../DisplayValue';

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
      })
    } else {
      this.setState({
        type: 'credit',
      })
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
    })
  }

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
    const displayTotal = parseFloat(this.state.total).toLocaleString('pt-br');

    return (
      <div className="main">
        <Header />
        <div className="main-body">
          <div className="main-form">
            <form className="form" onSubmit={this.onSubmit}>
              <input
                className="input-form"
                type="number"
                value={this.state.transaction}
                onChange={this.onChange}
                placeholder="Add Transaction..."
              />
              <select
                className="select-form"
                onChange={this.onChangeSelect}
                value={this.state.type}>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
              <button className="btn-form">Submit</button>
            </form>
          </div>
          <div className="main-transactions">
            <p className="text-transaction">Transactions</p>
            <List transactions={this.state.transactions} />
          </div>
        </div>
        <div className="main-total">
          Total: <DisplayValue value={this.state.total} display={displayTotal} />
        </div>
      </div>
    );
  }
}
