import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Container, AddProduct, Config, Photo } from './styles';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom'
import RestauranteProduct from '../RestauranteProduct'
import { ProductsView } from '../Restaurante/styles';
import NewProduct from '../NewProduct';



interface EmpDataProps {
  "user"?: {
    "imgPerfile": String,
    "name": String,
    "CPF": String,
    "number": String,
    "userName": String,
    "email": String
  },"empresa"?:{
    "banner": String,
    "logo": String,
    "name": String,
  },
  "HistorySell"?: [
    {
      "companyName": String,
      "productName": String,
      "productValue": String,
      "productDate": String,
      "productQuantity": Number
    },
  ],
  "products"?: [{
    id: number,
    name: string,
    description: string,
    value: number,
    img: string,
    additionals: string
  }]
  "mansageError"?: Boolean,
  "mansageConfirm"?: Boolean
}



const ConfigEmp: React.FC = () => {


  const [update, setUpdate] = useState(null);

  const [data, setData] = useState({
    npassword: "",
    cpassword: "",
    password: "",
    ProductName: "",
    ProductValue: "",
    ProductImg: "",
  })
  const [dataUpdate, setDataUpdate] = useState({
    userName: "",
  })


  function handleUpdate(e: any) {
    const newData: any = { ...dataUpdate }
    newData[e.target.id] = e.target.value
    setDataUpdate(newData)
    console.log(dataUpdate);
    
  }
  function handle(e: any) {
    const newData: any = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  async function saveNewName(){
    await axios.post('http://tn-15mechama-com.umbler.net/userConfig/infosedit', {
      userName : dataUpdate.userName
    },
      {
        headers: {
          tokenUserJWT: DataLocalStorage
        }
      }).then(res => {

        setUpdate(res.data?.update.value);
        
        window.location.reload();

      }).catch(err => {
        console.log(err);
        alert("Não foi possivel alterar");

      })


  }

  async function submitPass() {
    await axios.post('http://tn-15mechama-com.umbler.net/userConfig/passEdit', {
      npassword: data.npassword,
      cpassword: data.cpassword,
      password: data.password
    },
      {
        headers: {
          tokenUserJWT: DataLocalStorage
        }
      }).then(res => {

        alert("Alterado com sucesso");
      }).catch(err => {
        console.log(err);
        alert("Não foi possivel alterar");
      })


  }

  const customStyles = {
    content: {
      top: '56%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'var(--white)',
      width: '95%',
      height: '85%',

    }, button: {
      width: '50%',
      background: 'none',
      color: 'var(--text)',
      margin: '15px 0px 15px 0',
      fontSize: '20px',
      cursor: 'pointer',
      border: '2px solid var(--text)',
      borderRadius: '25px',
    },
    div: {
      color: 'var(--text)',
      margin: '15px 25px',
      textAlign: 'center' as const,

    }, close: {
      background: 'none',
      color: 'var(--text)',
      fontSize: '15px'
    },
    label: {
      color: 'var(--text)',
      margin: '15px 0px 15px 0',
      fontSize: '20px',
      cursor: 'pointer',
    },
    input: {
      background: 'none',
      color: 'var(--text)',
      width: '100%',
      height: '25px',
      fontSize: '15px',
      borderBottom: '2px solid var(--text)',
    }
  };

  // const [IsOpenName, setIsOpenName] = useState(false);
  const [IsOpenPass, setIsOpenPass] = useState(false);
  
  // function handleCloseModalName() {

  //   setIsOpenName(false);

  // }
  // function handleOpenModalName() {
  //   setIsOpenName(true);
  // }
  function handleCloseModalPass() {

    setIsOpenPass(false);

  }
  function handleOpenModalPass() {
    setIsOpenPass(true);
  }

  const [EmpData, setEmpData] = useState<EmpDataProps>({});


  const DataLocalStorage = localStorage.getItem('tokenUserJWT');

  useEffect(() => {


    async function callAPI() {

      await axios.get('http://tn-15mechama-com.umbler.net/company', {
        headers: {
          tokenUserJWT: DataLocalStorage
        }
      }).then(response => setEmpData(response.data));
    }
    callAPI();


  }, [DataLocalStorage]);

  return (


    <>

      <Container>

        <Config>
          <div className="Card">
            <div className="card-align">
              <Photo src={"http://tn-15mechama-com.umbler.net/images/" + EmpData.empresa?.logo} alt="" />
              <h1>{EmpData.user?.name}</h1>
            </div>
            <h1 className="email-align">{EmpData.user?.email}</h1>
          </div>

          <div className="Card">
            <div className="Card">
              <label htmlFor="Photo"> Alterar foto </label>
              <input type="file" name="Photo" id="Photo" accept="image/*" />
            </div>
            {/* <div className="Card">
              <label htmlFor="userName" onClick={handleOpenModalName}> Alterar título</label>
            </div> */}
            <div className="Card">
              <label htmlFor="Password" onClick={handleOpenModalPass}> Alterar senha </label>
            </div>

          </div>

          <ProductsView>
            {EmpData.products?.map(product => {
              return <RestauranteProduct id={product.id} name={product.name} description={product.description} value={product.value} img={product.img} />

            })}

          </ProductsView>


        </Config>
        <AddProduct>
         <NewProduct></NewProduct>
        </AddProduct>

      </Container>

      <ReactModal
        onRequestClose={handleCloseModalPass}
        isOpen={IsOpenPass}
        style={customStyles}
      >

        <div>
          <button onClick={handleCloseModalPass} style={customStyles.close}>X</button>
          <div style={customStyles.div}>
            <label htmlFor="password" style={customStyles.label}><i className="far fa-user" />Senha atual</label>
            <input type="password" onChange={handle} value={data.password} name="password" id="password" style={customStyles.input} />
          </div>
          <br />
          <div style={customStyles.div}>
            <label htmlFor="npassword" style={customStyles.label}><i className="far fa-user" style={customStyles.label} />Nova senha</label>
            <input onChange={handle} value={data.npassword} type="password" name="npassword" id="npassword" style={customStyles.input} />

          </div>
          <br />
          <div style={customStyles.div}>
            <label htmlFor="cpassword" style={customStyles.label}><i className="far fa-user" style={customStyles.label} />Confirmar nova senha</label>
            <input onChange={handle} value={data.cpassword} type="password" name="cpassword" id="cpassword" style={customStyles.input} />

            <button onClick={submitPass} type="button" style={customStyles.button} >Salvar</button>
          </div>
        </div>





      </ReactModal>

      {/* <ReactModal
        onRequestClose={handleCloseModalName}
        isOpen={IsOpenName}
        style={customStyles}
      >
        <button onClick={handleCloseModalName} style={customStyles.close}>X</button>
        <div style={customStyles.div}>
          <label htmlFor="UserName" style={customStyles.close}><i className="far fa-user" />Digite o nome da empreasa</label>
          <input type="text" style={customStyles.input} id="userName" onChange={handleUpdate} name="userName" />
          <button type="submit" onClick={saveNewName}  style={customStyles.button}>Salvar</button>
        </div>


      </ReactModal> */}
    </>

  );
}

export default withRouter(ConfigEmp);