import React from 'react';
import { Container } from './styles';

const DevsContacts: React.FC = () => {
  return (
    <Container>
      <h1>Devs</h1>
      <a href="http://github.com/Claudinier576" target="_blank" rel="noreferrer">Github: <span>Claudinier</span></a>
      <a href="http://github.com/renatoruiz2607" target="_blank" rel="noreferrer">Github: <span>Renato</span></a>
    </Container>
  );
}

export default DevsContacts;