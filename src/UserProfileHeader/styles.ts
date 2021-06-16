import styled from 'styled-components'

export const UserInfos = styled.a`
  cursor: pointer;
  display: flex;
  min-width: 180px;
  text-align: center;
  align-items: center;
  text-decoration: none;
  
  .UserImg {
    border-radius: 50%;
    background-color: var(--white);
    padding:2px;
    border:2px solid var(--green);
    width: 40px;
    object-fit: cover;
  }

  h1 {
    margin-right: 5%;
    margin-left: 5%;
    font-size: 14px;
    color: var(--text);
  }
    
  h2 {
    font-size:12px;
    color: var(--subText);
  }

  @media (max-width: 650px) {
    min-width: 0;
    h1, h2 {
      display: none;
      width: 0;
    }
  }
`

export const CompanyInfos = styled.a`
  cursor: pointer;
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  min-width: 100px;
  justify-content: space-between;
  
  .UserImg {
    border-radius: 50%;
    background-color: var(--white);
    padding:2px;
    border:2px solid var(--green);
    width: 40px;
    object-fit: cover;
  }

  h1 {
    margin-right: 5%;
    margin-left: 5%;
    font-size: 14px;
    color: var(--text);
  }
    
  @media (max-width: 500px) {
    min-width: 0;
    h1 {
      display: none;
      width: 0;
    }
  }
`

export const UnloggedInfo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 100px;
  justify-content: center;
  
  .UserImg {
    border-radius: 50%;
    background-color: var(--white);
    padding:2px;
    border:2px solid var(--green);
    width: 40px;
    object-fit: cover;
  }
`