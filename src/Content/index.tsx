import React from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Restaurante from '../Restaurante';
import ConfigUser from '../ConfigUser';
import Restaurantes from '../Restaurantes';
import ProductSearch from '../ProductSearch';
import { Cart } from '../Cart';

const Content = () => {

  return (
    <Container>

      <Route exact path="/">
        <Restaurantes></Restaurantes>
      </Route>
      
      <Route exact path="/Search/:Search">
       <ProductSearch/>
      </Route>

      <Route exact path="/User/me/:userCode">
        <ConfigUser/>
      </Route>

      <Route exact path="/Compras">
        <Cart/>
      </Route>
      
      <Route exact path="/restaurantes/:restaurante">
        <Restaurante id=""></Restaurante>
      </Route>

    </Container>
 );
}

export default Content;