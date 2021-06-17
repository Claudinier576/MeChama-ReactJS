import React, { useState } from 'react';
import { useHistory } from 'react-router'
import { Container, Body, TransparentLayer, GlobalStyle, InvalidAlert } from './styles';
import LoadRandomPicture from './backgroundImage.jsx';
import api from '../services/api'

const Login: React.FC = () => {

  let history = useHistory()

  const [backgroundImage, setBackgroundImage] = useState(LoadRandomPicture())
  const [errorLogin, setErrorLogin] = useState(false)

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  async function submit(e:any){
    e.preventDefault()
    await api.post("/login", {
      email: data.email,
      password: data.password
    }).then(res=>{
      if(!res.data.errorLogin){
        localStorage.setItem('tokenUserJWT',res.data)
        history.push("/")
        window.location.reload()
      }else {
        history.push("/login")
        setErrorLogin(true)
        setData({
          email: "",
          password: "",
        })
      }
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
        <Body backgroundImage={backgroundImage}>
          <TransparentLayer />
          <a href="/" className="logoBackground"><img src="/images/startup (1).png" alt="logo" className="logoImg" /></a>
          <form onSubmit={submit} className="box" method="POST" action="">
            <InvalidAlert errorLogin={errorLogin}>Email ou senha inválidos.</InvalidAlert>
            <h1>Me Chama!</h1>
            <input onChange={handle} value={data.email} type="text" id="email" name="email" placeholder="Email" className="input-style" />
            <input onChange={handle} value={data.password} type="password" id="password" name="password" placeholder="Password" className="input-style" />
            <a href="/passedit" className="forgot">Esqueceu sua senha?</a>
            <button type="submit" name="" className="submit-style">Entrar</button>
            <a href="/register" className="forgot">Cadastre-se</a>
            <ul className="social-network social-circle"> 
              <li><a href="/login" className="icoFacebook" title="Facebook"><img src={"/Images/Login/facebookLogo.png"} alt="facebookLogo" className="facebookImg" /></a></li>
              <li><a href="/login" className="icoTwitter" title="Twitter"><img src={"/Images/Login/twitterLogo.png"} alt="twitterLogo" className="twitterImg" /></a></li>
              <li><a href="/login" className="icoGoogle" title="Google +"><img src={"/Images/Login/googleLogo.png"} alt="googleLogo" className="googleImg" /></a></li>
            </ul>
          </form>
        </Body>
      </Container>
    </>
  );
}

export default Login;