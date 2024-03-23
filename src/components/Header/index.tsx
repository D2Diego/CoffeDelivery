import { HeaderContainer } from './styles'

import logoCoffe from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="logo coffe" />
      <nav>
        <div>
          <MapPin size={32} />
          Brasília, DF
        </div>
        <ShoppingCart size={32} />
      </nav>
    </HeaderContainer>
  )
}
