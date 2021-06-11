import React from 'react'
import ButtonCategories from '../ButtonCategories'
import  { CartIcon } from '../Cart'
import SearchBar from '../SearchBar'
import { Container, UserInfos } from './styles'

interface PropsHeader {
  user:{
    name: string;
    accontCredits: string;
  }
}

const Header: React.FC<PropsHeader> = ({user}) => {
  return (
    <>
      <Container>
        <div className="oneDiv">
          <a href="/" className="logo"><img src="/Images/startup (1).png" alt="logoImg" /></a>  
          <ButtonCategories />
        </div>
        <SearchBar/> 
        <div>
          <UserInfos href={'/User/me/'+user.name}>
            <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userInfosImg" />
            <h1>{user.name}</h1>
            <h2>R${user.accontCredits}</h2>
          </UserInfos>
        </div>
        <CartIcon/>
      </Container>
    </>
  )
}

export default Header;