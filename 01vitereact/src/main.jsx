import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// const user="shubham";  // global varible

// //creating element by react method
// const reactElement=React.createElement(
//   'a',
//   {href:'http://www.google.com',target:'_blank'},
//   'Click here',
//   user    //use of global variable
// )
// createRoot(document.getElementById('root')).render(
// reactElement
// );