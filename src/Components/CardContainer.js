import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FoodCard from './FoodCard';
import { fuzzySearchSort } from '../utils/fuzzySearching';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buildMenu = this.buildMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { menu } = nextProps;
    this.setState({ menu });
  }

  buildMenu(menu) {
    const { searchText } = this.props;
    let renderMenu = menu.Menu.slice();
    if (searchText !== '') {
      renderMenu = fuzzySearchSort(searchText, renderMenu, 12);
      console.log('renderMenu', renderMenu);
    }
    const children = [];
    renderMenu.forEach((food) => {
      children.push(<FoodCard key={food.toString()} food={food} />);
    });
    return children;
  }

  render() {
    const { menu } = this.props;
    return <div>{menu ? this.buildMenu(menu) : null}</div>;
  }
}

CardContainer.propTypes = {
  menu: PropTypes.shape({
    Name: PropTypes.string,
    Start: PropTypes.string,
    End: PropTypes.string,
    Menu: PropTypes.array,
  }),
  searchText: PropTypes.string,
};

CardContainer.defaultProps = {
  menu: {
    Start: '0',
    End: '0',
    Menu: ['Food'],
    Name: 'Meal',
  },
  searchText: '',
};

export { CardContainer as default };
