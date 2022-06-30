import styled from 'styled-components'
import axios from 'axios'
import React, { Component } from 'react'
import Home from './Components/Home/Home.js'
import Cadastro from './Components/Cadastro/Cadastro.js'
import Contrato from './Components/Contrato/Contrato.js'
import PaginaDetalhes from './Components/PaginaDetalhes/PaginaDetalhes.js'
import Carrinho from './Components/Carrinho/Carrinho.js'

const Authorization = 'ce5895af-8d7c-488c-9062-f353648c87b8'

export default class App extends Component {
  state = {
    tela: 'home',
    trampos: [],
    tramposDetalhes: [],
    carrinho: []
  }

  trocaTela = () => {
    switch (this.state.tela) {
      case 'home':
        return <Home atualizaValor={this.atualizaValor}></Home>
      case 'cadastro':
        return <Cadastro atualizaValor={this.atualizaValor}></Cadastro>
      case 'contrato':
        return (
          <Contrato
            trocaTelaCarrinho={this.trocaTelaCarrinho}
            guardarCarrinho={this.guardarCarrinho}
            getJobId={this.getJobId}
            atualizaValor={this.atualizaValor}
            detalheId={this.state.tramposDetalhes}
            getAllJobs={this.state.trampos}
          ></Contrato>
        )
      case 'detalhe':
        return (
          <PaginaDetalhes
            tramposDetalhes={this.state.tramposDetalhes}
            atualizaValor={this.atualizaValor}
          >
            {' '}
          </PaginaDetalhes>
        )
      case 'carrinho':
        return (
          <Carrinho
            apagarCarrinho={this.apagarCarrinho}
            carrinho={this.state.carrinho}
            atualizaValor={this.atualizaValor}
          />
        )
      default:
        return <Home atualizaValor={this.atualizaValor}></Home>
    }
  }

  componentDidMount() {
    this.getAllJobs()
  }

  componentDidUpdate() {
    this.getAllJobs()
  }
  getJobId = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios
      .get(url, {
        headers: {
          Authorization: 'ce5895af-8d7c-488c-9062-f353648c87b8'
        }
      })
      .then((response) => {
        this.setState({ tramposDetalhes: response.data })
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
    this.atualizaValor('detalhe')
    console.log(id)
  }

  getAllJobs = () => {
    const Authorization = 'ce5895af-8d7c-488c-9062-f353648c87b8'
    const url = 'https://labeninjas.herokuapp.com/jobs'
    axios
      .get(url, {
        headers: {
          Authorization: Authorization
        }
      })
      .then((response) => {
        this.setState({ trampos: response.data.jobs })
      })
      .catch((error) => {
        alert('Erro, tente novamente !')
      })
  }

  atualizaValor = (id) => {
    this.setState({ tela: id })
    if (id === 'contrato') {
      this.setState({ tramposDetalhes: [] })
    }
  }

  guardarCarrinho = (id) => {
    const carrinhoAntigo = this.state.carrinho
    const carrinhoNovo = [...carrinhoAntigo, id]
    this.setState({ carrinho: carrinhoNovo })

    alert('Funcionou')
  }

  trocaTelaCarrinho = () => {
    this.setState({
      tela: 'carrinho'
    })
  }

  apagarCarrinho = (id) => {
    const novoArrayCarrinho = this.state.carrinho.filter((obj) => {
      return id !== obj.id
    })
    this.setState({ carrinho: novoArrayCarrinho })
  }

  render() {
    // console.log(this.state.carrinho)
    return <div>{this.trocaTela()}</div>
  }
}
