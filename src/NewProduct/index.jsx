import axios from 'axios';
import React, { useState } from 'react';
import { Container } from './styles';

// import { Container } from './styles';





const NewProduct = () => {

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
      }

      
  const [data, setData] = useState({
    name: "",
    value: "",
    description: "",
    add: "",
    img: {}
  })

    async function SaveNewProduct(){

        const DataLocalStorage = localStorage.getItem('tokenUserJWT');

        data.img = document.getElementById("img").files[0];
        
      
 
      
            await axios.post('https://tn-15mechama-com.umbler.net/company',{
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
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                console.log(e);

                setimagePrev(e.target.result);

            }
            reader.readAsDataURL(input.files[0]);
        }
    }


    return (
        <Container>
            <div>
                <label htmlFor="">Nome do Produto </label>
                <input type="text" onChange={handle} id="name" placeholder="nome do produto" />
            </div>
            <div>
                <label htmlFor="">Valor do Produto</label>
                <input type="number" onChange={handle}  id="value" placeholder="Valor do produto" />
            </div>
            <div>
                <label htmlFor="">Descrição do Produto</label>
                <input type="text" onChange={handle}  id="description" placeholder="Descrição do produto" />
            </div>
            <div>
                <label htmlFor="">Adicionais do Produto</label>
                <input type="text" onChange={handle} id="add" placeholder="Adicionais do produto" />
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

            <button onClick={SaveNewProduct}>Adicionar Produto</button>
        </Container>
    );
}

export default NewProduct;