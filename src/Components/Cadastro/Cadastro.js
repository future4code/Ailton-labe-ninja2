<<<<<<< HEAD
import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
=======
import axios from 'axios';
import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';


>>>>>>> 46566a1c8966b2ba27c5ae104acf831a5dd4383c

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
  background-color: red;
`;

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: bisque;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Titulo = styled.div`
  margin-bottom: 20px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;
const BotaoHome = styled.button`
  border: 1px solid black;
  justify-content: space-between;
  align-content: flex-end;
`;

const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: red;
`;


export default class Cadastro extends Component {
<<<<<<< HEAD
  state = {
    inputTitulo: "",
    inputDescricao: "",
    // inputDescricao: ''
  };
=======

    state = {

        inputTitulo: '',
        inputDescricao: '',
        inputPreco: '',
        inputPagamento: ['card-cred'],
        inputPrazo: '',


    }

>>>>>>> 46566a1c8966b2ba27c5ae104acf831a5dd4383c

    cadastraProfiss = () =>{
        
        const Authorization = 'ce5895af-8d7c-488c-9062-f353648c87b8'
        const url = 'https://labeninjas.herokuapp.com/jobs'
        const body = {
            "title": this.state.inputTitulo,
            "description": this.state.inputDescricao,
            "price": Number(this.state.inputPreco),
            "paymentMethods":this.state.inputPagamento,
            "dueDate":this.state.inputPrazo
        }

        axios.post(url, body,{
            headers:{
                Authorization: Authorization
            }
          }).then((response) =>{
            alert('Trampo Criado')
            console.log(response)

          }).catch((error)=>{
            alert('Erro, tente novamente !')
            console.log(error.response)
          })

    }


    onChangeInputTitulo  = (e) =>{
        // console.log(e.target.value)
        this.setState({inputTitulo: e.target.value})

        }

    onChangeInputDescricao  = (e) =>{
        // console.log(e.target.value)

        this.setState({inputDescricao: e.target.value})

        }
    onChangeInputPreco  = (e) =>{
        // console.log(e.target.value)

        this.setState({inputPreco: e.target.value})

        }

    onChangeInputPagamento  = (e) =>{
        const Valor = e.target.value

        const Copia = [...this.state.inputPagamento, Valor]

        this.setState({inputPagamento: Copia})

    // console.log(e.target.value) 

        }

    // componentDidMount () {
    //     this.onChangeInputPagamento()
    // }

    // componentDidUpdate () {
    //     this.onChangeInputPagamento()

    // }

    onChangeInputPrazo  = (e) =>{
        // console.log(e.target.value)

        this.setState({inputPrazo: e.target.value})

        }

  render() {
<<<<<<< HEAD
=======

    // console.log(this.state.inputPagamento)



>>>>>>> 46566a1c8966b2ba27c5ae104acf831a5dd4383c
    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          Cadastro
          <BotaoHome onClick={() => this.props.atualizaValor("home")}>
            Voltar Home
          </BotaoHome>
        </Header>

        <Main>
<<<<<<< HEAD
          <Titulo>
            <h1>Cadastre um serviço</h1>
          </Titulo>
=======
        <div><h1>Cadastre um serviço</h1></div>

        <Inputs>

        <input type={'text'} placeholder={'Título'} value={this.state.inputTitulo} onChange={this.onChangeInputTitulo}></input>

        <input type={'text'} placeholder={'Descrição'} value={this.state.inputDescricao} onChange={this.onChangeInputDescricao}></input>

        <input type={'number'} placeholder={'R$'} value={this.state.inputPreco} onChange={this.onChangeInputPreco}></input>

        <select name="pagamento"  onChange={this.onChangeInputPagamento}>
        <option value="cart-cred">Cartão Crédito</option>
        <option value="cart-deb">Cartão Débito</option>
        <option value="pix">Pix</option>
        <option value="paypal">PayPal</option>
        <option value="boleto">Boleto</option>

        </select>

        <input type={'date'} value={this.state.inputPrazo} onChange={this.onChangeInputPrazo}></input>
        
        <button onClick={this.cadastraProfiss}>Cadastre</button>
        </Inputs>
>>>>>>> 46566a1c8966b2ba27c5ae104acf831a5dd4383c

          <Inputs>
            <input type={"text"} placeholder={"Título"}></input>
            <input type={"text"} placeholder={"Descrição"}></input>
            <input type={"number"} placeholder={"R$ - Insira o valor aqui"}></input>
            <select name="pagamento">
              <option value="cart-cred" selected>
                Cartão Crédito
              </option>
              <option value="cart-deb">Cartão Débito</option>
              <option value="pix">Pix</option>
              <option value="paypal">PayPal</option>
              <option value="boleto">Boleto</option>
            </select>
            <input type={"date"}></input>
            <button>Cadastre</button>
          </Inputs>
        </Main>

        <Footer>
          <p>
            Giovanna Magalhães, Igor de Castro, Lincoln Ribeiro, Raoni Bastos e Sávio Ayres
          </p>
        </Footer>
      </DivContainer>
    );
  }
}
