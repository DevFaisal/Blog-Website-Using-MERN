import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/Credentials/Login.jsx'
import Register from './components/Credentials/Register.jsx'
import Post from './components/Post.jsx'

const user = true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/login' element={<Login />} />
      <Route path='/regsiter' element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path='/post' element={<Post />} />
    </Route>
  ))


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
    <React.StrictMode>
    </React.StrictMode>,
  </RouterProvider>

)
