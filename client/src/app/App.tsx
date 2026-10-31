import { RouterProvider } from 'react-router'
import { router } from './router/router'
import './styles/_index.scss'

export const App = () => {
  return <RouterProvider router={router} />
}
