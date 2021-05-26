import React, { useState } from 'react';
import { Itens,Button } from './styles';

// import { Container } from './styles';

const ButtonCategories: React.FC = () => {

  const [ButtonState, setButtonState] = useState('disabled');

  return (
    <> 
      <Button onClick={()=>{  
        ButtonState === 'active' ? setButtonState('disabled'):setButtonState('active'); 
      }}>
        Categorias
      </Button>

      <Itens className={ButtonState}>
        <a href="/">Comida Chinesa</a>
        <a href="/">Comida Mexicana</a>
        <a href="/">Sushis</a>
      </Itens>
    </>
  );
}

export default ButtonCategories;