import { useEffect, useState } from "react"
import Card from "./Card"
import useRecipeStore from "../store/recipeSlice"

const SideContainer = () => {
  const generatedRecipes = useRecipeStore(state => state.generatedRecipes)
  const [ingridients, setIngredients] = useState<string[]>([])

  useEffect(() => {
    const ingredients: string[] = []

    generatedRecipes.map(recipe => {
      recipe.ingredients.map(item => {
        ingredients.push(item.name)
      })
    })

    setIngredients(ingredients)
  }, [generatedRecipes])

  return (
    <Card className="md:w-1/4 md:min-w-[200px]">
      <h1 className="text-primary">Olá, Ricardo</h1>

      {ingridients.length === 0 && (
        <p>Aqui aparecerá suas receitas geradas e os ingredientes utilizados recentemente</p>
      )}

      {ingridients.length > 0 && (
        <div className="flex flex-col gap-2 items-center">
          <h2>Utilizados recentemente</h2>

          <div className="flex justify-center md:justify-normal flex-wrap gap-3">
            {ingridients.slice(0, 5).map(item => (
              <label>{item}</label>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

export default SideContainer