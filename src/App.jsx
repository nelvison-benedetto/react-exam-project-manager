import { useState } from 'react'
import './App.css'
import GlobalProvider from './contexts/GlobalProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  //da react-router-dom not react-router!
import Layout1 from './layouts/Layout1'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import PersonsPage from './pages/PersonsPage'
import CompaniesPage from './pages/CompaniesPage'

function App() {

  return (
    <>

      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element = {<Layout1/>}>
              <Route path='/' element = {<HomePage/>} />
              <Route path='/users' element = {<UsersPage/>} />
              <Route path='/persons' element = {<PersonsPage/>} />
              <Route path='/companies' element = {<CompaniesPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
