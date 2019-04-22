import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import CardContainer from './CardContainer';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { favs: [] };
    this.updateFoods = this.updateFoods.bind(this);
    this.addFood = this.addFood.bind(this);
  }

  updateFoods = name => e => {
    this.setState({[name]: e.target.value});
  }

  addFood() {
      // add food to local state
      const {food} = this.state;
      const {favs, setFavoriteMenu} = this.props;
      favs.push(food);
      setFavoriteMenu(favs)
      //this.setState(favs)
      // TODO: send updated list to API
  }

  render() {
    const { favs } = this.props;
    console.log('favs: ', favs);
    const wrapper = { Menu: favs };
    console.log('wrapper.Menu: ', wrapper.Menu);
    return (
      <div>
        <TextField floatingLabelText="Enter Food" onChange={this.updateFoods('food')}>Enter Food</TextField>
        <Button onClick={this.addFood}>Save</Button>
        <Button>Search</Button>
        <CardContainer menu={wrapper} />
      </div>
    );
  }
}
