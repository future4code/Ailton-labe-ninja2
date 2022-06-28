import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
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
  height: 100%;
  min-height: 80vh;
  background-color: #ffe599;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

const BotaoHome = styled.button`
  border: 1px solid black;
`;

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
`;
const DivRenderizadaBotao = styled.div`
  display: flex;
  justify-content: space-between;
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

      .map((nome, id) => {
        return (
          <DivRenderizada key={nome.id}>
            <h2>{nome.title}</h2>

            <p>
              Data: Até:{nome.dueDate.slice(8, 10)}-{nome.dueDate.slice(5, 7)}-
              {nome.dueDate.slice(0, 4)}
            </p>
            <p>por R${nome.price}.00</p>

            <DivRenderizadaBotao>
              <button>Detalhes</button>
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
            Voltar Home
          </BotaoHome>
        </Header>

        <div>
          <input
            type={"text"}
            placeholder={"Valor Mínimo"}
            value={this.state.inputValorMinimo}
            onChange={this.onChangeInputValorMinimo}
          ></input>
          <input
            type={"text"}
            placeholder={"Valor Máximo"}
            value={this.state.inputValorMaximo}
            onChange={this.onChangeInputValorMaximo}
          ></input>
          <input
            type={"text"}
            placeholder={"Busca por Título ou Descrição"}
            value={this.state.inputBuscar}
            onChange={this.onChangeInputBuscar}
          ></input>
          <select
            value={this.state.inputOrdenacao}
            onChange={this.onChangeInputOrdenacao}
          >
            <option>Sem Ordenação</option>
            <option value="menor-valor">Menor Valor</option>
            <option value="maior-valor">Maior Valor</option>
            <option value="titulo">Título</option>
            <option value="prazo">Prazo</option>
          </select>
        </div>
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
