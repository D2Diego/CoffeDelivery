import styled from 'styled-components'

export const HomeContainer = styled.nav`
  .text-container {
    display: flex;
    flex-direction: row;
  }

  .container-title h1 {
    color: ${(props) => props.theme['base-title']};

    font-family: 'Baloo 2';
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 16px;
  }

  .container-title p {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: Roboto;
    font-size: 25px;
    margin-bottom: 75px;
  }

  .SubTitle {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
    margin-top: 142px;
    margin-bottom: 52px;
  }

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 32px;
    column-gap: 40px;
  }
`
export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  column-gap: 10px;

  article {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${(props) => props.theme['base-text']};

    font-family: Roboto;
    font-size: 16px;
  }

  .icon-embalagens {
    border-radius: 1000px;
    background-color: ${(props) => props.theme['base-text']};
    padding: 8px;
  }

  .icon-coffe {
    border-radius: 1000px;
    background-color: ${(props) => props.theme['purple-base']};
    padding: 8px;
  }
`
