import { StrictMode } from 'react'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import router from './components/routes/routes.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
 
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

 
)
