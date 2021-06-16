import React from 'react';
import { ProductCard } from './styles';

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
    <ProductCard key={id}>
      <img src={img} alt="" />
      <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <span>R$: {value},00</span>
      </div>
    </ProductCard>
  );
}

export default RestauranteProduct;