import React, { Component } from 'react';
import './App.css';
import { getTodayFoods } from './api/apiFunctions';
import Menus from './Components/Menus';
import NavBar from './Components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setTodayFoods = this.setTodayFoods.bind(this);
  }

  componentDidMount() {
    this.setTodayFoods();
  }

  async setTodayFoods() {
    const foods = await getTodayFoods();
    this.setState({ foods });
  }

  render() {
    const { foods } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Menus foods={foods} />
      </div>
    );
  }
}

export default App;
