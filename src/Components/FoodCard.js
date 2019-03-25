import React from 'react';
import PropTypes from 'prop-types';

const FoodCard = ({ food }) => <div className="card">{food.toString()}</div>;

FoodCard.propTypes = {
  food: PropTypes.string,
};

FoodCard.defaultProps = {
  food: 'Food',
};

export { FoodCard as default };
