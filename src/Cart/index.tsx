import React from 'react'
import { Container, ContainerLink, Item } from './styles'

export  const CartIcon: React.FC = () => {
  return (
    <ContainerLink href="/compras">
     <img className="CartIcon" src="/CartIcon.png" alt="CartIconImg" />
    </ContainerLink>
  )
}

const totalItens = undefined;
export const Cart: React.FC = () => {
  return (
    <Container>
      {totalItens ? <Item></Item>
      : <h1>Opps sem compras no momento vá para a pagina inicial :)</h1>}
    </Container>
  )
}