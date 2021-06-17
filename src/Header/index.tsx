import React from 'react'
import ButtonCategories from '../ButtonCategories'
import  { CartIcon } from '../Cart'
import SearchBar from '../SearchBar'
import { Container } from './styles'
import UserProfileHeader from '../UserProfileHeader'
import LogButton from '../LogButton'

interface PropsHeader {
  user:{
    name: string;
    accontCredits: string;
    imgPerfile: string;
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
        <LogButton/>
      </Container>
    </>
  )
}

export default Header;