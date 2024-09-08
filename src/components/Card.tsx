import { twMerge } from "tailwind-merge"

type CardProps = {
  children?: React.ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={twMerge("flex flex-col gap-6 h-fit rounded-lg shadow-md bg-white p-6", className)}
      children={children}
    />
  )
}

export default Card