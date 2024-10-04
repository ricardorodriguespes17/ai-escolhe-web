import { useState } from "react"
import Card from "./Card"

const SideContainer = () => {
  const [ingridients] = useState([])

  return (
    <Card className="md:w-1/4 md:min-w-[200px]">
      <h1 className="text-primary">Olá, Ricardo</h1>

      <p>Aqui aparecerá suas receitas geradas e os ingredientes utilizados recentemente</p>

      {ingridients.length > 0 && (
        <div className="flex flex-col gap-2 items-center">
          <h2>Utilizados recentemente</h2>

          <div className="flex justify-center md:justify-normal flex-wrap gap-3">
            {ingridients.map(item => (
              <label>{item}</label>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

export default SideContainer