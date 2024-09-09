import { FaArrowDown } from "react-icons/fa"
import Loading from "../Loading"
import RecipeCard from "../RecipeCard"
import useRecipeStore from "../../store/recipeSlice"

type GeneratedRecipesProps = {
  isLoading?: boolean
}

const GeneratedRecipes = ({ isLoading }: GeneratedRecipesProps) => {
  const recipes = useRecipeStore(state => state.generatedRecipes)

  if (isLoading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div className="w-20 max-w-full">
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 h-full items-center gap-2">
      {recipes.length === 0 ? (
        <>
          <h1>Suas receitas geradas aparecerão aqui</h1>
          <FaArrowDown className="mb-8" />
        </>
      ) : (
        <h1 className="mb-4 w-full text-center">Receitas geradas</h1>
      )}

      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.id}
          title={recipe.name}
          subTitle={recipe.description}
          rating={4}
          favorited={false}
        />
      ))}
    </div>
  )
}

export default GeneratedRecipes