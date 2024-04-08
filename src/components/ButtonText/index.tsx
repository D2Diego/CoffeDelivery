import React from 'react'
import { ButtonTextContainer } from './styles'

interface ButtonTextProps {
  text: string
  Icon?: React.ElementType
  iconColor?: string
}

export function ButtonText({ text, Icon, iconColor }: ButtonTextProps) {
  return (
    <ButtonTextContainer>
      {Icon && <Icon color={iconColor} size={19} />}
      {text}
    </ButtonTextContainer>
  )
}
