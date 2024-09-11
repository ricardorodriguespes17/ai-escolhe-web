import { IoMdEye, IoMdEyeOff } from "react-icons/io"
import Button from "./Button"
import TextInput from "./TextInput"
import { useState } from "react"

type PasswordInputProps = {
  label?: string
}

const PasswordInput = ({ label }: PasswordInputProps) => {
  const [hidden, setHidden] = useState(true)

  return (
    <div className="w-full relative">
      <TextInput
        label={label}
        type={hidden ? "password" : "text"}
      />

      <Button
        variant="plain"
        type="button"
        className="absolute right-0 top-6"
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? (
          <IoMdEye />
        ) : (
          <IoMdEyeOff />
        )}
      </Button>
    </div>
  )
}

export default PasswordInput