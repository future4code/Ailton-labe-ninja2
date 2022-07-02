import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`;

const TamanhoFonte = styled.p`
  font-size: small;
`;
const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  * {
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #38b2ac;
  letter-spacing: 1px;
  font-family: "Bebas Neue";
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
  padding-right: 20px;
`;

const InputsFiltros = styled.div`
  background-color: #e6fffa;
  align-items: flex-end;
  justify-content: space-around;
  display: flex;
  padding: 15px;
  gap: 20px;
`;

const Main = styled.div`
  min-height: 80vh;
  background-color: #e6fffa;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 10px;
`;

const Footer = styled.div`
  height: 10vh;
  background-color: #38b2ac;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: small;
  font-family: "Tahoma";
`;

const DivRenderizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #38b2ac;
  box-shadow: #38b2ac 2px 2px 2px;
  margin-bottom: 8px;
  border-radius: 5px;
  width: 250px;
  height: 30vh;
  margin-top: 15px;
  font-family: "Tahoma";
`;

const TituloCard = styled.h3`
  font-family: "Tahoma", sans-serif;
  padding-top: 19px;
  padding-bottom: 10px;
`;
const DivRenderizadaBotao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  font-family: "Tahoma";
  padding-top: 15px;
`;

const DivCursorPointer = styled.div`
  &:hover {
    cursor: pointer;
  }
  height: 40px;
`;

export default class Contrato extends Component {
  state = {
    inputValorMinimo: "",
    inputValorMaximo: "",
    inputBuscar: "",
    inputOrdenacao: "",
  };

  onChangeInputValorMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value });
  };
  onChangeInputValorMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value });
  };
  onChangeInputBuscar = (event) => {
    this.setState({ inputBuscar: event.target.value });
  };
  onChangeInputOrdenacao = (event) => {
    this.setState({ inputOrdenacao: event.target.value });
  };

  render() {
    const mapeia = this.props.getAllJobs
      .filter((nome) => {
        return (
          this.state.inputValorMinimo === "" ||
          nome.price >= this.state.inputValorMinimo
        );
      })
      .filter((nome) => {
        return (
          this.state.inputValorMaximo === "" ||
          nome.price <= this.state.inputValorMaximo
        );
      })
      .filter((nome) => {
        return nome.title
          .toLowerCase()
          .includes(this.state.inputBuscar.toLowerCase());
      })
      .sort((a, b) => {
        switch (this.state.inputOrdenacao) {
          case "menor-valor":
            return a.price - b.price;
            break;
          case "maior-valor":
            return b.price - a.price;
            break;
          case "titulo":
            return a.title.localeCompare(b.title);
            break;
          case "prazo":
            return new Date(a.dueDate) - new Date(b.dueDate);
            break;
        }
      })

      .map((nome) => {
        return (
          <DivRenderizada key={nome.id}>
            <TituloCard>
              <b>{nome.title}</b>
            </TituloCard>
            <p>
              Até: {nome.dueDate.slice(8, 10)}-{nome.dueDate.slice(5, 7)}-
              {nome.dueDate.slice(0, 4)}
            </p>
            <TamanhoFonte>por R$ {nome.price},00</TamanhoFonte>
            <DivRenderizadaBotao>
              <Button
                width="95px"
                size="sm"
                height="25px"
                colorScheme="teal"
                onClick={() => this.props.getJobId(nome)}
              >
                Detalhes
              </Button>
              {nome.taken ? (
                <Button width="95px" height="25px" marginleft="2" size="sm">
                  Adicionado
                </Button>
              ) : (
                <Button
                  height="25px"
                  colorScheme="teal"
                  size="xs"
                  onClick={() => this.props.updateJobTaken(nome)}
                >
                  Adicionar ao Carrinho
                </Button>
              )}
            </DivRenderizadaBotao>
          </DivRenderizada>
        );
      });

    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          <p onClick={() => this.props.atualizaValor("home")}>Contrato</p>
          <DivCursorPointer>
            <Icon
              as={BsFillCartFill}
              onClick={() => this.props.atualizaValor("carrinho")}
              w={9}
              h={9}
            />
          </DivCursorPointer>
        </Header>

        <InputsFiltros>
          <Input
            size="sm"
            type={"text"}
            isInvalid
            errorBorderColor="teal.500"
            border={2}
            borderRadius="4"
            placeholder={"Valor Mínimo"}
            value={this.state.inputValorMinimo}
            onChange={this.onChangeInputValorMinimo}
          ></Input>
          <Input
            size="sm"
            type={"text"}
            isInvalid
            errorBorderColor="teal.500"
            border={2}
            borderRadius="4"
            placeholder={"Valor Máximo"}
            value={this.state.inputValorMaximo}
            onChange={this.onChangeInputValorMaximo}
          ></Input>
          <Input
            size="sm"
            type={"text"}
            isInvalid
            errorBorderColor="teal.500"
            border={2}
            borderRadius="4"
            placeholder={"Buscar por Título"}
            value={this.state.inputBuscar}
            onChange={this.onChangeInputBuscar}
          ></Input>
          <Select
            size="sm"
            isInvalid
            errorBorderColor="teal.500"
            border={2}
            borderRadius="4"
            value={this.state.inputOrdenacao}
            onChange={this.onChangeInputOrdenacao}
          >
            <option>Sem Ordenação</option>
            <option value="menor-valor">Menor Valor</option>
            <option value="maior-valor">Maior Valor</option>
            <option value="titulo">Título</option>
            <option value="prazo">Prazo</option>
          </Select>
        </InputsFiltros>
        <Main>{mapeia}</Main>
        <Footer></Footer>
      </DivContainer>
    );
  }
}
