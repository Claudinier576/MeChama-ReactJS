import React from 'react'
import ButtonCategories from '../ButtonCategories'
import  { CartIcon } from '../Cart'
import SearchBar from '../SearchBar'
import { Container } from './styles'
import UserProfileHeader from '../UserProfileHeader'

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
          <UserProfileHeader user={user}/>
        </div>
        <CartIcon/>
      </Container>
    </>
  )
}

export default Header;