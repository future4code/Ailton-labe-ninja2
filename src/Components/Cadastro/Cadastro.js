import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Contrato from "../Contrato/Contrato";

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
const Titulo = styled.div`
  font-family: "Bebas Neue";
  font-size: 250%;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputsIndividuais = styled.input`
  border: 1px solid #bf9000;
  margin-top: 4px;
  width: align;
  height: 20px;
  border-radius: 2px;
`;
const SelectIndividual = styled.select`
  border: 1px solid #bf9000;
  width: align;
  height: 20px;
  border-radius: 2px;
`;
const DivBotao = styled.div`
  margin-right: 15px;
  border: none;
  background-color: #ffd966;
  display: flex;
  align-items: center;
`;

const BotaoHome = styled.button`
  border: 1px solid #bf9000;
  width: 70px;
  height: 20px;
  border-radius: 6px;
`;
const BotaoCadastrar = styled.button`
  border: 1px solid #bf9000;
  margin-top: 8px;
  width: align;
  height: 20px;
  border-radius: 6px;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

const TextoFooter = styled.p`
  font-family: "Tahoma";
  font-size: small;
`;

const ContainerFormasPagamento = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  align-items: center;
`;

const ContainerRenderizarPagamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
`;

const ButtonFormasPagamento = styled.button`
  border: none;
  background-color: #ffe599;
  width: 20px;
  &:hover {
    cursor: pointer;
    border: 1px solid #ffd966;
    background-color: #ffd966;
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
      this.setState({ inputTitulo: "", inputDescricao: "", inputPreco: "", inputPagamento: [], inputPrazo: new Date()})
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
      renderizarPagamento = this.state.inputPagamento.map((forma, index) => {
        return (
          <ContainerFormasPagamento>
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
<<<<<<< HEAD
          <a onClick={() => this.props.atualizaValor("home")}>Cadastro</a>
=======
          <p onClick={() => this.props.atualizaValor("home")}>Cadastro</p>
>>>>>>> 66fe84544c27ed31f291cf961a246d3df5228ce8
        </Header>

        <Main>
          <Titulo>
            <p>Cadastre um serviço</p>
          </Titulo>
          <Inputs>
            <InputsIndividuais
              type={"text"}
              placeholder={"Título"}
              value={this.state.inputTitulo}
              onChange={this.onChangeInputTitulo}
            ></InputsIndividuais>

            <InputsIndividuais
              type={"text"}
              placeholder={"Descrição"}
              value={this.state.inputDescricao}
              onChange={this.onChangeInputDescricao}
            ></InputsIndividuais>

            <InputsIndividuais
              type={"number"}
              placeholder={"R$"}
              value={this.state.inputPreco}
              onChange={this.onChangeInputPreco}
            ></InputsIndividuais>

            <SelectIndividual
              name="pagamento"
              onChange={this.onChangeInputPagamento}
            >
              <option value="" selected>
                Selecione
              </option>
              <option value="Cartão de Crédito">Cartão Crédito</option>
              <option value="Cartão de Débito">Cartão Débito</option>
              <option value="Pix">Pix</option>
              <option value="Paypal">PayPal</option>
              <option value="Boleto">Boleto</option>
            </SelectIndividual>

            <ContainerRenderizarPagamento>
              {renderizarPagamento}
            </ContainerRenderizarPagamento>

            <InputsIndividuais
              type={"date"}
              value={this.state.inputPrazo}
              onChange={this.onChangeInputPrazo}
            ></InputsIndividuais>

            <BotaoCadastrar onClick={this.cadastraProfiss}>
              Cadastre
            </BotaoCadastrar>
          </Inputs>
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
