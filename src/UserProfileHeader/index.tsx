import React, { useState, useEffect } from 'react'
import { UserInfos, CompanyInfos } from './styles'
import axios from 'axios'

interface PropsHeader {
  user:{
    name: string;
    accontCredits: string;
  }
}

const UserProfileHeader: React.FC<PropsHeader> = ({user}) => {

  const [isAuth, setIsAuth] = useState(true)

  useEffect(() => {
    async function callAPI() {
    await axios.get('http://tn-15mechama-com.umbler.net/userConfig', {
      headers: {
      tokenUserJWT: localStorage.getItem('tokenUserJWT')
      }
    }).then(res => {
      if(res.data.userinfo.Type !== 'empresa'){
      setIsAuth(true)
      } else{
      setIsAuth(false)
      }
    })
    }
    callAPI()
  }, [])

  if(isAuth === true){
    return (
      <UserInfos href={'/User/me/'+user.name}>
        <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userInfosImg" />
        <h1>{user.name}</h1>
        <h2>R${user.accontCredits}</h2>
      </UserInfos>
    )
  } else{
      return (
        <CompanyInfos href={'/Emp/me/'+user.name}>
          <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userInfosImg" />
          <h1>{user.name}</h1>
        </CompanyInfos>
      )
  }
}

export default UserProfileHeader