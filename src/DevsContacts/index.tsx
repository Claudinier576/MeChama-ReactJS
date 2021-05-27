import React from 'react';
import { Container } from './styles';

const DevsContacts: React.FC = () => {
  return (
    <Container>
      <h1>Contato Devs</h1>
      <a href="https://github.com/Claudinier576">Github: <span>Claudinier</span></a>
      <a href="https://github.com/renatoruiz2607">Github: <span>Renato</span></a>
    </Container>
  );
}

export default DevsContacts;