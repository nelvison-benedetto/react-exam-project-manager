import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlobalProvider from './contexts/GlobalProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  //da react-router-dom not react-router!


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element = {<Layout1/>}>
              <Route path='/' element = {<Home/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
