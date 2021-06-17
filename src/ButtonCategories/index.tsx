import React, { useState } from 'react';
import { Itens,Button } from './styles';

const ButtonCategories: React.FC = () => {

    const [buttonState, setButtonState] = useState('disabled');

  return (
    <>
      <Button onClick={()=>{
        buttonState === 'active' ? setButtonState('disabled'):setButtonState('active')
      }}>
        <img src="/Images/Header/Categories3.png" alt="Categories" className="buttonImage" />
        <p className="buttonText">Categorias</p>
      </Button>
      <Itens className={buttonState}>
        <a href="/categoria/promocoes">Promoções do Dia</a>
        <a href="/categoria/Combos">Combos</a>
        <a href="/categoria/Chinesa">Comida Chinesa</a>
        <a href="/categoria/Mexicana">Comida Mexicana</a>
        <a href="/categoria/Japonesa">Comida Japonesa</a>
        <a href="/categoria/Pizza">Pizzas</a>
        <a href="/categoria/Chocolates">Chocolates</a>
        <a href="/categoria/Bebidas">Bebidas</a>
      </Itens>
    </>
  );
}

export default ButtonCategories;