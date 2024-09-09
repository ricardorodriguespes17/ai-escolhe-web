import Header from "../components/Header"
import RecipeContainer from "../components/RecipesContainer"
import SideContainer from "../components/SideContainer"

const HomePage = () => {
  

  return (
    <div className="flex flex-col w-full h-full relative overflow-auto">
      <Header />

      <main className="flex flex-col md:flex-row h-auto flex-1 justify-center gap-6 px-4 pb-6 pt-20 bg-background-light">
        <SideContainer />

        <div className="flex flex-col gap-6">
          <RecipeContainer />
        </div>
      </main>
    </div>
  )
}

export default HomePage