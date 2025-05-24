import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength]=useState(8);
  const [useNum, setUseNum]=useState(false);
  const [useChar,setUseChar]=useState(false);
  const [password,setPassword]=useState("");

  const passwordRef=useRef(null);

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(useNum)
      str+="0123456789"
    if(useChar)
      str+="!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=length;i++)
    {
      let index=Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(index)
      console.log(index)
    }
    setPassword(pass);
  }

,[length,useNum,useChar,setPassword])

const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password)

},

[password])

  useEffect(()=>{
    passwordGenerator()
  },
  [length,useNum,useChar,passwordGenerator])


  return (
    <>
    <div className='w-full h-full  rounded-lg '>
      <h1 className='text-4xl text-center text-white my-4 font-medium ' >Password Generator</h1>
      <h1 className='text-3xl text-white bg-black mt-6 font-normal'>Welcome to the Password Generator. Here you can generate password with combination of numbers and characters with customized length.</h1>
      <div className='flex shadow rounded-lg mt-10  bg-amber-300 justify-center space-x-16'>
       <input type="text" value={password} placeholder='password' readOnly ref={passwordRef}
       className='outline-none w-130 py-2 px-2 mt-4 mb-4 bg-white rounded-2xl text-3xl'>
       </input>
       <button className='bg-blue-800 text-white rounded-3xl p-4 mt-4 mb-4 text-2xl'
       onClick={copyPasswordToClipBoard}>copy</button>
      </div>
      <div className='flex text-3xl gap-x-10 mt-8 w-3xl ml-56 bg-amber-300 justify-center rounded-2xl'>
        <div className='flex  gap-x-8'>
          <input type='range' max={30} min={8} value={length} 
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}>
          </input>
            <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-8'>
          <input type='checkbox' defaultChecked={useNum} onChange={()=>setUseNum((prev)=>!prev)}>
          </input>
          <label> Numbers</label>
        </div>
        <div className='flex items-center gap-x-8'>
        <input type='checkbox' defaultChecked={useChar} onChange={()=>{setUseChar((prev)=>!prev)}}>
          </input>
          <label> Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
