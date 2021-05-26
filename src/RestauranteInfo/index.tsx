import React from 'react';

 import { Container } from './styles';

 interface PropsInfo {
     img: string;
     description: string;
     name: string;
 }

const RestauranteInfo: React.FC<PropsInfo> = ({img,description,name}) => {
  return (
    <Container>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h2>{description}</h2>  
    </Container>);
}

export default RestauranteInfo;