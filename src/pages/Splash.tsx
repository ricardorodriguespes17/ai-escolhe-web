import { useEffect } from "react"
import Logo from "../components/Logo"
import { useNavigate } from "react-router-dom"

const SplashPage = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/login")
    }, 1500)
  }, [])

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Logo size="xl" className="animate-pulse max-w-full" />
    </div>
  )
}

export default SplashPage