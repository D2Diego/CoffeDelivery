import CoffeImg from '../../assets/CoffeImg.svg'
import MiniCart from '../../assets/MiniCart.svg'
import Timer from '../../assets/Timer.svg'
import Embalagens from '../../assets/Embalagens.svg'
import MiniCoffe from '../../assets/MiniCoffe.svg'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <div className="container-title">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </div>
      <section>
        <article>
          <img src={MiniCart} alt="" />
          Compra simples e segura
        </article>
        <article>
          <img src={Timer} alt="" />
          Entrega rápida e rastreada
        </article>
        <article>
          <img src={Embalagens} alt="" />
          Embalagem mantém o café intacto
        </article>
        <article>
          <img src={MiniCoffe} alt="" />O café chega fresquinho até você
        </article>
      </section>
      <img src={CoffeImg} alt="Imagem de um café na embalagem da loja" />
    </HomeContainer>
  )
}
