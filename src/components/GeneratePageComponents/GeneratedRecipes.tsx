import { FaArrowDown } from "react-icons/fa"
import Loading from "../Loading"
import RecipeCard from "../RecipeCard"
import useRecipeStore from "../../store/recipeSlice"
import { useState } from "react"
import { RecipeType } from "../../@types/RecipeTypes"
import ModalOpenRecipe from "./ModalOpenRecipe"

const GeneratedRecipes = () => {
  const { isLoading, generatedRecipes } = useRecipeStore(state => state)
  const [openedRecipe, setOpenedRecipe] = useState<RecipeType>()

  if (isLoading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="w-20 max-w-full">
          <Loading />
        </div>
      </div>
    )
  }

  const handleOpenRecipe = (recipe: RecipeType) => {
    setOpenedRecipe(recipe)
  }

  const handleCloseRecipe = () => {
    setOpenedRecipe(undefined)
  }

  return (
    <div className="flex flex-col flex-1 h-full items-center gap-2 relative">
      {generatedRecipes.length === 0 ? (
        <>
          <h1>Suas receitas geradas aparecerão aqui</h1>
          <FaArrowDown className="mb-8" />
        </>
      ) : (
        <h1 className="mb-4 w-full text-center">Receitas geradas</h1>
      )}

      {generatedRecipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          title={recipe.name}
          subTitle={recipe.description}
          rating={4}
          favorited={false}
          onOpen={() => handleOpenRecipe(recipe)}
        />
      ))}

      <ModalOpenRecipe
        recipe={openedRecipe}
        onClose={handleCloseRecipe}
      />
    </div>
  )
}

export default GeneratedRecipes