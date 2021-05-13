import styled from 'styled-components';

export const Container = styled.header`
  
  grid-area: H;
  background-color: var(--BGColor);
  display: flex;
  justify-content: space-between;
  align-items:center;
  img{
    width: 40px;
      height: 40px;
      margin-left: 5px;
  }
  .oneDiv{
    display: flex;
  }

`;
export const UserInfos = styled.div`

  background-color: transparent;
  display: flex;
  flex-direction: row;
  min-width: 180px;
  img{
      border-radius: 50%;
      background-color: var(--BGColor);
      padding:2px;
      border:1px solid var(--green);
      width: 40px;
      height: 40px;
      object-fit: cover;
  }
  h1{
    margin-left: 5px;
    font-size: 14px;
    display: block;
    position: relative;
    top: 10px;
    color: var(--white);
  }
  h2{
      font-size:12px;
      display: block;
      position: relative;
      top: 25px;
      left: 0;
      color: var(--gray);
  }

`;


