import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  width: 20vw;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`
const BotaoCarrinho = styled.button`
  border: 1px solid black;
  height: 5vh;
`
const ContainerGeral = styled.div`
  display: flex;
  justify-content: center;
`

export default class Carrinho extends Component {
  state = {
    arrayCarrinho2: []
  }
  render() {
    // alert('preco dos prod add', this.state.arrayCarrinho2)
    const itensCarrinho = this.props.carrinho.map((itens) => {
      const precoAntigo = this.state.arrayCarrinho2
      const precoAtualizado = [...precoAntigo, itens.price]
      this.setState({ arrayCarrinho2: precoAtualizado })
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
      )
    })

    // let precoSomaCarrinho = () => {
    //   for (let preco of this.state.arrayCarrinho2) {
    //     return <p>{preco + preco}</p>
    //   }
    // }
    return (
      <div>
        <div>{itensCarrinho}</div>A soma dos produtos são:
        {/* {precoSomaCarrinho()} */}
      </div>
    )
  }
}
