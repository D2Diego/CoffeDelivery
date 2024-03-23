import { HeaderContainer } from './styles'

import logoCoffe from '../../assets/Logo.svg'
import MapPin from '../../assets/MapPin.svg'
import Cart from '../../assets/Cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffe} alt="logo coffe" />
      <nav>
        <div>
          <img src={MapPin} alt="" />
          Brasília, DF
        </div>
        <img src={Cart} alt="" />
      </nav>
    </HeaderContainer>
  )
}
