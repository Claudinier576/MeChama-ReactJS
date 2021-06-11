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
`
// export const UserInfos = styled.a`
//   cursor: pointer;
//   display: flex;
//   min-width: 180px;
//   text-align: center;
//   align-items: center;
//   text-decoration: none;
  
//   .UserImg {
//     border-radius: 50%;
//     background-color: var(--BGColor);
//     padding:2px;
//     border:1px solid var(--green);
//     width: 40px;
//     object-fit: cover;
//   }

//   h1 {
//     margin-right: 5%;
//     margin-left: 5%;
//     font-size: 14px;
//     color: var(--white);
//   }
    
//   h2 {
//     font-size:12px;
//     color: var(--gray);
//   }

//   @media (max-width: 500px) {
//     min-width: 0;
//     h1, h2 {
//       display: none;
//       width: 0;
//     }
//   }
// `


