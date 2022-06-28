import axios from 'axios';
import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Contrato from '../Contrato/Contrato';



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
  font-family: 'Bebas Neue';
  font-size: 250%;
  margin-bottom: 20px;
  margin-top: 10px;
  
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputsIndividuais = styled.input `
border: 1px solid #bf9000;
margin-top: 4px;
width: align;
height: 20px;
border-radius: 2px;
`
const DivBotao = styled.div `
margin-right: 15px;
border: none;
background-color: #ffd966;
display: flex;
align-items: center;
`

const BotaoHome = styled.button `
border: 1px solid #bf9000;
width: 70px;
height: 20px;
border-radius: 6px;
`
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


export default class Cadastro extends Component {

    state = {

        inputTitulo: '',
        inputDescricao: '',
        inputPreco: '',
        inputPagamento: ['card-cred'],
        inputPrazo: '',
        // imageUrl: [],
        guardaValor: false,


    }


    // if(guardaValor){
    //   return <Contrato imageUrl={this.state.imageUrl}></Contrato>
    // }


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
            // this.setState({guardaValor: true})
            console.log(response)

          }).catch((error)=>{
            alert('Erro, tente novamente !')
            console.log(error.response)
          })

    }


    // onChangeInputImage = (e) =>{

    //   this.setState({imageUrl: e.target.value})

    // }


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

    // console.log(this.state.inputPagamento)



    return (
      <DivContainer>
        <GlobalStyle></GlobalStyle>
        <Header>
          Cadastro
          <DivBotao>
          <BotaoHome onClick={() => this.props.atualizaValor("home")}>
            Home
          </BotaoHome>
          </DivBotao>
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

            <select name="pagamento" onChange={this.onChangeInputPagamento}>
              <option value="cart-cred">Cartão Crédito</option>
              <option value="cart-deb">Cartão Débito</option>
              <option value="pix">Pix</option>
              <option value="paypal">PayPal</option>
              <option value="boleto">Boleto</option>
            </select>

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
