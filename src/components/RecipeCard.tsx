import Logo from "../components/Logo"
import FavoriteButton from "./FavoriteButton"

type RecipeCardProps = {
  title: string
  subTitle: string
  logoURL?: string
  rating: number
  favorited: boolean
}

const RecipeCard = ({ title, subTitle, rating, favorited }: RecipeCardProps) => {
  return (
    <div className="flex items-center gap-4 w-full h-fit">
      <div className="flex flex-col items-center gap-2 h-full w-fit">
        <Logo mini />
        <p>{`${rating}/5`}</p>
      </div>

      <div className="flex flex-col min-h-full flex-1 gap-2">
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