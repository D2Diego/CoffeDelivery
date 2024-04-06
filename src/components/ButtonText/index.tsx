import React from 'react'
import { ButtonTextContainer } from './styles'

interface ButtonTextProps {
  text: string
  Icon?: React.ElementType
}

export function ButtonText({ text, Icon }: ButtonTextProps) {
  return (
    <ButtonTextContainer>
      {Icon && <Icon />}
      {text}
    </ButtonTextContainer>
  )
}
