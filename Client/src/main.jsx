import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Credentials/Login.jsx'
import Register from './components/Credentials/Register.jsx'
import SingleBlog from './components/SingleBlog.jsx'
import Write from './components/Write.jsx';
import AllBlogs from './components/AllBlogs.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { UserContextProvider } from './Context/UserContext';
import { BlogContextProvider } from './Context/BlogsContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/allBlogs' element={<AllBlogs />} />
      <Route path='/blog/:id' element={<SingleBlog />} />
      <Route path='/write' element={<Write />} />
    </Route>

  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <BlogContextProvider>
    <UserContextProvider>
      <RouterProvider router={router}>
        <React.StrictMode>
        </React.StrictMode>,
      </RouterProvider>
    </UserContextProvider>
  </BlogContextProvider >

)
