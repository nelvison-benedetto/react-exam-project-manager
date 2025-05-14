import { useState } from 'react'
import './App.css'
import GlobalProvider from './contexts/GlobalProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  //da react-router-dom not react-router!
import Layout1 from './layouts/Layout1'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import PersonsPage from './pages/PersonsPage'
import CompaniesPage from './pages/CompaniesPage'
import ProjectsPage from './pages/ProjectsPage'
import TasksPage from './pages/TasksPage'
import MessagesPage from './pages/MessagesPage'

import PersonShowPage from './pages/PersonShowPage'
import CompanyShowPage from './pages/CompanyShowPage'
import ProjectShowPage from './pages/ProjectShowPage'
import TaskShowPage from './pages/TaskShowPage'
import MessageShowPage from './pages/MessageShowPage'

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
              <Route path="/persons/:id" element={<PersonShowPage />} />

              <Route path='/companies' element = {<CompaniesPage/>} />
              <Route path="/companies/:id" element={<CompanyShowPage />} />
              

              <Route path='/projects' element = {<ProjectsPage/>} />
              <Route path="/projects/:id" element={<ProjectShowPage />} />

              <Route path='/tasks' element = {<TasksPage />} />
              <Route path="/tasks/:id" element={<TaskShowPage />} />

              <Route path='/messages' element = {<MessagesPage/>} />
              <Route path="/messages/:id" element={<MessageShowPage />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
