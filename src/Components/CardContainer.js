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
      children.push(<FoodCard food={food} />);
    });
    return children;
  }

  render() {
    const { menu } = this.state;
    return <div>{menu ? this.buildMenu() : null}</div>;
  }
}

CardContainer.propTypes = {
  menu: PropTypes.shape,
};

CardContainer.defaultProps = {
  menu: { Start: 0, End: 0, Menu: ['Food'] },
};

export { CardContainer as default };
