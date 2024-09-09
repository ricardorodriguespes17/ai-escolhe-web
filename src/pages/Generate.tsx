import Card from "../components/Card"
import Header from "../components/Header"
import GeneratedRecipes from "../components/GeneratePageComponents/GeneratedRecipes"
import ChoiceIngredients from "../components/GeneratePageComponents/ChoiceIngredients"

const GeneratePage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <main className="flex flex-col h-full flex-1 justify-center gap-6 px-4 pb-6 pt-20 bg-background-light">
        <Card className="flex-col md:flex-row items-center h-full overflow-auto">
          <ChoiceIngredients />

          <div className="flex-none w-full h-[1px] md:h-full md:w-[1px] bg-gray" />

          <GeneratedRecipes />
        </Card>
      </main>
    </div>
  )
}

export default GeneratePage