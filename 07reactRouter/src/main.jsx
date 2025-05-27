import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './layout'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import User from './components/User/user'
import Github, { gitHubInfoLoader } from './components/GitHUb/Github'

//1st method
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

//2nd method

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route loader={gitHubInfoLoader} path='github' element={<Github />}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
