import React from 'react';
import useInterval from '../../@utils/useInterval';

// This compoent is for triggering an setInverval() conditionally.
const IntervalWrapper = ({ callback, interval } : { callback: () => void; interval: number }) => {
  useInterval(callback, interval);

  return null;
};

export default IntervalWrapper;
