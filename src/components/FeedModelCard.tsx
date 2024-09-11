import Card from "./Card"
import ProfilePhoto from "./ProfilePhoto"

type FeedModelCardProps = {
  children?: React.ReactNode
  userName: string
  time: string
  profileURL?: string
}

const FeedModelCard = ({ children, userName, time, profileURL }: FeedModelCardProps) => {
  return (
    <Card>
      <div className="flex gap-2">
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
    </Card>
  )
}

export default FeedModelCard