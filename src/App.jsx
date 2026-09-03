import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import WhyElva from './pages/WhyElva'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'why-elva', element: <WhyElva /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
