import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {reducer} from './reducer/reducer'
import { Provider } from 'react-redux'
import {createStore} from 'redux'

if(localStorage.getItem('comentarios') == null)
      localStorage.setItem('comentarios',JSON.stringify([]))
let initialState={
      currentIndex :-1,
      post:JSON.parse(localStorage.getItem('comentarios'))
  }

var store = createStore(reducer,initialState)

ReactDOM.render(
  <Provider
     store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);