import Card from "../components/Card"
import GeneratedRecipes from "../components/GeneratePageComponents/GeneratedRecipes"
import ChoiceIngredients from "../components/GeneratePageComponents/ChoiceIngredients"

const GeneratePage = () => {
  return (
    <div className="flex flex-col h-full flex-1 justify-center gap-6">
      <Card className="flex-col md:flex-row items-center h-full overflow-auto">
        <ChoiceIngredients />

        <div className="flex-none w-full h-[1px] md:h-full md:w-[1px] bg-gray" />

        <GeneratedRecipes />
      </Card>
    </div>
  )
}

export default GeneratePage