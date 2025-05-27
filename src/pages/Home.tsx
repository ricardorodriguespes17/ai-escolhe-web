import Card from "../components/Card"
import RecipeCard from "../components/RecipeCard"
import SideContainer from "../components/SideContainer"
import useRecipeStore from "../store/recipeSlice"

const HomePage = () => {
  const generatedRecipes = useRecipeStore(state => state.generatedRecipes)

  return (
    <div className="flex flex-col h-full md:flex-row justify-center gap-6">
      <SideContainer />

      <div className="flex flex-1 flex-col gap-6">
        <Card className="gap-4">
          {generatedRecipes.length === 0 && (
            <div className="flex flex-col gap-1">
              <strong>Não há receitas geradas recentemente, vamos começar?</strong>
              <p>Clique em <span className="text-primary">Gerar receita</span> no topo da página</p>
            </div>
          )}

          {generatedRecipes.map(item => (
            <RecipeCard
              key={item.id}
              recipe={item}
            />
          ))}
        </Card>
      </div>
    </div>
  )
}

export default HomePage