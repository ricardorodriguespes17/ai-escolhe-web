import { useEffect, useState } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import Header from "../components/Header"
import TextInput from "../components/TextInput"
import { RiAiGenerate } from "react-icons/ri"
import { BiPlus, BiTrash } from "react-icons/bi"

const GeneratePage = () => {
  const [ingredients, setIngredients] = useState([""])
  const [generateDisabled, setGenerateDisabled] = useState(true)

  useEffect(() => {
    setGenerateDisabled(ingredients.filter(item => item).length < 2)
  }, [ingredients])

  const onSubmit = () => {
    if(ingredients.length < 2) {
      console.log("Deve escrever pelo menos 2 ingredientes")
      return
    }

    console.log(ingredients)
  }

  const setIngredient = (newValue: string, index: number) => {
    setIngredients(ingredients.map((ingredient, i) => {
      if (i === index) return newValue
      return ingredient
    }))
  }

  const addIngredient = () => {
    setIngredients(ingredients.concat(""))
  }

  const removeIngredient = (index: number) => {
    let ingredientsFiltered = ingredients.filter((_, i) => i !== index)

    if(ingredientsFiltered.length === 0) {
      ingredientsFiltered = [""]
    }

    setIngredients(ingredientsFiltered)
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <main className="flex flex-col h-auto flex-1 justify-center gap-6 px-4 pb-6 pt-20 bg-background-light">
        <Card className="flex-row items-center h-full">
          <div className="flex flex-col flex-1 h-full items-center justify-center gap-8">
            <h1>Escolha os ingredientes</h1>

            <div className="w-[300px] max-w-full flex flex-col gap-3">
              {ingredients.map((item, index) => (
                <div className="flex items-center">
                  <TextInput
                    value={item}
                    onChange={(event) => setIngredient(event.target.value, index)}
                  />

                  <Button
                    variant="plain"
                    size="sm"
                    className="text-2xl"
                    onClick={() => removeIngredient(index)}
                  >
                    <BiTrash />
                  </Button>
                </div>
              ))}
            </div>

            <Button
              size="sm"
              className="text-2xl"
              onClick={addIngredient}
            >
              <BiPlus />
            </Button>
          </div>

          <div className="h-full w-[1px] bg-gray" />

          <div className="flex flex-col flex-1 h-full items-center justify-center gap-2">
            <Button
              variant="plain"
              size="sm"
              disabled={generateDisabled}
              title={generateDisabled ? "Escolha pelo menos dois ingredientes" : undefined}
              onClick={onSubmit}
            >
              <RiAiGenerate size={28} />
            </Button>
            <h2
              className={generateDisabled ? "opacity-50" : ""}
            >
              Gerar receita
            </h2>
          </div>
        </Card>
      </main>
    </div>
  )
}

export default GeneratePage