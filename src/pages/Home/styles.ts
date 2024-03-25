import styled from 'styled-components'

export const HomeContainer = styled.nav`
  .container-title h1 {
    font-family: 'Baloo 2';
    font-size: 48px;
    font-weight: 800;
  }

  .container-title p {
    font-size: 20px;
    font-weight: 400;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    column-gap: 10px;
  }

  article {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
