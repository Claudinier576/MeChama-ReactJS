import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container,HistoriPurchases,Config } from './styles';


interface UserDataProps
  {
    "userinfo"?: {
      "imgPerfile": String,
      "name": String,
      "CPF": String,
      "number": String,
      "userName": String,
      "email": String
    },
    "purchaseHistory"?: [
      {
        "companyName": String,
        "productName": String,
        "productValue": String,
        "productDate": String,
        "productQuantity": Number
      },
    ],
    "mansageError"?: Boolean,
    "mansageConfirm"?: Boolean
  }
  interface ItemHistoryProps 
    {
      "companyName": String,
      "productName": String,
      "productValue": String,
      "productDate": String,
      "productQuantity": Number
    }
  


const ConfigUser: React.FC = () => {

  const [UserData, setUserData] = useState<UserDataProps>({});


  const DataLocalStorage = localStorage.getItem('tokenUserJWT');

  useEffect(() => {

  async function  callAPI(){

    await axios.get('http://tn-15mechama-com.umbler.net/userConfig',{
      headers: {
       tokenUserJWT : DataLocalStorage
      }
     }).then(response =>  setUserData(response.data));
  }
    callAPI();

  
  }, []);

  return (
    <Container>

      <Config><h1>{UserData.userinfo?.name}</h1></Config>
      <HistoriPurchases>{UserData.purchaseHistory?.map((item : ItemHistoryProps,i:any) => {

        return (<h1 key={i}> {item.companyName} </h1>)
        
      })}</HistoriPurchases>

    </Container>
  );
}

export default ConfigUser;