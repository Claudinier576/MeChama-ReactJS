import React from 'react';
import { Container } from './styles';

const DevsContacts: React.FC = () => {
  return (
    <Container>
      <h1>Devs</h1>
      <a href="http://github.com/Claudinier576">Github: <span>Claudinier</span></a>
      <a href="http://github.com/renatoruiz2607">Github: <span>Renato</span></a>
    </Container>
  );
}

export default DevsContacts;