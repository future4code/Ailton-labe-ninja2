import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Contrato from "../Contrato/Contrato";
import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { Button, ButtonGroup, Stack, Icon } from "@chakra-ui/react";
import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  extendTheme,
  Box,
} from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
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
  height: 13vh;
  background-color: #38b2ac;
  letter-spacing: 1px;
  font-family: "Bebas Neue";
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
  border-bottom: 1px dotted black;

 @media screen and (max-width: 480px) {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 45px;
 }

`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #e6fffa;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
     font-size: 14px;

 }
`;
const Titulo = styled.div`
  font-family: "Bebas Neue";
  font-size: 250%;
  margin-bottom: 20px;
  margin-top: 10px;
  letter-spacing: 3px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  height: 7vh;
  background-color: #38b2ac;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: small;
  font-family: "Tahoma";
  border-top: 1px dotted black;

`;

const TextoFooter = styled.p`
  font-family: "Tahoma";
  font-size: small;
`;

const ContainerFormasPagamento = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: space-between;
`;

const ContainerRenderizarPagamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonFormasPagamento = styled.button`
  background-color: #e6fffa;
  width: 15px;
  height: 15px;
  border: 1px dashed #38b2ac;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  padding-bottom: 2px;
  &:hover {
    cursor: pointer;
    border: 1px solid #285e61;
    background-color: #e6fffa;
  }
`;

export default class Cadastro extends Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: [],
    inputPrazo: "",
  };

  cadastraProfiss = () => {
    const Authorization = "ce5895af-8d7c-488c-9062-f353648c87b8";
    const url = "https://labeninjas.herokuapp.com/jobs";
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: Number(this.state.inputPreco),
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputPrazo,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: Authorization,
        },
      })
      .then((response) => {
        alert("Serviço cadastrado");
      })
      .catch((error) => {
        alert("Erro, tente novamente!");
      });
    this.setState({
      inputTitulo: "",
      inputDescricao: "",
      inputPreco: "",
      inputPagamento: [],
      inputPrazo: new Date(),
    });
  };

  onChangeInputTitulo = (e) => {
    this.setState({ inputTitulo: e.target.value });
  };

  onChangeInputDescricao = (e) => {
    this.setState({ inputDescricao: e.target.value });
  };
  onChangeInputPreco = (e) => {
    this.setState({ inputPreco: e.target.value });
  };

  onChangeInputPagamento = (e) => {
    const Valor = e.target.value;
    const Copia = [...this.state.inputPagamento, Valor];
    const arrUnique = [...new Set(Copia)];

    this.setState({ inputPagamento: arrUnique });
  };

  onChangeInputPrazo = (e) => {
    this.setState({ inputPrazo: e.target.value });
  };

  removerFormaPagamento = (id) => {
    const novoArray = this.state.inputPagamento.filter((forma, index) => {
      return id !== index;
    });
    this.setState({ inputPagamento: novoArray });
  };

  render() {
    let renderizarPagamento = [];

    if (this.state.inputPagamento.length > 0) {
      renderizarPagamento = this.state.inputPagamento

      .filter((forma,index) =>{
        return forma != 'none'
      })
      
      
      .map((forma, index) => {
        return (
          <ContainerFormasPagamento key={index}>
            <p>{forma}</p>
            <ButtonFormasPagamento
              onClick={() => this.removerFormaPagamento(index)}
            >
              x
            </ButtonFormasPagamento>
          </ContainerFormasPagamento>
        );
      });
    }

    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          <p onClick={() => this.props.atualizaValor("home")}>Cadastro</p>
        </Header>

        <Main>
          <Titulo>
            <p>Cadastre um serviço</p>
          </Titulo>
          <Inputs>
            <Stack spacing={4}>
              <FormControl variant="floating" id="first-name">
                <Input
                  type={"text"}
                  isInvalid
                  errorBorderColor="teal.500"
                  border={2}
                  placeholder=" "
                  size="sm"
                  borderRadius="4"
                  value={this.state.inputTitulo}
                  onChange={this.onChangeInputTitulo}
                ></Input>

                <FormLabel color="gray.500">Título</FormLabel>
              </FormControl>

              <FormControl variant="floating" id="first-name">
                <Input
                  type={"text"}
                  isInvalid
                  errorBorderColor="teal.500"
                  border={2}
                  placeholder=" "
                  size="sm"
                  borderRadius="4"
                  value={this.state.inputDescricao}
                  onChange={this.onChangeInputDescricao}
                ></Input>
                <FormLabel color="gray.500">Descrição</FormLabel>
              </FormControl>

              <InputGroup>
                <FormControl variant="floating" id="first-name">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="0.9em"
                    children="R$"
                    paddingBottom="2"
                  />
                  <Input
                    type={"number"}
                    size="sm"
                    isInvalid
                    errorBorderColor="teal.500"
                    border={2}
                    borderRadius="4"
                    paddingLeft="9"
                    placeholder=" "
                    value={this.state.inputPreco}
                    onChange={this.onChangeInputPreco}
                  ></Input>
                  <FormLabel color="gray.500">Valor</FormLabel>
                </FormControl>
              </InputGroup>

              <Select
                name="pagamento"
                size="sm"
                isInvalid
                errorBorderColor="teal.500"
                border={1}
                borderRadius="4"
                height={6}
                onChange={this.onChangeInputPagamento}
              >
                <option  value={"none"}>
                  Formas de Pagamento
                </option>
                <option value="Cartão de Crédito">Cartão Crédito</option>
                <option value="Cartão de Débito">Cartão Débito</option>
                <option value="Pix">Pix</option>
                <option value="Paypal">PayPal</option>
                <option value="Boleto">Boleto</option>
              </Select>
            </Stack>

            <ContainerRenderizarPagamento>
              {renderizarPagamento}
            </ContainerRenderizarPagamento>

            <Input
              type={"date"}
              size="sm"
              isInvalid
              errorBorderColor="teal.500"
              border={2}
              borderRadius="4"
              value={this.state.inputPrazo}
              onChange={this.onChangeInputPrazo}
              marginTop="4"
            ></Input>

            <Button
              rightIcon={<Icon as={BiCheck} w={5} h={5} />}
              colorScheme="teal"
              variant="solid"
              width={220}
              h={8}
              fontWeight="bold"
              fontSize="15"
              onClick={this.cadastraProfiss}
              marginTop="3"
              letterSpacing={1}
            >
              CADASTRAR
            </Button>
          </Inputs>
        </Main>

        <Footer>
          <TextoFooter></TextoFooter>
        </Footer>
      </DivContainer>
    );
  }
}
