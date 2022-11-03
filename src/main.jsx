import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { getFirebase } from './firebase/config'

getFirebase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)
