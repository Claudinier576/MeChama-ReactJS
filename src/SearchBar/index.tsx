import React from 'react';
import { useHistory } from 'react-router';
import { Container, Input } from './styles';

const SearchBar = () => {
  let history = useHistory();
  function  changeSearch(event:any){
    history.push('/Search/'+event.target.value)
    if(event.target.value.toString() < 1){
      history.push('/');
    }
  }
  return (
    <Container>
      <Input type="Text" placeholder="Pesquisar produto..." onChange={changeSearch}/>
    </Container>
  );
}

export default SearchBar;