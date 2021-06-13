import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestauranteProduct from '../RestauranteProduct';
import RestauranteInfo from '../RestauranteInfo';
import { Container, ProductsView } from './styles';

interface RestauranteProps {
  id: string;
}
interface PropR {
  restaurante: string;
}
interface RestauranteProp {
  mansageError: false,
  empresa: [{
    id: number,
    name: string,
    description: string,
    LogoImg: string,
    BannerImg: string,
    number: string
  }],
  products: [{
    id: number,
    name: string,
    description: string,
    value: number,
    img: string,
    additionals: string
  }]
}

const Restaurante: React.FC<RestauranteProps> = () => {

  const [RestauranteData, setRestauranteData] = useState<RestauranteProp>();
  const restaurante: PropR = useParams();
  useEffect(() => {
    fetch('https://tn-15mechama-com.umbler.net/company/' + restaurante.restaurante).then(
      response => response.json()).then(data => setRestauranteData(data))

  }, [restaurante]);

  return (
    <Container>

      {RestauranteData?.empresa ? <RestauranteInfo
        img={'https://tn-15mechama-com.umbler.net/images/' + RestauranteData?.empresa[0].LogoImg}
        description={'' + RestauranteData?.empresa[0].description}
        name={'' + RestauranteData?.empresa[0].name}
      /> :<div></div>}

      <ProductsView>
        {RestauranteData?.products ? RestauranteData.products.map((product,key)=>{
          return(
            <RestauranteProduct 
              name={product.name}
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

export default Restaurante;