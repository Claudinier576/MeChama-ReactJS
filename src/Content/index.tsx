import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Route } from 'react-router-dom';
import Restaurante from '../Restaurante';
import ConfigUser from '../ConfigUser';
import Restaurantes from '../Restaurantes';
import ProductSearch from '../ProductSearch';
import Cart from '../Cart';
import ProtectedRoute from '../services/protectedRoute'
import ConfigEmp from '../ConfigEmp';
import axios from 'axios'
import ProductCategory from '../ProductCategory';

const Content = () => {

  const [isUser, setIsUser] = useState(true)
  const [isCompany, setIsCompany] = useState(true)

  useEffect(() => {
    async function callAPI() {
      await axios.get('http://tn-15mechama-com.umbler.net/userConfig', {
        headers: {
          tokenUserJWT: localStorage.getItem('tokenUserJWT')
        }
      }).then(res => {
        if(res.data.userinfo.Type !== 'empresa'){
          setIsUser(true)
          setIsCompany(false)
        } else{
          setIsUser(false)
          setIsCompany(true)
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
      <Route exact path="/categoria/:Categoria">
      <ProductCategory></ProductCategory>
      </Route>

      <ProtectedRoute path="/User/me" component={ConfigUser} isUser={isUser} isCompany={isCompany}/>
      <ProtectedRoute path="/Emp/me/:data" component={ConfigEmp} isUser={isUser} isCompany={isCompany}/>

      <ProtectedRoute path="/Compras" component={Cart} isUser={isUser} isCompany={isCompany}/>
      
      <Route exact path="/restaurantes/:restaurante">
        <Restaurante id=""></Restaurante>
      </Route>

    </Container>
 );
}

export default Content;