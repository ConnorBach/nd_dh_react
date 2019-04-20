import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { getTodayFoods } from './api/apiFunctions';
import Menus from './Components/Menus';
import NavBar from './Components/NavBar';
import Auth from './utils/auth';
import Callback from './Components/Callback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setTodayFoods = this.setTodayFoods.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const auth = new Auth();
    this.setState({ auth });
    this.setTodayFoods();
  }

  async setTodayFoods() {
    const foods = await getTodayFoods();
    this.setState({ foods });
  }

  setSearchText(text) {
    this.setState({ searchText: text });
  }

  login() {
    const { auth } = this.state;
    auth.login();
  }

  logout() {
    const { auth } = this.state;
    auth.logout();
  }

  render() {
    const { auth, foods, searchText } = this.state;

    let isAuthenticated = null;
    if (this.state.auth) {
      isAuthenticated = this.state.auth.isAuthenticated;
    }

    return (
      <div className="App">
        <NavBar login={this.login} logout={this.logout} isAuthenticated={isAuthenticated} setSearchText={this.setSearchText} />
        <Menus searchText={searchText} foods={foods} />
        <Route path="/callback" component={Callback} />
      </div>
    );
  }
}

export default App;
