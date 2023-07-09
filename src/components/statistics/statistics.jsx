import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsWrapper } from './statistics.styled';

export const Statistics = ({ feedback, total, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <StatisticsWrapper>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
