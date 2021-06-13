import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestauranteProduct from '../RestauranteProduct';
import { Container, ProductsView } from './styles';

interface PropR {
  Search: string;
}
interface ProductProp {
  mansageError: false,
  products: [
    {
      id: number,
      name: string,
      description: string,
      value: number,
      img: string,
      additionals: string
    },
  ]
}

const ProductSearch: React.FC = () => {

  const [ProductsData, setProductsData] = useState<ProductProp>();
  const Products: PropR = useParams();
  
  useEffect(() => {
    fetch('https://tn-15mechama-com.umbler.net/Products').then(
      response => response.json()).then(data => setProductsData(data))
  }, [Products]);

  return (
    <Container>
      <ProductsView>
        {ProductsData?.products ?ProductsData.products.filter((product) =>{
          return  product.name.toUpperCase().includes(Products.Search.toString().toUpperCase());
        }).map((product,key)=>{
          return(
            <RestauranteProduct name={product.name}
            key={key}
            id={product.id}
            description={product.description}
            value={product.value}
            img={'https://tn-15mechama-com.umbler.net/images/'+ product.img} />
          );
        }) : ''}
      </ProductsView>
    </Container>
  );
}

export default ProductSearch;