import React, { Component } from 'react';
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
    return (
      <div>
        {foods
          ? foods.map(food => (
            <div>
                <button onClick={() => this.setMenu(food)} key={food.Name}>
                  {food.Name}
                </button>
                <br />
              </div>
          ))
          : null}
        <button>Favorites</button>
        <CardContainer menu={this.state.menu} />
      </div>
    );
  }
}

export { Menus as default };
