import CoffeImg from '../../assets/CoffeImg.svg'
import MiniCart from '../../assets/MiniCart.svg'
import Timer from '../../assets/Timer.svg'
import Embalagens from '../../assets/Embalagens.svg'
import MiniCoffe from '../../assets/MiniCoffe.svg'

import { HomeContainer, Section } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <div className="text-container">
        <div>
          <div className="container-title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <Section>
            <article>
              <img src={MiniCart} alt="carrinho de compras" />
              Compra simples e segura
            </article>
            <article>
              <img src={Timer} alt="relógio" />
              Entrega rápida e rastreada
            </article>
            <article>
              <img
                src={Embalagens}
                alt="embalagem"
                className="icon-embalagens"
              />
              Embalagem mantém o café intacto
            </article>
            <article>
              <img src={MiniCoffe} alt="café" className="icon-coffe" />O café
              chega fresquinho até você
            </article>
          </Section>
        </div>
        <img src={CoffeImg} alt="Imagem de um café na embalagem da loja" />
      </div>

      <h1>Nossos cafés</h1>
    </HomeContainer>
  )
}
