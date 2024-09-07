import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import Button from "./Button"

type TextInputProps = {
  label?: string
  size?: "sm" | "md" | "lg"
  prefix?: React.ReactNode,
  sufix?: React.ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

const TextInput = (props: TextInputProps) => {
  const {
    label,
    className,
    size = "md",
    prefix,
    sufix,
    ...rest
  } = props

  const sizes = {
    sm: "h-10",
    md: "h-11",
    lg: "h-12",
  }

  const labeClassName = ""
  const inputClassName = twMerge(
    sizes[size],
    "w-full",
    "border border-gray/50 border-solid rounded-md px-3",
    "enabled:hover:border-primary/50",
    "focus:border-primary",
    "disabled:opacity-50 disabled:bg-gray/10",
    className,
  )

  return (
    <div className="flex flex-col w-full">
      {label && <label className={labeClassName}>{label}</label>}
      <div className="flex-1 relative w-full">
        {prefix && (
          <Button>
            {prefix}
          </Button>
        )}
        <input
          className={inputClassName}
          {...rest}
        />
        {sufix && (
          <Button>
            {sufix}
          </Button>
        )}
      </div>
    </div>
  )
}

export default TextInput