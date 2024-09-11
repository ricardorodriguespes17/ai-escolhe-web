import Card from "../components/Card"
import RecipeContainer from "../components/RecipesContainer"

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full bg-secondary h-[180px] rounded-lg relative mb-[70px]">
        <div className="w-[150px] aspect-square rounded-full bg-gray absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2" />
      </div>

      <h1>Ricardo Rodrigues</h1>

      <div className="flex gap-3 w-full">
        <Card className="gap-2">
          <h2>Seus dados</h2>

          <p>28/05/1999</p>
          <p>ricardo@aiescolhe.com</p>
          <p>{"(77) 988776655"}</p>
        </Card>

        <div className="flex-[2] flex flex-col gap-2">
          <RecipeContainer />
          <RecipeContainer />
          <RecipeContainer />
        </div>

        <Card className="gap-2">
          <h2>Seus dados</h2>

          <p>28/05/1999</p>
          <p>ricardo@aiescolhe.com</p>
          <p>{"(77) 988776655"}</p>
        </Card>
      </div>
    </div>
  )
}

export default ProfilePage