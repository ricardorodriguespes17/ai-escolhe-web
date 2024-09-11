import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Card from "../components/Card"
import Logo from "../components/Logo"
import PasswordInput from "../components/PasswordInput"
import TextInput from "../components/TextInput"
import useUserStore from "../store/userStore"
import { useEffect } from "react"

const LoginPage = () => {
  const navigate = useNavigate()
  const { user, setUser } = useUserStore(state => state)

  useEffect(() => {
    if (user)
      navigate("/inicio")
  }, [user])

  const handleLogin = () => {
    setUser({
      id: "1u1ojdi1jj10",
      createdAt: new Date(),
      email: "ricardo@aiescolhe.com",
      favorities: [],
      name: "Ricardo",
      surname: "Rodrigues",
      imageURL: "https://s2-techtudo.glbimg.com/LqCsNg5Gm6kHKW1sYFcYWQv3iJE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/1/e/GnvAPGSxmBICtAeFB2vA/cristiano-ronaldo-instagram.jpg",
      preferences: {
        autoSave: false,
        reciveEmail: false,
        theme: "light"
      }
    })
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-background-light">
      <Card className="w-[450px] max-w-[85%] items-center">
        <Logo size="lg" />

        <TextInput
          label="Email"
          type="email"
        />

        <PasswordInput
          label="Senha"
        />

        <Button className="w-full" onClick={handleLogin}>
          Entrar
        </Button>
      </Card>
    </div>
  )
}

export default LoginPage