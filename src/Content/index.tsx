import React, { useState } from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Restaurante from '../Restaurante';
import ConfigUser from '../ConfigUser';
import Restaurantes from '../Restaurantes';
import ProductSearch from '../ProductSearch';
import Cart from '../Cart';
import ProtectedRoute from '../services/protectedRoute'

const Content = () => {

  const [isAuth, setIsAuth] = useState(false)
  const [isLogged, setIsLogged]= useState(false)

  return (
    <Container>

      <Route exact path="/">
        <Restaurantes></Restaurantes>
      </Route>
      
      <Route exact path="/Search/:Search">
       <ProductSearch/>
      </Route>

      <ProtectedRoute path="/User/me/:userCode" component={ConfigUser} isAuth={isAuth} isLogged={isLogged}/>

      <ProtectedRoute path="/Compras" component={Cart} isAuth={isAuth} isLogged={isLogged}/>
      
      <Route exact path="/restaurantes/:restaurante">
        <Restaurante id=""></Restaurante>
      </Route>

    </Container>
 );
}

export default Content;