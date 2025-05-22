import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-center text-white my-4 font-medium ' >Password Generator</h1>
      <h1 className='text-3xl text-white bg-black mt-6 font-normal'>Welcome to the Password Generator. Here you can generate password with combination of numbers and characters with customized length.</h1>
    </>
  )
}

export default App
