import { Navigate } from "react-router-dom"
import BaseLayout from "../components/BaseLayout"
import useUserStore from "../store/userStore"

type PrivateRouteProps = {
  component: React.ComponentType,
  path?: string
}

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  const currentUser = useUserStore(state => state.user)

  return currentUser
    ? (<BaseLayout><Component /></BaseLayout>)
    : <Navigate to="/login" replace />
}

export default PrivateRoute