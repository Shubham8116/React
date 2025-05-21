import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const [counter,setCounter]= useState(15)

 const addValue=()=>{
  if(counter<25)
  setCounter(counter+1)
  /*setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)
  setCounter(counter=>counter+1)*/
  

 }

 const removeValue=()=>{
  if(counter>0)
  setCounter(counter-1)
 }
  return (
    <>
      <h1>Welcome to counter changer</h1>
      <h2>Counter value is {counter}</h2>
      <button onClick={addValue}>Increament counter  {counter}</button>
      <br/>
      <button onClick={removeValue}>Decreament counter  {counter}</button>
    </>
  )
}

export default App
