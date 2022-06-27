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

const BotaoHome = styled.button `
border: 1px solid #bf9000;
margin-left: 5px;
width: 70px;
height: 20px;
border-radius: 6px;
`

const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
`;
const TituloHome = styled.header`
  font-size: 320%;
  text-align: center;
  justify-content: center;
  font-family: "Bebas Neue";
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #ffe599;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
`;
const TextoFooter = styled.p`
  font-family: "Tahoma";
  padding: 40px 0 0 905px;
  font-size: small;
`;

export default class Home extends Component {
  render() {
    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>

        <Header>
          <TituloHome>
            {" "}
            LABENINJAS{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/94/94390.png?w=360"
              height="40px"
              width="40px"
            />
          </TituloHome>
        </Header>

        <Main>
          <main>
            <BotaoHome onClick={() => this.props.atualizaValor("cadastro")}>
              Cadastro
            </BotaoHome>
            <BotaoHome onClick={() => this.props.atualizaValor("contrato")}>
              Listagem
            </BotaoHome>
          </main>
        </Main>

        <Footer>
          <TextoFooter>
            Giovanna Magalhães, Igor de Castro, Lincoln Ribeiro, Raoni Lobo e
            Sávio Ayres.
          </TextoFooter>
        </Footer>
      </DivContainer>
    );
  }
}
