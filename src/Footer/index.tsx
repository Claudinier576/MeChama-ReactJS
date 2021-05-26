import React from 'react';
import Contacts from '../Contacts';
import DevsContacts from '../DevsContacts';
import { Container } from './styles';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Contacts/>
        <DevsContacts/> 
      </Container>
    </>
  );
}

export default Footer;