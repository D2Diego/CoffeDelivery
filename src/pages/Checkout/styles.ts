import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  h1 {
    color: var(--Base-Subtitle, #403937);

    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: 700;
  }

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
`

export const FormContainerOrder = styled.form`
  padding: 40px;

  border-radius: 6px;
  background: var(--Base-Card, #f3f2f2);
  margin-bottom: 20px;

  .text-icon-line {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 2rem;
  }
  .text-line p {
    color: var(--Base-Subtitle, #403937);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
  }
  .text-line span {
    color: var(--Base-Text, #574f4d);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
  }

  .grid-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .CEP {
      max-width: 12.5rem;
    }
  }

  .number-complement {
    display: flex;
    gap: 0.75rem;
  }
  .neighborhood-city {
    display: flex;
    gap: 0.75rem;
  }
  .error-message {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`

export const PaymentMethod = styled.div`
  padding: 40px;

  border-radius: 6px;
  background: var(--Base-Card, #f3f2f2);

  margin-bottom: 20px;

  .text-icon-line {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 2rem;
  }
  .text-line h3 {
    color: var(--Base-Subtitle, #403937);

    font-size: 16px;
    font-weight: 400;
  }
  .text-line p {
    color: var(--Base-Text, #574f4d);

    font-size: 14px;
    font-weight: 400;
  }

  .line-buttons {
    display: flex;
    gap: 0.75rem;
  }
`

export const Cart = styled.div`
  padding: 40px;
  border-radius: 6px 44px;
  background: var(--Base-Card, #f3f2f2);
  .box-product {
    display: flex;
    gap: 10px;
    img {
      width: 64px;
      height: 64px;
      object-fit: contain;
      margin-top: -10px;
    }
  }
  .box-img-textButtons {
    display: flex;
    gap: 10px;
  }

  .box-buttons {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      padding: 0px 8px;
      gap: 4px;
      border-style: none;

      color: var(--Base-Text, #574f4d);
      border-radius: 6px;
      background: var(--Base-Button, #e6e5e5);

      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .box-text-buttons p {
    color: var(--Base-Subtitle, #403937);

    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
  }

  span {
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;

    color: var(--Base-Text, #574f4d);

    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
  }
  .box-price-itens {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    p {
      color: var(--Base-Text, #574f4d);
      font-size: 14px;
      font-weight: 400;
    }
  }

  .box-price-delivery {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      color: var(--Base-Text, #574f4d);
      font-size: 14px;
      font-weight: 400;
    }
  }

  .box-price-total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    strong {
      color: var(--Base-Subtitle, #403937);
      font-size: 20px;
      font-weight: 700;
      line-height: 130%;
    }
  }
`
