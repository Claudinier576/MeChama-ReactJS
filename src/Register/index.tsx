import React from 'react'
import { Container, Body, TransparentLayer, GlobalStyle } from '../Login/styles'
import LoadRandomPicture from '../Login/backgroundImage';
import { RegisterStyle } from './styles'

const Register: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RegisterStyle>
          <Body backgroundImage={ LoadRandomPicture() }>
            <TransparentLayer />
            <a href="/home" className="logoBackground"><img src="/images/startup (1).png" alt="logo" className="logoImg" /></a>
            <div className="card-body">
              <form method="POST" className="box">
                <h1 className="">Usuário!</h1>
                <div className="form-align">
                  <div className="line line-align">
                    <label className="label-align">Nome: </label>
                    <input className="input-align" type="text" placeholder="Nome Completo" id="fullname" name="fullname" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">CPF: </label>
                    <input type="text" className="input-align" placeholder="000.000.000-00" name="cpf" id="cpf" />
                  </div>
                  <div className="line line-align">
                    <select className="select-align" placeholder="Gênero" name="gender">
                      <option value="none" selected disabled hidden>Gênero</option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option>Não informar</option>
                    </select>
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Email: </label>
                    <input className="input-align" type="email" id="email" placeholder="Email" name="email" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Senha: </label>
                    <input className="input-align" type="password" id="password" placeholder="Senha" name="password" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Confirmar: </label>
                    <input className="input-align" id="cpassword" type="password" placeholder="Confirmar Senha" name="cpassword" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Número: </label>
                    <input className="input-align" id="phone" type="text" placeholder="(**)9****-****" name="phone" />
                  </div>
                </div>
                <div className="line">
                  <a href="/registercomp" className="forgot">Cadastro de empresa</a>
                </div>
                <div className="line">
                  <input type="submit" name="" value="Cadastrar" className="submit-register" />
                </div>
                <div className="line">
                  <a href="/login" className="forgot">Já possuo cadastro</a>
                </div>    
              </form>
            </div>
          </Body>
        </RegisterStyle>
      </Container>
    </>
  )
}

export default Register