import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Register from './Register/index'
import RegisterComp from './RegisterComp'
import GlobalStyled from './GlobalStyled'

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/registercomp">
            <RegisterComp />
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