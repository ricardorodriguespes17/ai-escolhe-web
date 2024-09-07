import Logo from "../components/Logo"

type RecipeCardProps = {
  title: string
  subTitle: string
  logoURL?: string
  rating: number
}

const RecipeCard = ({ title, subTitle, rating }: RecipeCardProps) => {
  return (
    <div className="flex items-center gap-4 h-fit">
      <div className="flex flex-col items-center gap-2 h-full w-fit">
        <Logo mini />
        <p>{`${rating}/5`}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>{title}</p>
        <p className="text-secondaryText text-sm">
          {subTitle}
        </p>
      </div>
    </div>
  )
}

export default RecipeCard