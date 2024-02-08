import React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { register } from 'swiper/element/bundle'

import './index.css'
import { router } from './App'

import AuthProvider from './contexts/AuthContext'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
