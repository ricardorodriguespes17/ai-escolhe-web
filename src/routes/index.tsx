import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "../pages/Home"
import GeneratePage from "../pages/Generate"
import PrivateRoute from "./PrivateRoute"
import ProfilePage from "../pages/Profile"

const browserRouter = createBrowserRouter([
  {
    path: "/home",
    element: <PrivateRoute component={HomePage} />
  },
  {
    path: "/gerar",
    element: <PrivateRoute component={GeneratePage} />
  },
  {
    path: "/perfil",
    element: <PrivateRoute component={ProfilePage} />
  }
])

const Router = () => (<RouterProvider router={browserRouter} />)

export default Router