import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginRedirector from './components/LoginRedirector'
import ErrorLayout from './layouts/ErrorLayout'
import RootLayout from './layouts/RootLayout'
import DashboardPage from './pages/Dashboard'
import HomePage from './pages/Home'
import LoginPage from './pages/LoginPage'


function App() {
    const router = createBrowserRouter(
      [{
        path:'/',
        element:<RootLayout/>,
        errorElement:<ErrorLayout/>,
        children:[{
          index:true,
          element:<HomePage/>
        },
        {
          path:'/dashboard',
          element:<LoginRedirector/>
        },
        {
          path:'/login',
          element:<LoginPage/>
        },
        {
          path:'/dashboard/:pathParam',
          element:<DashboardPage/>
        }]
      }]
    )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
