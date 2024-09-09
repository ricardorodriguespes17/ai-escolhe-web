import { useState } from "react"
import Card from "../components/Card"
import Header from "../components/Header"
import { RecipeType } from "../@types/RecipeTypes"
import GeneratedRecipes from "../components/GeneratePageComponents/GeneratedRecipes"
import ChoiceIngredients from "../components/GeneratePageComponents/ChoiceIngredients"

const GeneratePage = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <main className="flex flex-col h-auto flex-1 justify-center gap-6 px-4 pb-6 pt-20 bg-background-light">
        <Card className="flex-col md:flex-row items-center h-full">
          <ChoiceIngredients
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setRecipes={setRecipes}
          />

          <div className="w-full h-[1px] md:h-full md:w-[1px] bg-gray" />

          <GeneratedRecipes
            recipes={recipes}
            isLoading={isLoading}
          />
        </Card>
      </main>
    </div>
  )
}

export default GeneratePage