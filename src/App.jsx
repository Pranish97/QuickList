import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import AppLayout from "./layouts/AppLayout"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Shop from "./pages/Shop"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop/>} /> 
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} /> 
      <Route path="dashboard" element={<Dashboard />} /> 
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
