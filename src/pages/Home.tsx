import RecipeContainer from "../components/RecipesContainer"
import SideContainer from "../components/SideContainer"

const HomePage = () => {
  return (
    <div className="flex flex-col h-full md:flex-row justify-center gap-6">
      <SideContainer />

      <div className="flex flex-col gap-6">
        <RecipeContainer />
      </div>
    </div>
  )
}

export default HomePage