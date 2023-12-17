import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PizzaContextProvider from './context/PizzaContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzaContextProvider>
    <App />
    </PizzaContextProvider>
  </React.StrictMode>,
)
