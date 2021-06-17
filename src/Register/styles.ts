import styled from 'styled-components'

const RegisterStyle = styled.div`
  * {
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }

  #loginBackground{
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .transparent-layer {
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0.4;
    background-color: grey;
    height: 100vh;
    width: 100vw;
  }

  .submit-register {
    background-color: #d21f3c;
    text-align: center;
    border: 2px solid #d21f3c;
    padding: 14px 40px;
    outline: none;
    color: var(--white);
    border-radius: 30px;
    cursor: pointer
}

    .submit-register:hover {
        background: black;
        border: 2px solid black;
    }

  .form-align {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .line-align {
    width: 85%;
    display: flex;
    line-height: 20px;
  }

    @media (max-width:600px) {
      .line-align {
        width: 100%;
      }
    }

  .input-align {
    flex: 1;
    outline-color: #1a1d2d;
    border-radius: 4px;
    border: 1px solid;
  }

    .input-align:focus-visible{
      outline-color: #1a1d2d;
    }

  .label-align {
    margin-right: 10px;
  }

  .select-align {
    flex: 1;
    text-align-last: center;
    border-radius: 4px;
    border: 1px solid;
    height: 20px;
    margin-left: 51px;
  }

    .select-align:focus-visible{
      outline-color: #1a1d2d;
    }
`

export { RegisterStyle }