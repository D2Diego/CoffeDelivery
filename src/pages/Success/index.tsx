import { SuccessContainer } from './styles'

import Ilustration from '../../assets/Illustration.svg'
import Timer from '../../assets/Timer.svg'
import MiniLoc from '../../assets/MiniLoc.svg'
import MiniCifrao from '../../assets/MiniCifrao.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu!Pedido Confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div className="box-hero">
        <div className="oders-info-wrapper">
          <div className="orders-info">
            <div className="line-infos">
              <img src={MiniLoc} alt="" />
              <p>
                Entrega em <strong>Rua João Daniel Martinelli</strong>,
                102Farrapos - Porto Alegre, RS
              </p>
            </div>

            <div className="line-infos">
              <img src={Timer} alt="" />
              <div className="line-text">
                <p>
                  Previsão de entrega <br />
                  <strong>20 min - 30 min </strong>
                </p>
              </div>
            </div>

            <div className="line-infos">
              <img src={MiniCifrao} alt="" />
              <div className="line-text">
                <p>
                  Pagamento na entrega <br />
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={Ilustration} alt="" />
      </div>
    </SuccessContainer>
  )
}

// loc timer cifrão
