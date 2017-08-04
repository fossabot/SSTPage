import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import thunk from 'redux-thunk'

import { createInitState, reducer } from '../modules/store'

import App from './components/App/App'

const store = createStore(
  reducer,
  createInitState(window && window.__pageData || null),
  applyMiddleware(thunk)
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
),document.querySelector('#root'));