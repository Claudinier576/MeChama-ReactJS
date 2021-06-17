import React from 'react'
import { Container, ContainerLink, Item } from './styles'
import { withRouter } from 'react-router-dom'

export const CartIcon: React.FC = () => {
  return (
    <ContainerLink href="/compras">
     <img className="CartIcon" src="/CartIcon.png" alt="CartIconImg" />
    </ContainerLink>
  )
}

const totalItens = undefined;
const Cart: React.FC = () => {
  return (
    <Container>
      {totalItens ? <Item></Item>
      : <h1>Ops, sem compras no momento. &#128517;</h1>}
    </Container>
  )
}

export default withRouter(Cart)