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
          <div className="text-line">
            <CiLocationOn size={22} color="#C47F17" />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
          <div>
            <Input placeholder="CEP" />
            <Input placeholder="Rua" />
            <Input placeholder="Número" />
            <Input placeholder="Complemento" />
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />
          </div>
        </div>
      </FormContainerOrder>

      <PaymentMethod>
        <div>
          <img src="" alt="" />
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
        <div>
          <ButtonText text="CARTÃO DE CRÉDITO" Icon={CiCreditCard1} />
          <ButtonText text="CARTÃO DE DÉBITO" Icon={CiCreditCard1} />
          <ButtonText text="DINHEIRO" Icon={RiMoneyDollarCircleLine} />
        </div>
      </PaymentMethod>
      <Cart></Cart>
    </CheckoutContainer>
  )
}
