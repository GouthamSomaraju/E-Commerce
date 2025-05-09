import React, { createContext, useContext, useState } from 'react'


let ThemeContext=createContext()

export const useTheme=()=>useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    let [theme,setTheme]=useState('light')

    let themeToggle=()=>{
        setTheme(prev=>(prev==='light'?'dark':'light'))
    }
    let value={theme,themeToggle}
    
  return (
    <ThemeContext.Provider value={value}>
        <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider


