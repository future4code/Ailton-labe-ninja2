import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Bebas Neue', cursive;
  };
  `;

const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
  }
`;

const BotaoHome = styled.button`
  border: 1px solid #bf9000;
  margin-left: 5px;
  width: 70px;
  height: 20px;
  border-radius: 6px;
`;

const BotaoCentralizado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;

const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
`;
const TituloHome = styled.header`
  font-size: 330%;
  font-family: "Bebas Neue";
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImagemTitulo = styled.img`
  padding: 2px 0 0 10px;
`;
const Main = styled.div`
  font-size: 60px;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  background-color: #ffe599;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Bebas Neue";
`;
const TextoTitulo = styled.p`
  font-size: 15px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: "Tahoma";
  font-style: italic;
`;
const Footer = styled.div`
  height: 10vh;
  background-color: #ffd966;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: small;
  font-family: "Tahoma";
`;

export default class Home extends Component {
  render() {
    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>

        <Header>
          <TituloHome> LABENINJAS </TituloHome>
        </Header>
        <Main>
          <main>
            <ImagemTitulo
              src="https://cdn-icons-png.flaticon.com/512/94/94390.png?w=360"
              alt="logo"
              height="160px"
              width="160px"
            />
            <TextoTitulo>O talento certo no momento certo!</TextoTitulo>
            <BotaoCentralizado>
              <BotaoHome onClick={() => this.props.atualizaValor("cadastro")}>
                Cadastro
              </BotaoHome>
              <BotaoHome onClick={() => this.props.atualizaValor("contrato")}>
                Listagem
              </BotaoHome>
            </BotaoCentralizado>
          </main>
        </Main>

        <Footer>
          <p>
            Giovanna Magalhães, Igor de Castro, Lincoln Ribeiro, Raoni Lobo e
            Sávio Ayres.
          </p>
        </Footer>
      </DivContainer>
    );
  }
}
