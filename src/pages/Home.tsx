import FeedModelCard from "../components/FeedModelCard"
import RecipeCard from "../components/RecipeCard"
import SideContainer from "../components/SideContainer"

const HomePage = () => {
  return (
    <div className="flex flex-col h-full md:flex-row justify-center gap-6">
      <SideContainer />

      <div className="flex flex-1 flex-col gap-6">
        <FeedModelCard
          userName="Mariana Azevedo"
          time="a 2 horas"
        >
          <p>Acabei de fazer essa deliciosa receita de Macarrão à Carbonara. Amei!!!</p>

          <div className="bg-background-light p-2 rounded">
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
        </FeedModelCard>
      </div>
    </div>
  )
}

export default HomePage