import { twMerge } from "tailwind-merge"

const ProfilePhoto = () => {
  const className = twMerge(
    "w-[120px] aspect-square rounded-full bg-white",
    "absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2",
    "border-4 border-secondary border-solid"
  )

  return (
    <div className={className} />
  )
}

export default ProfilePhoto