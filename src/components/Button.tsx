import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  title?: string
  onClick?: () => void
  children?: React.ReactNode
  variant?: "solid" | "plain" | "outlined" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
  path?: string
}

const Button = (props: ButtonProps) => {
  const {
    variant = "solid",
    size = "md",
    children,
    className,
    path,
    ...rest
  } = props

  const sizes = {
    sm: "h-10 aspect-square p-2",
    md: "h-11 py-2 px-4",
    lg: "h-12 py-2 px-6",
  }

  const variants = {
    solid: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outlined: "bg-transparent text-primary border border-primary border-solid enabled:hover:bg-primary/10",
    plain: "bg-transparent text-primary",
  }

  const customClassName = twMerge(
    sizes[size],
    variants[variant],
    className,
    "flex items-center justify-center w-fit",
    "rounded-md disabled:opacity-50",
    "enabled:hover:brightness-125 transition-all"
  )

  if (path) {
    return (
      <Link
        to={path}
        className={customClassName}
        children={children}
      />
    )
  }

  return (
    <button
      className={customClassName}
      children={children}
      {...rest}
    />
  )
}

export default Button