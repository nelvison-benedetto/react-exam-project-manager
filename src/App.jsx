import { useState } from 'react'
import './App.css'
import GlobalProvider from './contexts/GlobalProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  //da react-router-dom not react-router!
import Layout1 from './layouts/Layout1'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element = {<Layout1/>}>
              <Route path='/' element = {<HomePage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
