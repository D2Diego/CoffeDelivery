import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 126px;

  nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  div {
    border-radius: 6px;
    border-style: none;
    background-color: ${(props) => props.theme['purple-light']};

    display: flex;
    align-items: center;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`
