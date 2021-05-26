import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import GlobalStyled from './GlobalStyled';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route path="/home">
            <Layout/>
            <GlobalStyled />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;