import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import UserReducer from './reducers/UserReducer'
import PageReducer from './reducers/PageReducer'
import LibraryReducer from './reducers/LibraryReducer'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({users: UserReducer,pages: PageReducer,libraries: LibraryReducer})
const store = createStore(rootReducer,compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>   
    <React.StrictMode >
     <App />
    </React.StrictMode>   
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
