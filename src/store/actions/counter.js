import * as actionsTypes from './actionsTypes';

// receive any payload you pass to action
export const increment = () => {
  // return the action
  return {
    type: actionsTypes.INCREMENT
  };
};
export const decrement = () => {
  // return the action
  return {
    type: actionsTypes.DECREMENT
  };
};
export const add = value => {
  // return the action
  return {
    type: actionsTypes.ADD,
    val: value
  };
};
export const substract = value => {
  // return the action
  return {
    type: actionsTypes.SUBTRACT,
    val: value
  };
};
