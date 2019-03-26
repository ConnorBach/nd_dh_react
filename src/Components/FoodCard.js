import React from 'react';
import './FoodCard.css';
import PropTypes from 'prop-types';

const FoodCard = ({ food }) => (
  <div className="card">
    <div className="container">{food.toString()}</div>
  </div>
);

FoodCard.propTypes = {
  food: PropTypes.string,
};

FoodCard.defaultProps = {
  food: 'Food',
};

export { FoodCard as default };
