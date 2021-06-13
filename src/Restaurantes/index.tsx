import React, { useEffect, useState } from 'react';
import { Container, Menu } from './styles';

interface Restaurante {
  empresas: [{
      id:number,
      name:string,
      description:string,
      logo:string
    }], 
}

const Restaurantes: React.FC = () => {

  const [RestauranteData,setRestauranteData] = useState<Restaurante>();

  useEffect(()=> {
      fetch('https://tn-15mechama-com.umbler.net').then(
          response => response.json()).then(data =>  setRestauranteData(data))
  },[]);
   
  return (
    <Container>
      { RestauranteData?.empresas.map((emp) => {
        return(
          <Menu key={emp.id} href={'/restaurantes/'+emp.id}>
            <div>
              <img src={'https://tn-15mechama-com.umbler.net/images/'+ emp.logo} alt="compLogoImg" />
              <h1>{emp.name}</h1>
            </div>
            <h2>{emp.description}</h2>
          </Menu>
        )
      })}   
    </Container>
  );
}

export default Restaurantes;