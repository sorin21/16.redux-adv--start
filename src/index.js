import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// Simple custom middleware that logs
// each action we issue
const logger = store => {
  // Next is random name and this function 
  // let the action to continue its journey to reducer
  // This function will be executed by Redux
  return next => {
    // Here we can execute store, next and action
    return action => {
      console.log('[Middleware] Dispatching action', action);
      // This will let the action continue to the reducer
      // and to succed we need to pass the action as argument
      const result = next(action);
      //  getState is passed by redux thunk
      // so getState gets the current state
      // Next state is the updated state and 
      // is happening for every action we dispatch
      console.log('[Middleware] Next state(updated state) getState()', store.getState());
      return result;
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();