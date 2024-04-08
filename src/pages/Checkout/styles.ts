import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  h1 {
    color: var(--Base-Subtitle, #403937);

    font-family: 'Baloo 2';
    font-size: 18px;
    font-weight: 700;
  }
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
`

export const PaymentMethod = styled.div`
  padding: 40px;

  border-radius: 6px;
  background: var(--Base-Card, #f3f2f2);

  .text-icon-line {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 2rem;
  }
  .text-line h3 {
    color: var(--Base-Subtitle, #403937);

    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
  }
  .text-line p {
    color: var(--Base-Text, #574f4d);

    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
  }

  .line-buttons {
    display: flex;
    gap: 0.75rem;
  }
`

export const Cart = styled.div``
