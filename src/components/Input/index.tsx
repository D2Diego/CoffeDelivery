import { InputContainer } from './styles'

interface InputProps {
  placeholder: string
  className?: string
}

export function Input({ placeholder, className }: InputProps) {
  return <InputContainer className={className} placeholder={placeholder} />
}
