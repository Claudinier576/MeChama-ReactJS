import React, { useState, useEffect } from 'react'
import { UserInfos, CompanyInfos, UnloggedInfo } from './styles'
import axios from 'axios'

interface PropsHeader {
  user:{
    name: string;
    accontCredits: string;
  }
}

const UserProfileHeader: React.FC<PropsHeader> = ({user}) => {

  const [isUser, setIsUser] = useState(true)
  const [isCompany, setIsCompany] = useState(true)

  async function callAPI() {
    await axios.get('https://tn-15mechama-com.umbler.net/userConfig', {
      headers: {
      tokenUserJWT: localStorage.getItem('tokenUserJWT')
      }
    }).then(res => {
      if(res.data.userinfo.Type !== 'empresa'){
        setIsUser(true)
        setIsCompany(false)
      } else{
        setIsCompany(true)
        setIsUser(false)
      }
    })
  }
  useEffect(() => {callAPI()}, [])

  if(isUser === true && (localStorage.getItem('tokenUserJWT') || "").length !== 0){
    return (
      <UserInfos href={'/User/me/'+user.name}>
        <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userInfosImg" />
        <h1>{user.name}</h1>
        <h2>R${user.accontCredits}</h2>
      </UserInfos>
    )
  } else if(isCompany === true && (localStorage.getItem('tokenUserJWT') || "").length !== 0){
      return (
        <CompanyInfos href={'/Emp/me/'+user.name}>
          <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userInfosImg" />
          <h1>{user.name}</h1>
        </CompanyInfos>
      )
  } else {
    return (
      <UnloggedInfo href={'/Emp/me/'+user.name}>
        <img className="UserImg" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userInfosImg" />
      </UnloggedInfo>
    )
  }
}


export default UserProfileHeader