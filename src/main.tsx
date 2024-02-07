import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './App'

import AuthProvider from './contexts/AuthContext'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
