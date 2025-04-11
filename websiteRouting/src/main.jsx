import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github , {githubInfoFetch} from './components/Github/Github'

// const router = createBrowserRouter([
//     {
//         path : '/' , 
//         element : <Layout/> , 
//         children: [
//             {
//                 path:"" , 
//                 element: <Home/>
//             } ,
//             {
//                 path:"about" , 
//                 element: <About/> 
//             },
//             {
//                 path:"Contact" , 
//                 element: <Contact/> 
//             }
//         ]
//     }
// ])

const router  = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home /> }/>
            <Route path='/About' element={<About /> }/>
            <Route path='/Contact' element={<Contact /> }/>
            <Route path='/user/:userid' element={<User /> }/>
            <Route 
            loader= {githubInfoFetch}
            path='/Github' 
            element={<Github/>
            
             }/>

        </Route>
    )
)


createRoot(document.getElementById('root')).render(  
    <StrictMode>
        <RouterProvider router = {router} />
    </StrictMode>
 
)
