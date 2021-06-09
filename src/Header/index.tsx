import React from 'react';
import ButtonCategories from '../ButtonCategories';
import  { CartIcon } from '../Cart';
import SearchBar from '../SearchBar';
import { Container, UserInfos } from './styles';

interface PropsHeader {
  user:{
    userName: string;
    accontCredits: string;
  }
}

const Header: React.FC<PropsHeader> = ({user}) => {
  return (
    <>
      <Container>
        <div className="oneDiv">
          <a href="/"><img src="http://tn-15mechama-com.umbler.net/images/startup%20(1).png" className="logo" alt="" /></a>  
          <ButtonCategories />
        </div>
        <SearchBar/> 
        <div>
          <UserInfos href={'/User/me/'+user.userName.toLowerCase()}>
            <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
            <h1>{user.userName}</h1>
            <h2>R${user.accontCredits}</h2>
          </UserInfos>
        </div>
        <CartIcon/>
      </Container>
    </>
  );
}

export default Header;