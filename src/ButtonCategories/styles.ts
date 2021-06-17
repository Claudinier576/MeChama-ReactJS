import styled from 'styled-components'

export const Button = styled.button`
  color: var(--text);
  background-color: transparent;
  margin-left: 5px;
  cursor: pointer;
  transition: background-color .4s,border .2s;
  padding: 15px;
  border-radius: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  font-size: 16px;

  &:hover,&.active{
    background-color: var(--pinkBackground);
    border: 2px solid var(--text);
    div{
      display: flex;
    }
  }

  .buttonText {
    display: flex;
  }

  .buttonImage {
    display: none;
    width: 35px;
    height: 100%;
  }

  @media (max-width: 500px) {
    padding: 8px;
    .buttonText {
      display: none;
    }
    .buttonImage {
      display: flex;
    }
  }
`

export const Itens = styled.div`
  transition: display .3s;

  &.disabled{
    display:none;
  }

  &.active{
    background-color: var(--white);
    border: 1px solid #d21f3c12;
    border-top: none;
    transition: background-color .4s,border .2s;
    padding: 15px;
    border-radius: 0 0px 10px 10px;
    display: flex;
    flex-direction:column;
    position:absolute;
    left:50px;
    top:60px;
    max-height: 192px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
          width: 6px;
      }
      ::-webkit-scrollbar-thumb {
          background-color: #d21f3c12;
          border-radius: 4px;
      }
      ::-webkit-scrollbar-track {
          background-color: var(--pinkBackground);
      }

    a{
      color: var(--text);
      margin-top: 8px;
      text-decoration: none;
    }

    a:hover{
      color: var(--subText);
      margin-top: 8px;
      text-decoration: none;
    }
  }
`




