import React from 'react'
import { InputContainer } from './styles'

interface InputProps {
  placeholder: string
  className?: string
}

// Define a função componente de maneira explícita
function InputComponent(
  { placeholder, className }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <InputContainer className={className} placeholder={placeholder} ref={ref} />
  )
}

// Use React.forwardRef e atribua o componente resultante a uma variável
const Input = React.forwardRef<HTMLInputElement, InputProps>(InputComponent)

// Define um displayName para ajudar com ferramentas de desenvolvimento e ESLint
Input.displayName = 'Input'

export { Input }
