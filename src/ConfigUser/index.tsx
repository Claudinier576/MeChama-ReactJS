import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, HistoriPurchases, Config, ItemPurchase, Photo } from './styles';
import ReactModal from 'react-modal';
import api from '../services/api';
import { withRouter } from 'react-router-dom'


interface UserDataProps {
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
interface ItemHistoryProps {
  "companyName": String,
  "productName": String,
  "productValue": String,
  "productDate": String,
  "productQuantity": Number
}



const ConfigUser: React.FC = () => {

  const [update, setUpdate] = useState(null);

  const [data, setData] = useState({
    email: "",
    npassword: "",
    cpassword: "",
    password: ""
  })


  function handle(e: any) {
    const newData: any = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  async function submitPass() {


    console.log('enviando 2');
    //  var headers = {'header1': DataLocalStorage}
    //   var teste = await api.post("/userConfig/passEdit", {
    //     headers: {
    //       tokenUserJWT: DataLocalStorage
    //     },
    //     npassword : data.npassword,
    //     cpassword: data.cpassword,
    //     password: data.password
    //   })

    await axios.post('https://tn-15mechama-com.umbler.net/userConfig/passEdit', {
      npassword: data.npassword,
      cpassword: data.cpassword,
      password: data.password
    },
      {
        headers: {
          tokenUserJWT: DataLocalStorage
        }
      }).then(res => {

        console.log('aaaaaaaaaaaaaaaaaaaa', res.data);

        setUpdate(res.data?.update.value);

      }).catch(err => {
        console.log('a', err);

      })


    console.log('teste', update);
  }





  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#1a1d2d',
      width: '95%',
      height: '85%',

    }, button: {
      width: '50%',
      background: 'none',
      color: '#fff',
      margin: '15px 0px 15px 0',
      fontSize: '35px',
      cursor: 'pointer',
      border: '2px solid #fff',
      borderRadius: '25px'
    },
    div: {
      color: '#fff',
      margin: '15px 25px',
      textAlign: 'center' as const,

    }, close: {
      background: 'none',
      color: '#fff',
      fontSize: '24px'
    },
    label: {

      color: '#fff',
      margin: '15px 0px 15px 0',
      fontSize: '35px',
      cursor: 'pointer',


    },
    input: {
      background: 'none',
      color: '#fff',
      width: '100%',
      height: '25px',
      fontSize: '24px',
      borderBottom: '2px solid #fff',
    }

  };

  const [IsOpenName, setIsOpenName] = useState(false);
  const [IsOpenPass, setIsOpenPass] = useState(false);

  function handleCloseModalName() {

    setIsOpenName(false);

  }
  function handleOpenModalName() {
    setIsOpenName(true);
  }
  function handleCloseModalPass() {

    setIsOpenPass(false);

  }
  function handleOpenModalPass() {
    setIsOpenPass(true);
  }


  const [UserData, setUserData] = useState<UserDataProps>({});


  const DataLocalStorage = localStorage.getItem('tokenUserJWT');

  useEffect(() => {

    async function callAPI() {

      await axios.get('https://tn-15mechama-com.umbler.net/userConfig', {
        headers: {
          tokenUserJWT: DataLocalStorage
        }
      }).then(response => setUserData(response.data));
    }
    callAPI();


  }, [DataLocalStorage]);

  return (


    <>

      <Container>

        <Config>
          <div className="Card">
            <Photo src={"https://tn-15mechama-com.umbler.net/images/" + UserData.userinfo?.imgPerfile} alt="" />
            <h1>{UserData.userinfo?.name}</h1>
            <h1>{UserData.userinfo?.email}</h1>
          </div>

          <div className="Card">
            <div className="Card">
              <label htmlFor="Photo"> Alterar Foto </label>
              <input type="file" name="Photo" id="Photo" accept="image/*" />
            </div>
            <div className="Card">
              <label htmlFor="userName" onClick={handleOpenModalName}> Alterar nome </label>
            </div>
            <div className="Card">
              <label htmlFor="Password" onClick={handleOpenModalPass}> Alterar Senha </label>
            </div>

          </div>



        </Config>
        <HistoriPurchases>{UserData.purchaseHistory?.map((item: ItemHistoryProps, i: any) => {

          return (<ItemPurchase key={i}>
            <h1 className="title">{item.companyName}</h1>
            <h2 className="nameProduct">{item.productName} {item.productQuantity}x</h2>
            <h3 className="value">R$ {item.productValue}</h3>
            <p className="Date">{item.productDate}</p>




          </ItemPurchase>)

        })}</HistoriPurchases>

      </Container>

      <ReactModal
        onRequestClose={handleCloseModalPass}
        isOpen={IsOpenPass}
        style={customStyles}
      >

        <div>
          <button onClick={handleCloseModalPass} style={customStyles.close}>X</button>
          <div style={customStyles.div}>
            <label htmlFor="UserPass" style={customStyles.label}><i className="far fa-user" />Senha atual</label>
            <input type="password" onChange={handle} value={data.password} name="password" id="password" style={customStyles.input} />

          </div>
          <br />
          <div style={customStyles.div}>
            <label htmlFor="UserNewPass" style={customStyles.label}><i className="far fa-user" style={customStyles.label} />Nova Senha</label>
            <input onChange={handle} value={data.npassword} type="password" name="npassword" id="npassword" style={customStyles.input} />

          </div>
          <br />
          <div style={customStyles.div}>
            <label htmlFor="UserNewPass" style={customStyles.label}><i className="far fa-user" style={customStyles.label} />Confirmar Nova Senha</label>
            <input onChange={handle} value={data.cpassword} type="password" name="cpassword" id="cpassword" style={customStyles.input} />

            <button onClick={submitPass} type="button" style={customStyles.button} >Salvar</button>
          </div>
        </div>





      </ReactModal>


      <ReactModal
        onRequestClose={handleCloseModalName}
        isOpen={IsOpenName}
        style={customStyles}
      >
        <button onClick={handleCloseModalName} style={customStyles.close}>X</button>
        <div style={customStyles.div}>
          <label htmlFor="UserName" style={customStyles.close}><i className="far fa-user" />Como deseja ser chamado?</label>
          <input type="text" style={customStyles.input} name="UserName" id="UserName" />
          <button type="submit" style={customStyles.button}>Salvar</button>
        </div>


      </ReactModal>
    </>

  );
}

export default withRouter(ConfigUser);