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
  background-color: red;
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: bisque;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Titulo = styled.div`
  margin-bottom: 20px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;
const BotaoHome = styled.button`
  border: 1px solid black;
  justify-content: space-between;
  align-content: flex-end;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: red;
`;


export default class Cadastro extends Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    // inputDescricao: ''
  };

  render() {
    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          Cadastro
          <BotaoHome onClick={() => this.props.atualizaValor("home")}>
            Voltar Home
          </BotaoHome>
        </Header>

        <Main>
          <Titulo>
            <h1>Cadastre um serviço</h1>
          </Titulo>

          <Inputs>
            <input type={"text"} placeholder={"Título"}></input>
            <input type={"text"} placeholder={"Descrição"}></input>
            <input type={"number"} placeholder={"R$ - Insira o valor aqui"}></input>
            <select name="pagamento">
              <option value="cart-cred" selected>
                Cartão Crédito
              </option>
              <option value="cart-deb">Cartão Débito</option>
              <option value="pix">Pix</option>
              <option value="paypal">PayPal</option>
              <option value="boleto">Boleto</option>
            </select>
            <input type={"date"}></input>
            <button>Cadastre</button>
          </Inputs>
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
