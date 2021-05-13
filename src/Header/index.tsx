import React from 'react';
import ButtonCategorys from '../ButtonCategorys';
import SearchBar from '../SearchBar';
import { Container, UserInfos } from './styles';

// import { Container } from './styles';

interface PropsHeader {
  userName: string;
  accontCredits: string;
}

const Header: React.FC<PropsHeader> = ({userName, accontCredits}) => {
  return (<>

    <Container>

      <div className="oneDiv">
      <a href="/"><img src="http://tn-15mechama-com.umbler.net/images/startup%20(1).png" className="logo" alt="" /></a>  
        <ButtonCategorys />
      </div>

      <SearchBar/> 
      <UserInfos>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
        <h1>{userName}</h1>
        <h2>R${accontCredits}</h2>
      </UserInfos>
    </Container>



  </>);
}

export default Header;