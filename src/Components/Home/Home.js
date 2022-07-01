import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Button, ButtonGroup, Stack, Icon } from "@chakra-ui/react";
import { GiRunningNinja } from "react-icons/gi";
import { GiNinjaMask } from "react-icons/gi";
import { FaUserNinja } from "react-icons/fa";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import iconeNinja from "../../img/iconeNinja.png";

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
  image.png * {
    margin: 0;
    padding: 0;
  }
`;

const BotaoHome = styled.button`
  border: 1px solid #bf9000;
  margin-left: 5px;
  width: 250px;
  height: 80px;
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
  height: 13vh;
  background-color: #38b2ac;
  letter-spacing: 3px;
`;
const TituloHome = styled.header`
  font-size: 85px;
  font-family: "Bebas Neue";
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
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
  background-color: #e6fffa;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px 0;
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
  height: 7vh;
  background-color: #38b2ac;
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
          <ImagemTitulo src={iconeNinja} />
          <TextoTitulo>O talento certo no momento certo!</TextoTitulo>
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<Icon as={FaUserNinja} />}
              colorScheme="teal"
              variant="solid"
              width={220}
              h={16}
              fontSize="25"
              onClick={() => this.props.atualizaValor("cadastro")}
            >
              Quero ser um ninja
            </Button>
            <Button
              leftIcon={<Icon as={GiRunningNinja} />}
              colorScheme="teal"
              variant="solid"
              width={220}
              h={16}
              fontSize="25"
              onClick={() => this.props.atualizaValor("contrato")}
            >
              Contratar um ninja
            </Button>
          </Stack>
        </Main>
        <Footer></Footer>
      </DivContainer>
    );
  }
}
