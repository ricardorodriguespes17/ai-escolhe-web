import { HiHome } from "react-icons/hi"
import Button from "./Button"
import Logo from "./Logo"
import { useMediaQuery } from 'react-responsive'
import { RiAiGenerate } from "react-icons/ri"
import { FaUser } from "react-icons/fa"

type HeaderProps = {

}

const Header = ({ }: HeaderProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 670px)' })

  return (
    <header className="min-h-16 w-full flex items-center justify-between shadow-sm px-4 fixed bg-white">
      <Logo mini={isMobile} />

      <div className="flex items-center gap-2">
        <Button variant="plain" path="/home">
          {isMobile ? <HiHome size={24} /> : "Home"}
        </Button>
        <Button variant="plain" path="/gerar">
          {isMobile ? <RiAiGenerate size={24} /> : "Gerar receita"}
        </Button>
        <Button variant="plain" path="/perfil">
          {isMobile ? <FaUser size={24} /> : "Perfil"}
        </Button>
      </div>
    </header>
  )
}

export default Header