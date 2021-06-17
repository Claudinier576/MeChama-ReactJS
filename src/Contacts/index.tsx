import React from 'react';
import { Container } from './styles';

const Contacts: React.FC = () => {
  return (
    <Container>
      <h1>Contato</h1>
      <a href="/">Mechama.com/contato</a>
      <a href="https://web.whatsapp.com/send?phone=5513981409223" target="_blank" rel="noreferrer">Whatsapp</a>
      <a href="mailto:suportemechama01@gmail.com" target="_blank" rel="noreferrer">Gmail</a>
    </Container>
  )
}

export default Contacts;