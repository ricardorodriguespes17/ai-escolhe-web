import { FaHeart, FaRegHeart, FaShare } from "react-icons/fa"
import Button from "./Button"
import Card from "./Card"
import ProfilePhoto from "./ProfilePhoto"
import { useState } from "react"

type FeedModelCardProps = {
  children?: React.ReactNode
  userName: string
  time: string
  profileURL?: string
}

const FeedModelCard = ({ children, userName, time, profileURL }: FeedModelCardProps) => {
  const [liked, setLiked] = useState(false)
  const [numberOfLikes, setNumberOfLikes] = useState(3)

  const handleLike = () => {
    setNumberOfLikes(numberOfLikes + 1)
    setLiked(true)
  }

  const handleUnlike = () => {
    setNumberOfLikes(numberOfLikes - 1)
    setLiked(false)
  }

  return (
    <Card className="gap-1">
      <div className="flex gap-2 mb-4">
        <ProfilePhoto
          url={profileURL}
          size="sm"
        />
        <div>
          <h2>{userName}</h2>
          <p>{time}</p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-3">
        {children}
      </div>

      <div className="flex items-center">
        <Button
          variant="plain"
          title="Curtir"
          className="text-xl gap-2"
          onClick={liked ? handleUnlike : handleLike}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
          {numberOfLikes}
        </Button>
        <Button
          variant="plain"
          className="text-xl"
          title="Compartilhar"
        >
          <FaShare />
        </Button>
      </div>
    </Card>
  )
}

export default FeedModelCard