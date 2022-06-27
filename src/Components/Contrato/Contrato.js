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
  background-color: purple;
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: bisque;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: purple;
`;

const BotaoHome = styled.button `
border: 1px solid black;
`
export default class Contrato extends Component {
  render() {
    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          Contrato
          <BotaoHome onClick={() => this.props.atualizaValor("home")}>
            Voltar Home
          </BotaoHome>
        </Header>

        <Main>MAIN</Main>

        <Footer>Footer</Footer>
      </DivContainer>
    );
  }
}
