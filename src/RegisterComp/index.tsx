import React from 'react'
import { Container, Body, TransparentLayer, GlobalStyle } from '../Login/styles'
import LoadRandomPicture from '../Login/backgroundImage';
import { RegisterStyle } from '../Register/styles'

const RegisterComp: React.FC = () => {
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
                <h1>Empresa!</h1>
                <div className="form-align">
                  <div className="line line-align">
                    <label className="label-align">Nome: </label>
                    <input className="input-align" type="text" placeholder="Nome da Empresa" id="fullname" name="fullname" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">CNPJ: </label>
                    <input className="input-align" type="text" placeholder="00.000.000/0000-00" id="CNPJ" name="CNPJ" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Email: </label>
                    <input className="input-align" type="email" id="email" placeholder="Email" name="email" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Senha: </label>
                    <input className="input-align" type="password" id="password" placeholder="Senha" name="password" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Confirmar: </label>
                    <input className="input-align" id="cpassword" type="password" placeholder="Confirmar Senha" name="cpassword" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Número: </label>
                    <input className="input-align" id="phone" type="text" placeholder="(**)9****-****" name="phone" required />
                  </div>  
                </div>
                <div className="line">
                  <a href="/register" className="forgot">Cadastro de usuário</a>
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

export default RegisterComp