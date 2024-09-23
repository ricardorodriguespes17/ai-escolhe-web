import { RecipeType } from "../../@types/RecipeTypes"
import Button from "../Button"

type ModalOpenRecipeProps = {
  recipe?: RecipeType
  onClose?: () => void
}

const ModalOpenRecipe = ({ recipe, onClose }: ModalOpenRecipeProps) => {
  if (!recipe) {
    return <></>
  }

  return (
    <div className="fixed z-10 w-screen h-screen top-0 left-0 bg-black/10 flex justify-center items-center">
      <div className="bg-white w-[450px] max-w-full max-h-[90%] py-10 px-8 flex flex-col items-center rounded gap-3 overflow-auto">
        <h2>{recipe.name}</h2>
        <div className="flex">
          <Button variant="plain">Salvar</Button>
          <Button variant="plain">Compartilhar</Button>
          <Button variant="plain" onClick={onClose}>Fechar</Button>
        </div>
        <p className="text-secondaryText text-center">{recipe.description}</p>

          <div className="flex flex-col gap-2 w-full">
            <h3>Ingredientes</h3>
            <div className="flex flex-col gap-1">
              {recipe.ingredients.map(item => (
                <p key={item.name} className="rounded-sm">
                  - {item.quantity} de <strong>{item.name}</strong>
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h3>Materiais</h3>
            <div className="flex flex-col gap-1">
              {recipe.kitchenware.map(item => (
                <p key={item} className="rounded-sm">
                  <p>- {item}</p>
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h3>Preparo</h3>
            <div className="flex flex-col gap-2">
              {recipe.steps.map((item, index) => (
                <div key={item} className="rounded-sm flex gap-3">
                  <div className="flex justify-center items-center h-6 aspect-square rounded-full bg-primary text-white">
                    {index + 1}
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default ModalOpenRecipe