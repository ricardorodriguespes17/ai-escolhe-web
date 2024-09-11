import { useState } from "react"
import { BiUser } from "react-icons/bi"
import { twMerge } from "tailwind-merge"

type ProfilePhotoProps = {
  url?: string
  size?: "sm" | "md"
  floating?: boolean
}

const ProfilePhoto = ({ url = "", size = "md", floating = true }: ProfilePhotoProps) => {
  const [error, setError] = useState(false)

  const sizes = {
    sm: "w-[80px]",
    md: "w-[120px]"
  }

  const className = twMerge(
    "overflow-hidden",
    sizes[size],
    "flex items-center justify-center",
    "text-4xl text-primary",
    "aspect-square rounded-full bg-white",
    floating && "absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2",
    "border-4 border-secondary border-solid"
  )

  return (
    <div className={className} >
      {error ? (
        <img
          src={url}
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <BiUser />
      )}
    </div>
  )
}

export default ProfilePhoto