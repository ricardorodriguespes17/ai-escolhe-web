import { useEffect, useState } from "react"
import Button from "../components/Button"
import Card from "../components/Card"
import Header from "../components/Header"
import TextInput from "../components/TextInput"
import { RiAiGenerate } from "react-icons/ri"
import { BiPlus, BiTrash } from "react-icons/bi"
import { generateRecipe } from "../services/RecipeService"
import { RecipeType } from "../@types/RecipeTypes"
import GeneratedRecipes from "../components/GeneratePageComponents/GeneratedRecipes"

const GeneratePage = () => {
  const [ingredients, setIngredients] = useState([""])
  const [generateDisabled, setGenerateDisabled] = useState(true)
  const [recipes, setRecipes] = useState<RecipeType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setRecipes([])
    setGenerateDisabled(ingredients.filter(item => item).length < 2)
  }, [ingredients])

  const onSubmit = async () => {
    if (ingredients.length < 2) {
      console.log("Deve escrever pelo menos 2 ingredientes")
      return
    }


    try {
      setIsLoading(true)
      const response = await generateRecipe({ ingredients })
      setRecipes(response.data.recipes)
    } catch (err) {
      setRecipes([])
    } finally {
      setIsLoading(false)
    }
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

    if (ingredientsFiltered.length === 0) {
      ingredientsFiltered = [""]
    }

    setIngredients(ingredientsFiltered)
  }

  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <main className="flex flex-col h-auto flex-1 justify-center gap-6 px-4 pb-6 pt-20 bg-background-light">
        <Card className="flex-row items-center h-full">
          <div className="flex flex-col flex-1 h-full items-center gap-8">
            <h1>Escolha os ingredientes</h1>

            <div className="w-[300px] max-w-full flex flex-col gap-3">
              {ingredients.map((item, index) => (
                <div className="flex items-center gap-2">
                  <TextInput
                    value={item}
                    disabled={isLoading}
                    onChange={(event) => setIngredient(event.target.value, index)}
                  />

                  <Button
                    variant="plain"
                    size="sm"
                    className="text-2xl"
                    onClick={() => removeIngredient(index)}
                    disabled={isLoading}
                  >
                    <BiTrash />
                  </Button>
                </div>
              ))}

              <div className="flex items-center w-full gap-2">
                <Button
                  className="text-lg h-10 flex-1"
                  disabled={generateDisabled || isLoading}
                  title={generateDisabled ? "Escolha pelo menos dois ingredientes" : undefined}
                  onClick={onSubmit}
                >
                  Gerar receita
                  <RiAiGenerate />
                </Button>

                <Button
                  size="sm"
                  className="text-2xl"
                  onClick={addIngredient}
                  disabled={isLoading}
                >
                  <BiPlus />
                </Button>
              </div>
            </div>
          </div>

          <div className="h-full w-[1px] bg-gray" />

          <GeneratedRecipes
            recipes={recipes}
            isLoading={isLoading}
          />
        </Card>
      </main>
    </div>
  )
}

export default GeneratePage