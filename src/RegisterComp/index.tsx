import React, { useState } from 'react'
import { Container, Body, TransparentLayer, GlobalStyle } from '../Login/styles'
import LoadRandomPicture from '../Login/backgroundImage';
import { RegisterStyle } from '../Register/styles'
import api from '../services/api'
import { useHistory } from 'react-router'

const RegisterComp: React.FC = () => {

  let history = useHistory()

  const [data, setData] = useState({
    fullname: "",
    cnpj: "",
    email: "",
    password: "",
    cpassword: "",
    phone: ""
  })

  async function submit(e:any){
    e.preventDefault()
    await api.post("/register", {
      fullname: data.fullname,
      cnpj: data.cnpj,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      phone: data.phone
    }).then(res=>{
      history.push("/login")
    })
  }

  function handle(e:any){
    const newData:any = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <RegisterStyle>
          <Body backgroundImage={ LoadRandomPicture() }>
            <TransparentLayer />
            <a href="/" className="logoBackground"><img src="/images/startup (1).png" alt="logo" className="logoImg" /></a>
            <div className="card-body">
              <form onSubmit={submit} method="POST" className="box">
                <h1>Empresa!</h1>
                <div className="form-align">
                  <div className="line line-align">
                    <label className="label-align" htmlFor="fullname">Nome: </label>
                    <input onChange={handle} value={data.fullname} className="input-align" type="text" placeholder="Nome da Empresa" id="fullname" name="fullname" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="cnpj">CNPJ: </label>
                    <input onChange={handle} value={data.cnpj} className="input-align" type="text" placeholder="00.000.000/0000-00" id="cnpj" name="cnpj" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="email">Email: </label>
                    <input onChange={handle} value={data.email} className="input-align" type="email" id="email" placeholder="Email" name="email" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="password">Senha: </label>
                    <input onChange={handle} value={data.password} className="input-align" type="password" id="password" placeholder="Senha" name="password" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="cpassword">Confirmar: </label>
                    <input onChange={handle} value={data.cpassword} className="input-align" id="cpassword" type="password" placeholder="Confirmar Senha" name="cpassword" required />
                  </div>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="phone">Número: </label>
                    <input onChange={handle} value={data.phone} className="input-align" id="phone" type="text" placeholder="(**)9****-****" name="phone" required />
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