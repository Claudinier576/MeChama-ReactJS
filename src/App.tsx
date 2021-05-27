import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import GlobalStyled from './GlobalStyled';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Layout/>
            <GlobalStyled />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;