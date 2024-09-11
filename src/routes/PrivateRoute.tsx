import { Navigate } from "react-router-dom"
import BaseLayout from "../components/BaseLayout"

type PrivateRouteProps = {
  component: React.ComponentType,
  path?: string
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const currentUser = true

  return currentUser
    ? (<BaseLayout><Component /></BaseLayout>)
    : <Navigate to="/login" replace />
}

export default PrivateRoute