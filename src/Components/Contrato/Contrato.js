import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #ffe599;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;


const Footer = styled.div`
     width: 100vw;
    height: 10vh;
    background-color:#ffd966;
    font-family: 'Tahoma';
`

const BotaoHome = styled.button `
border: 1px solid black;
`

const DivRenderizada = styled.div`

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  box-shadow: black 5px 5px 5px;
  border-radius: 15px;
  width: 15vw;
  height: 30vh;

`
const DivRenderizadaBotao = styled.div`

  display: flex;
  justify-content: space-between;
`


export default class Contrato extends Component {
  render() {

    // console.log(this.props.getAllJobs)

    const mapeia = this.props.getAllJobs.map((nome, id) =>{


      return <DivRenderizada key={nome.id}>
        <h2>{nome.title}</h2>

        <p>Data: Até:{nome.dueDate.slice(8,10)}-{nome.dueDate.slice(5,7)}-{nome.dueDate.slice(0,4)}</p>
        <p>por R${nome.price}.00</p>


        <DivRenderizadaBotao>
        <button onClick={() => this.props.getJobId(nome.id)}>Detalhes</button>
        <button>Carrinho</button>
        </DivRenderizadaBotao>
        
        </DivRenderizada>


    })

    return (

      <DivContainer>

        <GlobalStyle></GlobalStyle>
        <Header>
          Contrato
          <BotaoHome onClick={() => this.props.atualizaValor("home")}>
            Voltar Home
          </BotaoHome>
        </Header>

        <Main>

          {mapeia}

        </Main>

        <Footer>
          <p>
            Giovanna Magalhães, Igor de Castro, Lincoln Ribeiro, Raoni Bastos e Sávio Ayres
            </p>
            </Footer>
      </DivContainer>
    );
  }
}
