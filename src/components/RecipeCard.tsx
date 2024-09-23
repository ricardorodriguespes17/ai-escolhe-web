import { FaBookmark, FaRegBookmark, FaShare } from "react-icons/fa"
import { RecipeType } from "../@types/RecipeTypes"
import Logo from "../components/Logo"
import Button from "./Button"
import FavoriteButton from "./FavoriteButton"
import { useState } from "react"

type RecipeCardProps = {
  key?: string
  recipe: RecipeType
  onOpen?: () => void
}

const RecipeCard = ({ key, recipe, onOpen }: RecipeCardProps) => {
  const [saved, setSaved] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 w-full h-fit flex-1" key={key}>
        <div className="flex flex-col items-center gap-2 h-full w-fit">
          <Logo mini />
          <p>{`5/5`}</p>
        </div>

        <div
          className="flex flex-col min-h-full flex-1 gap-2 cursor-pointer hover:opacity-85"
          onClick={onOpen}
        >
          <p>{recipe.name}</p>
          <p className="text-secondaryText text-sm">
            {recipe.description}
          </p>
        </div>

        <div className="h-full">
          <FavoriteButton favorited={false} />
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="plain"
          className="flex gap-2 p-0"
          title="Salvar receita"
          onClick={() => setSaved(!saved)}
        >
          {saved ? <FaBookmark /> : <FaRegBookmark />}
          <label className="hidden sm:block">Salvar</label>
        </Button>
        <Button
          variant="plain"
          className="flex gap-2 p-0"
          title="Compartilhar receita"
        >
          <FaShare />
          <label className="hidden sm:block">Compartilhar</label>
        </Button>
      </div>
    </div>
  )
}

export default RecipeCard