import { BiPlus, BiTrash } from "react-icons/bi"
import Button from "../Button"
import { RiAiGenerate } from "react-icons/ri"
import { useEffect, useState } from "react"
import TextInput from "../TextInput"
import { generateRecipe } from "../../services/RecipeService"
import { RecipeType } from "../../@types/RecipeTypes"

type ChoiceIngredientsProps = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  setRecipes: (recipes: RecipeType[]) => void
}

const ChoiceIngredients = ({ isLoading, setIsLoading, setRecipes }: ChoiceIngredientsProps) => {
  const [ingredients, setIngredients] = useState([""])
  const [generateDisabled, setGenerateDisabled] = useState(true)

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
    <div className="flex flex-col flex-1 h-full items-center gap-8 w-full">
      <h1>Escolha os ingredientes</h1>

      <div className="w-[300px] max-w-full flex flex-col gap-3">
        {ingredients.map((item, index) => (
          <div className="flex items-center gap-2 w-full">
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
  )
}

export default ChoiceIngredients