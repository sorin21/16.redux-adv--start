export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// receive any payload you pass to action
export const increment = () => {
  // return the action
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  // return the action
  return {
    type: DECREMENT
  }
}
export const add = (value) => {
  // return the action
  return {
    type: ADD,
    val: value
  }
}
export const substract = (value) => {
  // return the action
  return {
    type: SUBTRACT,
    val: value
  }
}

export const saveResult = (res) => {
  // return the action
  return {
    type: STORE_RESULT,
    result: res
  }
}
export const storeResult = (res) => {
  // dispatch commes from redux thunk
  return (dispatch) => {
    setTimeout(() => {
      // dispatch an action that will update the state
      // res is the payload
      dispatch(storeResult(res));
    }, 2000);
  }
  
  
}
export const deleteResult = (resElId) => {
  // return the action
  return {
    type: DELETE_RESULT,
    resultElId: resElId
  }
}