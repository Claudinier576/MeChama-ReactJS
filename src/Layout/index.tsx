import React, { useEffect, useState } from 'react'
import Content from '../Content'
import Footer from '../Footer'
import Header from '../Header'
import { Grid } from './styles'
import axios from 'axios'

interface userLabelProps {
  name: string,
  accontCredits: string,
  imgPerfile: string;
}

const Layout: React.FC = () => {
  const [userData, setUserData] = useState<userLabelProps>({name: "", accontCredits: "", imgPerfile: ""});
  
  useEffect(() => {
    axios.get('http://tn-15mechama-com.umbler.net/userConfig', {
      headers: {
        tokenUserJWT: localStorage.getItem('tokenUserJWT')
      }
      }).then(res => {
        setUserData(res.data.userinfo)
      })
  },[])
  
  return (
    <Grid>
      <Header user={userData} />
      <Content/>
      <Footer/>
    </Grid>
  )
}

export default Layout;