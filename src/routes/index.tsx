import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "../pages/Home"
import GeneratePage from "../pages/Generate"

const browserRouter = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/gerar",
    element: <GeneratePage />
  }
])

const Router = () => (<RouterProvider router={browserRouter} />)

export default Router