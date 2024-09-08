import Logo from "../components/Logo"
import Button from "../components/Button"
import { FaLongArrowAltRight } from "react-icons/fa"

const SideContainer = () => {
  const ingridients = ["Bacon", "Ovos", "Macarrão", "Queijo", "Farinha"]
  const friends = ["Mariana", "Ana Caludia", "Thiago", "Vitor", "Ana Beatriz", "Rafa", "Adryellen"]

  return (
    <div className="flex flex-col gap-6 w-1/4 min-w-[200px] h-auto rounded-lg shadow-md bg-white p-6">
      <h1 className="text-primary">Olá, Ricardo</h1>

      <div className="flex flex-col gap-2">
        <h2>Utilizados recentemente</h2>

        <div className="flex flex-wrap gap-3">
          {ingridients.map(item => (
            <label>{item}</label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 h-fit">
        <h2>Seus amigos</h2>

        <div className="flex flex-wrap gap-3 h-fit">
          {friends.slice(0, 4).map(item => (
            <div className="flex flex-col justify-center items-center w-[100px]">
              <Logo mini size="sm" />
              <label>{item}</label>
            </div>
          ))}
        </div>

        <Button
          path="/perfil"
          variant="plain"
          className="flex items-center gap-2 p-0"
        >
          Ver todos
          <FaLongArrowAltRight />
        </Button>
      </div>
    </div>
  )
}

export default SideContainer