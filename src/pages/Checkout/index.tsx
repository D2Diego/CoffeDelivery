import {
  CheckoutContainer,
  FormContainerOrder,
  PaymentMethod,
  Cart,
} from './styles'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

import { CiCreditCard1, CiLocationOn } from 'react-icons/ci'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export function Checkout() {
  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>

      <FormContainerOrder>
        <div>
          <div className="text-icon-line">
            <CiLocationOn size={22} color="#C47F17" />
            <div className="text-line">
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <div className="grid-inputs">
            <Input className="CEP" placeholder="CEP" />
            <Input className="Rua" placeholder="Rua" />
            <div className="number-complement">
              <Input className="Numero" placeholder="Número" />
              <Input className="Complemento" placeholder="Complemento" />
            </div>
            <div className="neighborhood-city">
              <Input className="Bairro" placeholder="Bairro" />
              <Input className="Cidade" placeholder="Cidade" />
              <Input className="UF" placeholder="UF" />
            </div>
          </div>
        </div>
      </FormContainerOrder>

      <PaymentMethod>
        <div>
          <div className="text-icon-line">
            <RiMoneyDollarCircleLine size={22} color="#8047F8" />
            <div className="text-line">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
        </div>
        <div className="line-buttons">
          <ButtonText text="CARTÃO DE CRÉDITO" Icon={CiCreditCard1} />
          <ButtonText text="CARTÃO DE DÉBITO" Icon={CiCreditCard1} />
          <ButtonText text="DINHEIRO" Icon={RiMoneyDollarCircleLine} />
        </div>
      </PaymentMethod>
      <Cart></Cart>
    </CheckoutContainer>
  )
}
