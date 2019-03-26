import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
    const { foods } = this.state;
    const { menu } = this.state;
    return (
      <div>
        {foods
          ? foods.map(food => (
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
          : null}
        <Button color="primary">Favorites</Button>
        <CardContainer menu={menu} />
      </div>
    );
  }
}

export { Menus as default };
