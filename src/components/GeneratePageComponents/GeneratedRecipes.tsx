import { FaArrowDown } from "react-icons/fa"
import { RecipeType } from "../../@types/RecipeTypes"
import Loading from "../Loading"
import RecipeCard from "../RecipeCard"

type GeneratedRecipesProps = {
  recipes: RecipeType[]
  isLoading?: boolean
}

const GeneratedRecipes = ({ recipes, isLoading }: GeneratedRecipesProps) => {
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
          <FaArrowDown />
        </>
      ) : (
        <h1 className="mb-4 w-full text-center">Receitas geradas</h1>
      )}

      {recipes.map(recipe => (
        <RecipeCard
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