import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const DivContainer = styled.div`

    width: 100vw;
    height: 100vh;
    *{
        margin: 0;
        padding: 0;
    }
`

const Header = styled.div`

    width: 100vw;
    height: 10vh;
    background-color: gray;
`


const Main = styled.div`

    width: 100vw;
    height: 80vh;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Footer = styled.div`

    width: 100vw;
    height: 10vh;
    background-color: gray;
`



export default class Home extends Component {

  render() {

    return (

      <DivContainer>
        <GlobalStyle></GlobalStyle>
        
        <Header>
        <header>HOME </header>
        </Header>
        
        <Main>
        <main>
        <button onClick={() => this.props.atualizaValor('cadastro')}>
            Cadastro
        </button>
        <button onClick={() => this.props.atualizaValor('contrato')}>
            Listagem
        </button>

        </main>

        </Main>

        <Footer>
            <footer>Footer</footer>
        </Footer>
        
      </DivContainer>
    )
  }
}
