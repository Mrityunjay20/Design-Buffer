import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorLayout from './layouts/ErrorLayout'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/Home'

function App() {
    const router = createBrowserRouter(
      [{
        path:'/',
        element:<RootLayout/>,
        errorElement:<ErrorLayout/>,
        children:[{
          index:true,
          element:<HomePage/>
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
