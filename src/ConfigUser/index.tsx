import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container,HistoriPurchases,Config } from './styles';

interface parametersProps{
  userCode: string;
}

const ConfigUser: React.FC = () => {

  const [UserData, setUserData] = useState();
  const parameters:parametersProps = useParams();
  useEffect(() => {
    fetch('http://tn-15mechama-com.umbler.net/userConfig/' + parameters.userCode).then(
      response => response.json()).then(data => setUserData(data))
  }, [parameters]);

  return (
    <Container>

      <Config></Config>
      <HistoriPurchases></HistoriPurchases>

    </Container>
  );
}

export default ConfigUser;