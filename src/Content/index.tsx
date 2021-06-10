import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Restaurante from '../Restaurante';
import ConfigUser from '../ConfigUser';
import Restaurantes from '../Restaurantes';
import ProductSearch from '../ProductSearch';
import Cart from '../Cart';
import ProtectedRoute from '../services/protectedRoute'
import axios from 'axios'

const Content = () => {

  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    async function callAPI() {
      await axios.get('http://tn-15mechama-com.umbler.net/userConfig', {
        headers: {
          tokenUserJWT: localStorage.getItem('tokenUserJWT')
        }
      }).then(res => {
        if(res.data.userinfo.Type !== 'empresa'){
          setIsAuth(true)
        } else{
          setIsAuth(false)
        }
      })
    }
    callAPI()
  }, [])

  return (
    <Container>

      <Route exact path="/">
        <Restaurantes></Restaurantes>
      </Route>
      
      <Route exact path="/Search/:Search">
       <ProductSearch/>
      </Route>

      <ProtectedRoute path="/User/me/:userCode" component={ConfigUser} isAuth={isAuth}/>

      <ProtectedRoute path="/Compras" component={Cart} isAuth={isAuth}/>
      
      <Route exact path="/restaurantes/:restaurante">
        <Restaurante id=""></Restaurante>
      </Route>

    </Container>
 );
}

export default Content;