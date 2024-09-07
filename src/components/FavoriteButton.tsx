import { IoHeartOutline, IoHeartSharp } from "react-icons/io5"
import Button from "./Button"

type FavoriteButtonProps = {
  favorited?: boolean
  onFavorite?: () => void
}

const FavoriteButton = ({ favorited, onFavorite }: FavoriteButtonProps) => {
  return (
    <Button variant="plain" size="sm" onClick={onFavorite}>
      {favorited ? (
        <IoHeartSharp size={28} />
      ) : (
        <IoHeartOutline size={28} />
      )}
    </Button>
  )
}

export default FavoriteButton