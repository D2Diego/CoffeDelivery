import { FaMinus, FaPlus } from 'react-icons/fa6'
// import { IoCartOutline } from 'react-icons/io5'

import CupCoffe from '../../assets/CupCoffe.svg'

import { CardCoffeContainer } from './styles'
import ShopCar from '../../assets/shopping-cart-simple.svg'

export function CardCoffe() {
  return (
    <CardCoffeContainer>
      <img src={CupCoffe} className="product-img" />
      <div className="coffee-tag">Tradicional</div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className="line-price-quantity">
        <div className="price">
          <span>R$</span>9,90
        </div>
        <div className="quantity-controls">
          <button>
            <FaMinus />
          </button>
          <span>0</span>
          <button>
            <FaPlus />
          </button>
        </div>
        <button className="icon-cart">
          <img src={ShopCar} alt="" />
        </button>
      </div>
    </CardCoffeContainer>
  )
}
