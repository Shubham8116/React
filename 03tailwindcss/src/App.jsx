import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myobj={
  state:"maha",
  pin:1234
}
  return (
    <>
    <h1 className='bg-amber-600 text-amber-50 rounded-xl p-4'>Tailwind css</h1>
    <Card username="From India" btntxt="click me" obj={myobj}/> {/* sending props*/ }
    <Card username="From US" btntxt="visit me"/>
     </>
  )
}

export default App
