import React, { useState } from 'react';
import { Itens,Button } from './styles';

// import { Container } from './styles';

const ButtonCategorys: React.FC = () => {

    const [ButtonState, setButtonState] = useState('disabled');

  return (<>
  
    <Button onClick={()=>{
      
      ButtonState === 'active' ? setButtonState('disabled'):setButtonState('active'); 
    
    }}>
      Categorias
    </Button>
    <Itens className={ButtonState}>
    <a href="/categoria/promocoes">Promoções do Dia</a>
    <a href="/categoria/Combos">Combos</a>
    <a href="/categoria/Chinesa">Comida Chinesa</a>
    <a href="/categoria/Mexicana">Comida Mexicana</a>
    <a href="/categoria/Japonesa">Comida Japonesa</a>
    <a href="/categoria/Pizzas">Pizzas</a>
    <a href="/categoria/Chocolates">Chocolates</a>
    <a href="/categoria/Bebidas">Bebidas</a>
    </Itens>
    


  </>);
}

export default ButtonCategorys;