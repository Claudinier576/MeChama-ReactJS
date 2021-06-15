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
    ProductName: "",
    ProductValue: "",
    descriptionProduct: "",
    additionalProduct: "",
  })

    async function SaveNewProduct(){

        axios.post('https://tn-15mechama-com.umbler.net/company/',{},{headers:{
            
        }})

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
            <div>
                <label htmlFor="">Nome do Produto </label>
                <input type="text" onChange={handle} id="ProductName" placeholder="nome do produto" />
            </div>
            <div>
                <label htmlFor="">Valor do Produto</label>
                <input type="number" onChange={handle}  id="ProductValue" placeholder="Valor do produto" />
            </div>
            <div>
                <label htmlFor="">Descrição do Produto</label>
                <input type="text" onChange={handle}  id="descriptionProduct" placeholder="Descrição do produto" />
            </div>
            <div>
                <label htmlFor="">Adicionais do Produto</label>
                <input type="text" onChange={handle} id="additionalProduct" placeholder="Adicionais do produto" />
            </div>
            <div className="avatar-upload">
                <div className="avatar-edit">
                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(function () {
                        readURL(document.getElementById('imageUpload'));
                    })} />
                    <label htmlFor="imageUpload"></label>
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