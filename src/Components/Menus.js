import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContainer from './CardContainer';

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setMenu = this.setMenu.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      const { foods } = newProps;
      this.setState({ foods });
      console.log('foods: ', foods);
    }
  }

  setMenu(menu) {
    console.log('menu: ', menu);
    this.setState({ menu });
  }

  render() {
    const { foods, menu } = this.state;
    const { searchText } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <div>
            {foods
              ? (foods.map(food => (
                <div>
                  <Button
                    color="primary"
                    onClick={() => this.setMenu(food)}
                    key={food.Name}
                  >
                    {food.Name}
                  </Button>
                  <br />
                </div>
              ))
              )
              :               <div>
                <CircularProgress />
<div>Loading Foods</div>
              </div>}
          </div>
          <Button color="primary">Favorites</Button>
        </Grid>
        <Grid item xs={8}>
          <CardContainer searchText={searchText} menu={menu} />
        </Grid>
      </Grid>
    );
  }
}

export { Menus as default };
