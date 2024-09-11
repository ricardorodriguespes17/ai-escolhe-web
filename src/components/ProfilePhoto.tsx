import { twMerge } from "tailwind-merge"

type ProfilePhotoProps = {
  url?: string
}

const ProfilePhoto = ({ url = "" }: ProfilePhotoProps) => {
  const className = twMerge(
    "overflow-hidden",
    "w-[120px] aspect-square rounded-full bg-white",
    "absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2",
    "border-4 border-secondary border-solid"
  )

  return (
    <div className={className} >
      <img src={url} className="w-full h-full object-cover" />
    </div>
  )
}

export default ProfilePhoto