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
    <Container  key={id}>
        <img src={img} alt="" />
        <div>
          <h1>{name}</h1>
          <h2>{description}</h2>
          <span>R$: {value},00</span>
        </div>
    </Container>
  );
}

export default RestauranteProduct;