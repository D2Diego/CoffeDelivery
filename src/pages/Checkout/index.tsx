import {
  CheckoutContainer,
  FormContainerOrder,
  PaymentMethod,
  Cart,
} from './styles'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Counter } from '../../components/Counter'
import { Section } from '../../components/Section'
import { ButtonConfirmed } from '../../components/ButtonConfirmed'

import CupCoffe from '../../assets/CupCoffe.svg'

import { CiCreditCard1, CiLocationOn } from 'react-icons/ci'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { GoTrash } from 'react-icons/go'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'

const formularioSchema = z.object({
  cep: z
    .string()
    .length(8, 'CEP deve ter exatamente 8 números.')
    .regex(/^\d+$/, 'CEP deve conter apenas números.'),
  rua: z.string(),
  numero: z.string().regex(/^\d+$/, 'Número deve conter apenas números.'),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().length(2, 'UF deve ter exatamente 2 letras.'),
})

type FormValues = z.infer<typeof formularioSchema>

export function Checkout() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formularioSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <FormContainerOrder onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="text-icon-line">
              <CiLocationOn size={22} color="#C47F17" />
              <div className="text-line">
                <p>Endereço de entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <div className="grid-inputs">
              <Input {...register('cep')} className="CEP" placeholder="CEP" />
              <Input {...register('rua')} className="Rua" placeholder="Rua" />
              <div className="number-complement">
                <Input
                  {...register('numero')}
                  className="Numero"
                  placeholder="Número"
                />
                <Input
                  {...register('complemento')}
                  className="Complemento"
                  placeholder="Complemento"
                />
              </div>
              <div className="neighborhood-city">
                <Input
                  {...register('bairro')}
                  className="Bairro"
                  placeholder="Bairro"
                />
                <Input
                  {...register('cidade')}
                  className="Cidade"
                  placeholder="Cidade"
                />
                <Input {...register('uf')} className="UF" placeholder="UF" />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
          </div>
          <div className="line-buttons">
            <ButtonText
              text="CARTÃO DE CRÉDITO"
              Icon={CiCreditCard1}
              iconColor="#8047F8"
            />
            <ButtonText
              text="CARTÃO DE DÉBITO"
              Icon={CiCreditCard1}
              iconColor="#8047F8"
            />
            <ButtonText
              text="DINHEIRO"
              Icon={RiMoneyDollarCircleLine}
              iconColor="#8047F8"
            />
          </div>
        </PaymentMethod>
      </div>

      <div>
        <h1>Cafés Selecionados</h1>
        <Cart>
          <div className="box-product">
            <div className="box-img-textButtons">
              <img src={CupCoffe} alt="Imagem do produto selecionado" />

              <div className="box-text-buttons">
                <p>Expresso Tradicional</p>
                <div className="box-buttons">
                  <Counter />
                  <button>
                    <GoTrash color="#3d1d81" />
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <Section />
          <div className="box-product">
            <div className="box-img-textButtons">
              <img src={CupCoffe} alt="Imagem do produto selecionado" />

              <div className="box-text-buttons">
                <p>Expresso Tradicional</p>
                <div className="box-buttons">
                  <Counter />
                  <button>
                    <GoTrash color="#3d1d81" />
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <span>R$ 9,90</span>
          </div>
          <div>
            <Section />

            <div className="box-price-itens">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="box-price-delivery">
              <p>Entrega</p>
              <p> R$ 3,50</p>
            </div>
            <div className="box-price-total">
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
            <ButtonConfirmed />
          </div>
        </Cart>
      </div>
    </CheckoutContainer>
  )
}
