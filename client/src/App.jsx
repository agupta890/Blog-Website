import React, {useContext, useEffect } from 'react'
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
import {AdminLayout} from './dashboard/AdminLayout'
import {AllBlogs} from './dashboard/AllBlogs'
import {CreateBlog} from './dashboard/CreateBlog'
import {Users} from './dashboard/Users'
import {ContactInfo} from './dashboard/ContactInfo'
import {EditBlog} from './pages/EditBlog'
import {AuthContext}  from './context/AuthContext'
import { useNavigate } from 'react-router-dom'



 const App = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {

    if (user?.role === "admin") {
      navigate("/admin");
    }

    if (user?.role === "user") {
      navigate("/");
    }

  }, [user]);
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
     <Route path='/edit/:id' element={<EditBlog/>}/>
     <Route path="/admin" element={<AdminLayout />}>

          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="users" element={<Users />} />
          <Route path="contact" element={<ContactInfo/>} />
          


        </Route>

     
    
     

   </Routes>
   <Toaster position="bottom-right" reverseOrder={false} />

   <Footer/>
   

        
     
   </>
  )
}
export default App