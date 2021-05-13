import React from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Restaurante from '../Restaurante';
import Restaurantes from '../Restaurantes';

// import { Container } from './styles';



const Content: React.FC = () => {


 
  return (


    <Container>

      <Route exact path="/">

      <Restaurantes></Restaurantes>

      </Route>


      <Route exact path="/restaurantes/:restaurante">
      

      <Restaurante id=""></Restaurante>

      

      </Route>



    </Container>



 );
}

export default Content;