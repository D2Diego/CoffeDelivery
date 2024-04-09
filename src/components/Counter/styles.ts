import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  gap: 4px;

  button {
    border-style: none;
  }
  span {
    color: var(--Base-Title, #272221);
    text-align: center;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
