import React from 'react';
import { useHistory } from 'react-router';
import { Container, Input } from './styles';



const ButtonCategorys = () => {
  
  let history = useHistory();

  function  changeSearch(event){

    history.push('/Search/'+event.target.value);

    if(event.target.value.toString() < 1){
      history.push('/');
    }
  
  }
  return (

    <Container>
      <Input placeholder="Pesquise por produto..." onChange={changeSearch}/>
    </Container>
  );
}

export default ButtonCategorys;