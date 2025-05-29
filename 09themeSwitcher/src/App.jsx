import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme';
import { useEffect } from 'react';
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';

function App() {
  const [themeMode,setThemeMode]=useState("light");

  const lightTheme= ()=> {
    setThemeMode("light");
  }

  const darkTheme= ()=> {
    setThemeMode("dark");
  }

// actual change in theme from dark to light or vice versa
  useEffect(()=>
  {
    document.querySelector('html').classList.remove('light','dark');//first remove light or dark classes, since we have not used light so only dark class will be removed.
    document.querySelector('html').classList.add(themeMode);//adding dark or light class

  },[themeMode])

  return (

    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
     </ThemeProvider>

  )
}

export default App
