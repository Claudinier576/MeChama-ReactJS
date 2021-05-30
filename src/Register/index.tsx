import React, { useState } from 'react'
import { Container, Body, TransparentLayer, GlobalStyle } from '../Login/styles'
import LoadRandomPicture from '../Login/backgroundImage';
import { RegisterStyle } from './styles'
// import { useHistory } from 'react-router'
import api from '../services/api'

const Register: React.FC = () => {

  // let history = useHistory()

  const [data, setData] = useState({
    fullname: "",
    cpf: "",
    gender: "",
    email: "",
    password: "",
    cpassword: "",
    phone: ""
  })

  async function submit(e:any){
    e.preventDefault()
    await api.post("/register", {
      fullname: data.fullname,
      cpf: data.cpf,
      gender: data.gender,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      phone: data.phone
    }).then(res=>{
      // console.log(res)
      // history.push("/login")
    })
  }

  function handle(e:any){
    const newData:any = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    // console.log(newData)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <RegisterStyle>
          <Body backgroundImage={ LoadRandomPicture() }>
            <TransparentLayer />
            <a href="/home" className="logoBackground"><img src="/images/startup (1).png" alt="logo" className="logoImg" /></a>
            <div className="card-body">
              <form onSubmit={(e)=>submit(e)} method="POST" className="box">
                <h1 className="">Usuário!</h1>
                <div className="form-align">
                  <div className="line line-align">
                    <label className="label-align">Nome: </label>
                    <input onChange={(e)=>handle(e)} value={data.fullname} className="input-align" type="text" placeholder="Nome Completo" id="fullname" name="fullname" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">CPF: </label>
                    <input onChange={(e)=>handle(e)} value={data.cpf} type="text" className="input-align" placeholder="000.000.000-00" name="cpf" id="cpf" />
                  </div>
                  <div className="line line-align">
                    <select className="select-align" name="gender" id="gender" onChange={(e)=>handle(e)} defaultValue="none">
                      <option value="none" disabled hidden>Gênero</option>
                      <option value={(data.gender = "M")}>Masculino</option>
                      <option value={(data.gender = "F")}>Feminino</option>
                      <option value={(data.gender = "E")}>Não informar</option>
                    </select>
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Email: </label>
                    <input onChange={(e)=>handle(e)} value={data.email} className="input-align" type="email" id="email" placeholder="Email" name="email" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Senha: </label>
                    <input onChange={(e)=>handle(e)} value={data.password} className="input-align" type="password" id="password" placeholder="Senha" name="password" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Confirmar: </label>
                    <input onChange={(e)=>handle(e)} value={data.cpassword} className="input-align" id="cpassword" type="password" placeholder="Confirmar Senha" name="cpassword" />
                  </div>
                  <div className="line line-align">
                    <label className="label-align">Número: </label>
                    <input onChange={(e)=>handle(e)} value={data.phone} className="input-align" id="phone" type="text" placeholder="(**)9****-****" name="phone" />
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