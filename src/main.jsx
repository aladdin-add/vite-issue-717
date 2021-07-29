import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import * as consts from './consts';

consts.bar = 'bar'; // error here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
