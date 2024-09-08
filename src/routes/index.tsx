import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "../pages/Home"

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
])

const Router = () => (<RouterProvider router={browserRouter} />)

export default Router