// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'
import 'core-js/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import App from './app'

const history = createBrowserHistory()
console.log(history)
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
