import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { HomePage } from './pages/HomePage'
import {BlogPage} from './pages/BlogPage'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Contact} from './pages/Contact'
import { Toaster } from "react-hot-toast";
import {SingleBlog} from './pages/SingleBlog'
 const App = () => {
  return (
   <>
   <Header/>
   <Routes>
     <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/blogs' element={<BlogPage/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/blogs/:id' element={<SingleBlog/>}/>

   </Routes>
   <Toaster position="bottom-right" reverseOrder={false} />

   <Footer/>
   </>
  )
}
export default App