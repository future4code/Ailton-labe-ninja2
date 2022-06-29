import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
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
  height: 10vh;
  font-family: "Bebas Neue";
  background-color: #ffd966;
  font-size: 220%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
`;

const InputsFiltros = styled.div `
background-color: #ffe599;
align-items: flex-end;
justify-content: space-around;
display: flex;
padding: 15px;
gap: 20px;
`
const InputsIndividuais = styled.input `
width: 250px;
border: 1px solid black;
height: 20px;
border-radius: 4px;
`

const SelectIndividual = styled.select `
width: 35vh;
margin-left: 6px;
border: 1px solid black;
height: 22px;
border-radius: 4px;
`

const Main = styled.div`
  min-height: 80vh;
  background-color: #ffe599;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0 10px;
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

const BotaoHome = styled.button`
border: 1px solid #bf9000;
width: 70px;
height: 20px;
border-radius: 6px;
`;

const DivRenderizada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bf9000;
  box-shadow: #bf9000 2px 2px 2px;
  border-radius: 5px;
  width: 250px;
  height: 30vh;
  margin-top: 25px;
`;
const DivRenderizadaBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
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
    // console.log(this.props.getAllJobs)

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
            <h2>{nome.title}</h2>

            <p>
              Até:{nome.dueDate.slice(8, 10)}-{nome.dueDate.slice(5, 7)}-
              {nome.dueDate.slice(0, 4)}
            </p>
            <p>por R${nome.price}.00</p>

            <div><img src={localStorage.getItem('imagem')} width='80px' height='80px'></img></div>
            <DivRenderizadaBotao>
              <button onClick={() => this.props.getJobId(nome.id)}>Detalhes</button>
              <button>Carrinho</button>
            </DivRenderizadaBotao>
          </DivRenderizada>
        );
      });

    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          Contrato
          <BotaoHome onClick={() => this.props.atualizaValor("home")}>
            Home
          </BotaoHome>
        </Header>

        <InputsFiltros>
          <InputsIndividuais
            type={"text"}
            placeholder={"Valor Mínimo"}
            value={this.state.inputValorMinimo}
            onChange={this.onChangeInputValorMinimo}
          ></InputsIndividuais>
          <InputsIndividuais
            type={"text"}
            placeholder={"Valor Máximo"}
            value={this.state.inputValorMaximo}
            onChange={this.onChangeInputValorMaximo}
          ></InputsIndividuais>
          <InputsIndividuais
            type={"text"}
            placeholder={"Busca por Título ou Descrição"}
            value={this.state.inputBuscar}
            onChange={this.onChangeInputBuscar}
          ></InputsIndividuais>
          <SelectIndividual
            value={this.state.inputOrdenacao}
            onChange={this.onChangeInputOrdenacao}
          >
            <option>Sem Ordenação</option>
            <option value="menor-valor">Menor Valor</option>
            <option value="maior-valor">Maior Valor</option>
            <option value="titulo">Título</option>
            <option value="prazo">Prazo</option>
          </SelectIndividual>
        </InputsFiltros>
        <Main>{mapeia}</Main>

        <Footer>
          <p>
            Giovanna Magalhães, Igor de Castro, Lincoln Ribeiro, Raoni Bastos e
            Sávio Ayres
          </p>
        </Footer>
      </DivContainer>
    );
  }
}
