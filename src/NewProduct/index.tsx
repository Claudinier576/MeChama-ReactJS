import axios from 'axios';
import React, { useState } from 'react';
import { Container } from './styles';

// import { Container } from './styles';





const NewProduct: React.FC = () => {

    function handle(e: any) {
        const newData: any = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
      }

      
  const [data, setData] = useState({
    name: "",
    value: "",
    description: "",
    add: "",
    img:"",
  })

    async function SaveNewProduct(){

        const DataLocalStorage = localStorage.getItem('tokenUserJWT');

      
 
      
            await axios.post('http://tn-15mechama-com.umbler.net/company',{
                ...data
            }, {
              headers: {
                tokenUserJWT: DataLocalStorage
              }
            }).then((response) => {if(!response.data.mansageError){
                window.location.reload();
            }});
      

        console.log(data);


        
    }

    const [imagePrev, setimagePrev] = useState('https://www.oximig.com.br/arquivos/fotos/interna_1499455670.png');
    function readURL(input: any) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e: any) {
                console.log(e);

                setimagePrev(e.target.result);

            }
            reader.readAsDataURL(input.files[0]);
        }
    }


    return (
        <Container>
            <h1>Adicionar produto</h1>
            <div className="form-align">
                <label htmlFor="name">Nome do Produto </label>
                <input type="text" onChange={handle} id="name" placeholder="nome do produto" className="adjust-input"/>
            </div>
            <div className="form-align">
                <label htmlFor="value">Valor do Produto</label>
                <input type="number" onChange={handle}  id="value" placeholder="Valor do produto" className="adjust-input"/>
            </div>
            <div className="form-align">
                <label htmlFor="description">Descrição do Produto</label>
                <input type="text" onChange={handle}  id="description" placeholder="Descrição do produto" className="adjust-input"/>
            </div>
            <div className="form-align">
                <label htmlFor="add">Adicionais do Produto</label>
                <input type="text" onChange={handle} id="add" placeholder="Adicionais do produto" className="adjust-input"/>
            </div>
            <div className="avatar-upload">
                <div className="avatar-edit">
                    <input type='file' id="img" accept=".png, .jpg, .jpeg" onChange={(function () {
                        readURL(document.getElementById('img'));
                    })} />
                    <label htmlFor="img"></label>
                </div>
                <div className="avatar-preview">
                    <div id="imagePreview" style={{ backgroundImage: `url(${imagePrev})` }}>
                    </div>
                </div>
            </div>

            <button onClick={SaveNewProduct}>Confirmar</button>
        </Container>
    );
}

export default NewProduct;