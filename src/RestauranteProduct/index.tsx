import React, { useEffect, useState } from 'react';
import { ProductCard } from './styles';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Props{
  id: number,
  name: string,
  description: string,
  value: number,
  img: string,
  additionals?: string
}

interface PropR {
  data: string;
}

const RestauranteProduct: React.FC<Props> = ({id,name,description,value,img}) => {

  const [IsEmp, setIsEmp] = useState(false);

  const link: PropR = useParams();
  useEffect(() => {
    if(link.data){
      if(link.data.length > 0){
        setIsEmp(true);
      }
    }

  },[])
  

async function deleteItem(idProduct: number){
  const DataLocalStorage = localStorage.getItem('tokenUserJWT');
    console.log('this',idProduct);

    await axios.post('http://tn-15mechama-com.umbler.net/company/r/remove/'+id, {
      id, 
    
  }, {
      headers: {
          tokenUserJWT: DataLocalStorage
      }
  }).then((response) => {
      if (!response.data.mansageError) {
        window.location.reload();
      }
  });

    
  }

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleCloseModal() {
    setIsOpenModal(false);
  }
  function handleOpenModal() {
    setIsOpenModal(true);
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
    },
    button: {
      background: 'none',
      marginRight: '15px',
      justifySelf: 'center',
      color: 'var(--text)',
      marginTop: '15px',
      fontSize: '15px',
    },
    div: {
      color: 'var(--text)',
      textAlign: 'center' as const,
    },
    close: {
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
    h1: {
      margin: '5px',
      fontSize: '25px',
    },
    h2: {
      fontSize: '15px',
      margin: '5px',
      color: 'var(--subText)',
    },
    span: {
      margin: '5px',
      color: 'var(--green)',
      fontSize: '15px',
    },
    img: {
      width: '200px',
    },
    p: {
      fontSize: '20px',
    }
  };

  return (

    <>
      <ProductCard onClick={handleOpenModal} key={id}>
        <img src={img} alt="" />
        <div>
          <h1>{name}</h1>
          <h2>{description}</h2>
          <span>R$: {value.toLocaleString()}</span>
        </div>
      </ProductCard>

      {IsEmp == true ?  <ReactModal onRequestClose={handleCloseModal} isOpen={isOpenModal} style={customStyles}>
          <button onClick={handleCloseModal} style={customStyles.button}>X</button>
          <div style={customStyles.div}>
            <img style={customStyles.img}  src={img} alt="" />
            <h1 style={customStyles.h1}>{name}</h1>
            <h2 style={customStyles.h2}>{description}</h2>
            <span style={customStyles.span}>R$: {value.toLocaleString()}</span>
            <div>
              <button style={customStyles.button} onClick={()=>{deleteItem(id)}}>Deletar</button>
              <button style={customStyles.button}>Salvar Alterações</button>
            </div>
          </div>
      </ReactModal> : <ReactModal onRequestClose={handleCloseModal} isOpen={isOpenModal} style={customStyles}>
          <button onClick={handleCloseModal} style={customStyles.button}>X</button>
          <div style={customStyles.div}>
            <img style={customStyles.img}  src={img} alt="" />
            <h1 style={customStyles.h1}>{name}</h1>
            <h2 style={customStyles.h2}>{description}</h2>
            <span style={customStyles.span}>R$: {value.toLocaleString()}</span>
          </div>
      </ReactModal>
      
    }
      

    </>
  );
}

export default RestauranteProduct;