import React, { useState } from 'react';
import { Container, Body, TransparentLayer, GlobalStyle } from './styles';
import LoadRandomPicture from './backgroundImage.jsx';
import api from '../services/api'
// import { Link, Redirect } from 'react-router-dom';

const Login: React.FC = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  function submit(e:any){
    e.preventDefault()
    api.post("/login", {
      email: data.email,
      password: data.password
    }).then(res=>{
      localStorage.setItem('tokenUserJWT',res.data)
      
    })
  }

  function handle(e:any){
    const newData:any = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  
  return (
    <>
      <GlobalStyle />
      <Container>
      <Body backgroundImage={ LoadRandomPicture() }>
        <TransparentLayer />
        <a href="/home" className="logoBackground"><img src="/images/startup (1).png" alt="logo" className="logoImg" /></a>
          <form onSubmit={(e)=>submit(e)} className="box" method="POST" action="">
            <h1>Me Chama!</h1>
            <input onChange={(e)=>handle(e)} value={data.email} type="text" id="email" name="email" placeholder="Email" className="input-style" />
            <input onChange={(e)=>handle(e)} value={data.password} type="password" id="password" name="password" placeholder="Password" className="input-style" />
            <a href="/passedit" className="forgot">Esqueceu sua senha?</a>
            <input type="submit" name="" value="Entrar" className="submit-style" />
            <a href="/register" className="forgot">Cadastre-se</a>
            <ul className="social-network social-circle"> 
              <li><a href="#" className="icoFacebook" title="Facebook"><img src={"/Images/Login/facebookLogo.png"} alt="facebookLogo" className="facebookImg" /></a></li>
              <li><a href="#" className="icoTwitter" title="Twitter"><img src={"/Images/Login/twitterLogo.png"} alt="twitterLogo" className="twitterImg" /></a></li>
              <li><a href="#" className="icoGoogle" title="Google +"><img src={"/Images/Login/googleLogo.png"} alt="googleLogo" className="googleImg" /></a></li>
            </ul>
          </form>
        </Body>
      </Container>
    </>
  );
}

export default Login;