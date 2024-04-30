import React from 'react'
import { InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  className?: string
}

function InputComponent(
  { placeholder, className, ...rest }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <InputContainer
      className={className}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  )
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(InputComponent)

Input.displayName = 'Input'

export { Input }
