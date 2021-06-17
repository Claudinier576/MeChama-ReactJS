import styled from 'styled-components'

export const Container = styled.header`
  grid-area: H;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px;
  height: 62px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid var(--pink);
  z-index: 1;

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
  @media (max-width: 500px) {
    img {
      width: 25px!important;
      height: 25px!important;
    }
  }
  @media (max-width:400px) {
    padding: 2;
  }
`