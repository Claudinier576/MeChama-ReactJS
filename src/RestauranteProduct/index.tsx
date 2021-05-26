import React from 'react';

import { Container } from './styles';

interface Props{
  id: number,
  name: string,
  description: string,
  value: number,
  img: string,
  additionals?: string     
}

const RestauranteProduct: React.FC<Props> = ({id,name,description,value,img}) => {
  return (
    <Container>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h3>{description}</h3>
      <span>R$: {value},00</span>
    </Container>
  );
}

export default RestauranteProduct;