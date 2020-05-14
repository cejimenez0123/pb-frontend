import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
const rootReducer = combineReducers({users: UserReducer})
const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode >
     <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
