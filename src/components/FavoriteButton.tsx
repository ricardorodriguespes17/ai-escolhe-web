import { useState } from "react"
import Button from "./Button"
import { FaRegStar, FaStar } from "react-icons/fa"

type FavoriteButtonProps = {
  favorited?: boolean
  onFavorite?: () => void
}

const FavoriteButton = ({ favorited = false, onFavorite }: FavoriteButtonProps) => {
  const [isFavorited, setFavorited] = useState(favorited)

  const handleFavorite = () => {
    setFavorited(!isFavorited)
    onFavorite?.()
  }

  return (
    <Button
      title={isFavorited ? "Remover dos favoritos" : "Favoritar"}
      variant="plain"
      size="sm"
      onClick={handleFavorite}
    >
      {isFavorited ? (
        <FaStar size={28} />
      ) : (
        <FaRegStar size={28} />
      )}
    </Button>
  )
}

export default FavoriteButton