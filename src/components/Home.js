import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render () {
    // <img src='https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png' alt='bank' />
    return (
      <div>
        <h1>Bank of React</h1>

        <Link to='/userProfile'>User Profile</Link>
        <br />
        <br />
        <AccountBalance accountBalance={this.props.accountBalance} />
        <br />
        <Link to='/debit'>Debit Page</Link>
      </div>
    );
  }
}

export default Home;
