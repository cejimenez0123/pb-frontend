import React,{useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import {Router} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer from './reducers/UserReducer'
import PageReducer from './reducers/PageReducer'
import LibraryReducer from './reducers/LibraryReducer'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {history} from "./history"
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({users: UserReducer,pages: PageReducer,libraries: LibraryReducer})
const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)))
ReactDOM.render(
  
  <Provider store={store}>   
    <React.StrictMode >
      <Router history={history}>
     <App />
     </Router>
    </React.StrictMode>   
  </Provider>
 ,
  document.getElementById('root')
);
export default store
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
