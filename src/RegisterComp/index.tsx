import React, { useState } from 'react'
import { Container, Body, TransparentLayer, GlobalStyle, RequiredField } from '../Login/styles'
import LoadRandomPicture from '../Login/backgroundImage';
import { RegisterStyle } from '../Register/styles'
import api from '../services/api'
import { useHistory } from 'react-router'
import { compSchema } from '../services/yupSchemas'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const RegisterComp: React.FC = () => {

  let history = useHistory()
  const [backgroundImage, setBackgroundImage] = useState(LoadRandomPicture())

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(compSchema),
  })

  const submit = async (data:any) => {
    await api.post("/registeremp", {
      fullname: data.fullname,
      cnpj: data.cnpj,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      phone: data.phone,
    }).then(res=>{
      alert("Cadastro realizado com sucesso!")
      history.push("/login")
    })
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <RegisterStyle>
        <Body backgroundImage={backgroundImage}>
            <TransparentLayer />
            <a href="/" className="logoBackground"><img src="/images/startup (1).png" alt="logo" className="logoImg" /></a>
            <div className="card-body">
              <form onSubmit={handleSubmit(submit)} method="POST" className="box">
                <h1>Empresa!</h1>
                <div className="form-align">
                  <div className="line line-align">
                    <label className="label-align" htmlFor="fullname">Nome: </label>
                    <input className="input-align" type="text" placeholder="Nome da Empresa" id="fullname" {...register('fullname')} />
                  </div>
                  <RequiredField>{errors.fullname?.message}</RequiredField>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="cnpj">CNPJ: </label>
                    <input className="input-align" type="text" placeholder="00.000.000/0000-00" id="cnpj" {...register('cnpj')} />
                  </div>
                  <RequiredField>{errors.cnpj?.message}</RequiredField>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="email">Email: </label>
                    <input className="input-align" type="email" id="email" placeholder="Email" {...register('email')} />
                  </div>
                  <RequiredField>{errors.email?.message}</RequiredField>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="password">Senha: </label>
                    <input className="input-align" type="password" id="password" placeholder="Senha" {...register('password')} />
                  </div>
                  <RequiredField>{errors.password?.message}</RequiredField>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="cpassword">Confirmar: </label>
                    <input className="input-align" id="cpassword" type="password" placeholder="Confirmar Senha" {...register('cpassword')} />
                  </div>
                  <RequiredField>{errors.cpassword && "Senhas devem ser idênticas."}</RequiredField>
                  <div className="line line-align">
                    <label className="label-align" htmlFor="phone">Número: </label>
                    <input className="input-align" id="phone" type="text" placeholder="(**)9****-****" {...register('phone')} />
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