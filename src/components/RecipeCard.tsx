import Logo from "../components/Logo"
import FavoriteButton from "./FavoriteButton"

type RecipeCardProps = {
  key?: string
  title: string
  subTitle: string
  logoURL?: string
  rating?: number
  favorited: boolean
  onOpen?: () => void
}

const RecipeCard = ({ key, title, subTitle, rating, favorited, onOpen }: RecipeCardProps) => {
  return (
    <div className="flex items-center gap-4 w-full h-fit" key={key}>
      <div className="flex flex-col items-center gap-2 h-full w-fit">
        <Logo mini />
        {rating && <p>{`${rating}/5`}</p>}
      </div>

      <div
        className="flex flex-col min-h-full flex-1 gap-2 cursor-pointer hover:opacity-85"
        onClick={onOpen}
      >
        <p>{title}</p>
        <p className="text-secondaryText text-sm">
          {subTitle}
        </p>
      </div>

      <div className="h-full">
        <FavoriteButton favorited={favorited} />
      </div>
    </div>
  )
}

export default RecipeCard