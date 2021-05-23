import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestauranProduct from '../RestauranProduct';
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
  empresa: [
    {
      id: number,
      name: string,
      description: string,
      LogoImg: string,
      BannerImg: string,
      number: string
    }
  ],
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


const Restaurante: React.FC<RestauranteProps> = () => {

  const [RestaurteData, setRestaurteData] = useState<RestauranteProp>();
  const restaurante: PropR = useParams();
  useEffect(() => {
    fetch('http://tn-15mechama-com.umbler.net/company/' + restaurante.restaurante).then(
      response => response.json()).then(data => setRestaurteData(data))



  }, [restaurante]);



  return (
    <Container>

      {RestaurteData?.empresa ? <RestauranteInfo
        img={'http://tn-15mechama-com.umbler.net/images/' + RestaurteData?.empresa[0].LogoImg}
        description={'' + RestaurteData?.empresa[0].description}
        name={'' + RestaurteData?.empresa[0].name}
      /> :<div></div>}

        <ProductsView>
        {RestaurteData?.products ? RestaurteData.products.map((product,key)=>{
         return(
          <RestauranProduct name={product.name}
          key={key}
           id={product.id}
            description={product.description}
             value={product.value}
              img={'http://tn-15mechama-com.umbler.net/images/'+ product.img} />
         );
        }) : ''}
        </ProductsView>
      
      
    </Container>
  );
}

export default Restaurante;