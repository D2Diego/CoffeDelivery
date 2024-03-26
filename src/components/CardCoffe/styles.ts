import styled from 'styled-components'

export const CardCoffeContainer = styled.article`
  max-width: 256px;
  height: 326px;
  padding: 24px 24px;
  border-radius: 6px 36px;
  background: var(--Base-Card, #f3f2f2);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .product-img {
    margin-top: -40px;
  }

  .coffee-tag {
    color: var(--Brand-Yellow-Dark, #c47f17);

    font-family: Roboto;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;

    padding: 8px;
    border-radius: 100px;
    background: var(--Brand-Yellow-Light, #f1e9c9);

    margin: 16px 0 20px 0;
  }

  h3 {
    color: var(--Base-Subtitle, #403937);
    text-align: center;

    font-family: 'Baloo 2';
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 8px;
  }

  p {
    color: var(--Base-Label, #8d8686);
    text-align: center;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 33px;
  }

  .price span {
    color: var(--Base-Text, #574f4d);
    text-align: right;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }

  .price {
    color: var(--Base-Text, #574f4d);

    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;
    line-height: 130%;
  }

  .line-price-quantity {
    display: flex;
    gap: 20px;
    align-items: center;
    padding-bottom: 24px;
  }

  .quantity-controls {
    display: flex;
    height: 38px;
    padding: 8px;
    align-items: stretch;
    gap: 4px;

    border-radius: 6px;
    background: var(--Base-Button, #e6e5e5);
  }

  button {
    background: none;
    border-style: none;
    cursor: pointer;
    outline: inherit;

    color: #8047f8;
  }

  .icon-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 6px;
    background: var(--Brand-Purple-Dark, #4b2995);
  }
`
