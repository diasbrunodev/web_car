import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { CarDetail } from './pages/Car'
import { Dashboard } from './pages/Dashboard'
import { New } from './pages/Dashboard/New'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/car/:id',
        element: <CarDetail />,
      },
      {
        path: '/dashboard',
        element: (
          <Private>
            <Dashboard />
          </Private>
        ),
      },
      {
        path: '/dashboard/new',
        element: (
          <Private>
            <New />
          </Private>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

export { router }
