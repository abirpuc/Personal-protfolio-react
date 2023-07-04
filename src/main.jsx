import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/sharecomponents/Navbar.jsx'
import Hero from './components/sharecomponents/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    {/* <App /> */}
  </React.StrictMode>,
)
