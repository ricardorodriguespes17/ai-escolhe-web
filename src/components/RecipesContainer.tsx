import Card from "./Card"
import RecipeCard from "./RecipeCard"

const RecipeContainer = () => {
  return (
    <Card>
      <h1>Receitas geradas</h1>

      <div className="flex flex-col flex-1 gap-4">
        <RecipeCard
          recipe={{
            id: "1",
            name: "Macarrão à Carbonara",
            description: "Um clássico italiano feito com bacon, ovos e macarrão para uma refeição cremosa e saborosa.",
            categories: [],
            ingredients: [],
            kitchenware: [],
            preparationTime: 10,
            steps: []
          }}
        />
      </div>
    </Card>
  )
}

export default RecipeContainer