import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'

function App() {
  // hook 
  const [themeMode , setThemeMode] = useState("Light") ; 
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  // implementign the change in the theme 
  useEffect(()=>{
    const html = document.querySelector('html')
    html.classList.remove("light" , "dark")
    html.classList.add(themeMode)
  } , [themeMode])
  

  return (
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* {Theme button } */}
                      <ThemeButton/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* card  */}
                      <Card/>
                       
                    </div>
                </div>
    </div>
    </ThemeProvider>
  )
}

export default App
