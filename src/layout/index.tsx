import React from 'react';
import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';


 import { Grid } from './styled';

const Layout: React.FC = () => {
  return (

    <Grid>
    <Header userName="Claudinier Neto" accontCredits="250,00"></Header>

    <Content/>
   
    <Footer/>
    </Grid>


  );
}

export default Layout;