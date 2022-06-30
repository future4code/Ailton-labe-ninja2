import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
  height: 100vh;
  }
`;

const Header = styled.div`
  font-family: "Bebas Neue";
  height: 10vh;
  background-color: #ffd966;
  font-size: 220%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #ffe599;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;
const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
`;
const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  width: 20vw;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
const BotaoCarrinho = styled.button`
  border: 1px solid black;
  height: 5vh;
`;

export default class Carrinho extends Component {
  state = {
    totalPreco: 0,
    guardarPreco: []
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.guardarPreco !== prevState.guardarPreco) {
  //     this.guardarPreco();
  //   }
  // }

  componentDidMount() {
    this.guardarPreco();
  }

  guardarPreco = () => {
    const itensPrice = this.props.carrinho.map((itens) => {
      return itens.price;
    });
    this.setState({ guardarPreco: itensPrice})
    this.somarPrecos(itensPrice);
  };

  somarPrecos = (array) => {
    let total = 0;
    for (let itens of array) {
      total = total + itens;
    }
    this.setState({ totalPreco: total });
  };

  render() {
    const itensCarrinho = this.props.carrinho.map((itens) => {
      return (
        <ContainerGeral>
          <CardContainer>
            <h2>{itens.title}</h2>
            <p>R$:{itens.price}, 00</p>
            <BotaoCarrinho onClick={() => this.props.apagarCarrinho(itens.id)}>
              Remover
            </BotaoCarrinho>
          </CardContainer>
        </ContainerGeral>
      );
    });

    return (
      <div>
        <Header>
          <a onClick={() => this.props.atualizaValor("home")}>Header</a>
        </Header>
        <GlobalStyle></GlobalStyle>
        <Main>
          <p>Preço total: {this.state.totalPreco}</p>
          Main
          <div>{itensCarrinho}</div>A soma dos produtos são:{" "}
          {/* {this.state.totalPrice} */}
        </Main>

        <Footer>Footer</Footer>
      </div>
    );
  }
}
