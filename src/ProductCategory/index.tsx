import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestauranteProduct from '../RestauranteProduct';
import { ProductsView } from './styles';

interface PropR {
  Categoria: string;
}
interface ProductProp {
  mansageError: false,
  products: [
    {
      id: number,
      name: string,
      Categoty: string,
      description: string,
      value: number,
      img: string,
      additionals: string
    },
  ]
}

const ProductCategory: React.FC = () => {

  const [ProductsData, setProductsData] = useState<ProductProp>();
  const Products: PropR = useParams();
  
  useEffect(() => {
    fetch('http://tn-15mechama-com.umbler.net/Products').then(
      response => response.json()).then(data => setProductsData(data))
  }, [Products]);

  return (
    <>
      <ProductsView>
        {ProductsData?.products ?ProductsData.products.filter((product) =>{
          console.log(Products.Categoria);
          
          return  product.Categoty.toUpperCase().includes(Products.Categoria.toUpperCase()) ;
        }).map((product,key)=>{
          return(
            <RestauranteProduct name={product.name}
            key={key}
            id={product.id}
            description={product.description}
            value={product.value}
            img={product.img} />
          );
        }) : ''}
      </ProductsView>
    </>
  );
}

export default ProductCategory;