import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login.js';
import UserProfile from './components/UserProfile';
import DebitsList from './components/DebitsList.js';

class App extends Component {
  constructor () {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    };
  }

  mockLogin = (loginInfo) => {
   const newUser = {...this.state.currentUser}
   newUser.userName = loginInfo.userName
   this.setState({currentUser: newUser})
 }

  render () {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LoginComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}/>)

    return (
      <Router>
        <div>
          <Route exact path='/' render={HomeComponent} />
          <Route exact path='/userProfile' render={UserProfileComponent} />
          <Route exact path="/login" render={LoginComponent}/>
          <Route exact path='/debit' component={DebitsList} />
        </div>
      </Router>
    );
  }
}

export default App;
