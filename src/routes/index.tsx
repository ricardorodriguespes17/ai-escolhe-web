import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "../pages/Home"
import GeneratePage from "../pages/Generate"
import PrivateRoute from "./PrivateRoute"
import ProfilePage from "../pages/Profile"
import LoginPage from "../pages/Login"
import SplashPage from "../pages/Splash"

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />
  },
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
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])

const Router = () => (<RouterProvider router={browserRouter} />)

export default Router