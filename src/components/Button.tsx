import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  title?: string
  onClick?: () => void
  children?: React.ReactNode
  variant?: "solid" | "plain" | "outlined" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  const {
    variant = "solid",
    size = "md",
    children,
    className,
    ...rest
  } = props

  const sizes = {
    sm: "h-10 aspect-square",
    md: "h-11 min-w-24 w-full",
    lg: "h-12 min-w-48 w-full",
  }

  const variants = {
    solid: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outlined: "bg-transparent text-primary border border-primary border-solid enabled:hover:bg-primary/10",
    plain: "bg-transparent text-primary enabled:hover:bg-primary/10",
  }

  return (
    <button
      className={twMerge(
        sizes[size],
        variants[variant],
        className,
        "flex items-center justify-center",
        "rounded-md disabled:opacity-50",
        "enabled:hover:brightness-125 transition-all"
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button