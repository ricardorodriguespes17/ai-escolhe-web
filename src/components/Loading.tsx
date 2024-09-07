import { twMerge } from "tailwind-merge"

type LoadingProps = {
  color?: "primary" | "secondary" | "white"
}

const Loading = ({ color = "primary" }: LoadingProps) => {

  const colors = {
    primary: "border-t-primary",
    secondary: "border-t-secondary",
    white: "border-t-white"
  }

  return (
    <div
      className={twMerge(
        "h-[80%] aspect-square rounded-full",
        "border-8 border-solid border-transparent",
        "animate-spin",
        colors[color]
      )}
    />
  )
}

export default Loading