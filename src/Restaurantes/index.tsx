import React, { useEffect, useState } from 'react';
import { Container, Menu } from './styles';

interface Restaurante {
    
        empresas: [
          {
            id:number,
            name:string,
            description:string,
            logo:string
          },
        ],
      
        
      
}


const Restaurantes: React.FC = () => {

    const [RestaurteData,setRestaurteData] = useState<Restaurante>();

    useEffect(()=> {
        fetch('http://192.168.0.10:4000').then(
            response => response.json()).then(data =>  setRestaurteData(data))
    },[]);

    
  return (
      <Container>
   { RestaurteData?.empresas.map((emp)=>{
     return(
       <Menu href={'/restaurantes/'+emp.id}>
         <img src={'http://192.168.0.10:4000/images/'+ emp.logo} alt="" />
         <h1>{emp.name}</h1>
         <h2>{emp.description}</h2>
       </Menu>
     )
   })}
       
      </Container>
  );
}

export default Restaurantes;