import * as actionsTypes from './actionsTypes';

export const saveResult = (res) => {
  // const updatedResult = res * 2;
  // return the action
  return {
    type: actionsTypes.STORE_RESULT,
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
    type: actionsTypes.DELETE_RESULT,
    resultElId: resElId
  }
}