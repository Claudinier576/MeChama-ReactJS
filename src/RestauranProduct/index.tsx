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

const RestauranProduct: React.FC<Props> = ({id,name,description,value,img}) => {
  return (
      <Container>
          <img src={img} alt="" />
          <h1>{name}</h1>
          <h3>{description}</h3>
          <span>R$: {value},00</span>

      </Container>
  );
}

export default RestauranProduct;