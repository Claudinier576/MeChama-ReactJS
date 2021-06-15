import styled from 'styled-components'

export const Container = styled.header`
  grid-area: H;
  background-color: var(--BGColor);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px;
  
  .oneDiv{
    display: flex;
  }

  .logo {
    width: 40px;
    height: 40px;
    display: flex;
    align-self: center;
    padding-right: 3px;
  }

  @media (max-width:600px) {
    .logo {
      width: 30px;
      height: 30px;
    }
    img {
      width: 30px!important;
      height: 30px!important;
    }
  }
  @media (max-width:400px) {
    padding: 0;
  }
`