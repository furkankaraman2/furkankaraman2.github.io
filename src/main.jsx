import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

if (sessionStorage.redirect) {
  const redirected = new URL(sessionStorage.redirect)
  sessionStorage.removeItem('redirect')
  history.replaceState(null, '', `${redirected.pathname}${redirected.search}${redirected.hash}`)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>,
)
