import Button from "./Button"
import Logo from "./Logo"

type HeaderProps = {

}

const Header = ({ }: HeaderProps) => {
  return (
    <header className="h-16 w-full flex items-center justify-between shadow-sm px-4">
      <Logo />

      <div className="flex items-center gap-2">
        <Button variant="plain" path="/home">
          Home
        </Button>
        <Button variant="plain" path="/gerar">
          Gerar receita
        </Button>
        <Button variant="plain" path="/perfil">
          Perfil
        </Button>
      </div>
    </header>
  )
}

export default Header