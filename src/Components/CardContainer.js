import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FoodCard from './FoodCard';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buildMenu = this.buildMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      const { menu } = nextProps;
      this.setState({ menu });
    }
  }

  buildMenu() {
    const { menu } = this.state;
    const children = [];
    menu.Menu.forEach((food) => {
      children.push(<FoodCard key={food.toString()} food={food} />);
    });
    return children;
  }

  render() {
    const { menu } = this.state;
    return <div>{menu ? this.buildMenu() : null}</div>;
  }
}

CardContainer.propTypes = {
  menu: PropTypes.shape({
    Name: PropTypes.string,
    Start: PropTypes.string,
    End: PropTypes.string,
    Menu: PropTypes.array,
  }),
};

CardContainer.defaultProps = {
  menu: {
    Start: '0',
    End: '0',
    Menu: ['Food'],
    Name: 'Meal',
  },
};

export { CardContainer as default };
