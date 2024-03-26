import styled from 'styled-components'

export const SuccessContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
  }
  p {
    color: var(--Base-Subtitle, #403937);
    font-size: 20px;

    margin-bottom: 40px;
  }

  .box-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 102px;
  }

  .orders-info {
    border-radius: 6px 36px;
    border: 1px solid #dbac2c;
    padding: 40px;
  }

  .line-infos {
    display: flex;
    align-items: flex-start;
    gap: 13px;
  }

  .line-text {
    display: flex;
    flex-direction: column;
  }
`
// color: ${(props) => props.theme['base-title']};
