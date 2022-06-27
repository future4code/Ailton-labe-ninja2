
import styled from 'styled-components'
import axios from 'axios'
import React, { Component } from 'react'
import Home from './Components/Home/Home.js'
import Cadastro from './Components/Cadastro/Cadastro.js'
import Contrato from './Components/Contrato/Contrato.js'



const Authorization = 'ce5895af-8d7c-488c-9062-f353648c87b8'

export default class App extends Component {

  state = {

    tela: 'home',
    trampos: []
  }


  trocaTela = () =>{

    switch(this.state.tela) {

      case 'home':
      return <Home atualizaValor={this.atualizaValor}></Home>;
      break;

      case 'cadastro':
      return <Cadastro atualizaValor={this.atualizaValor}></Cadastro>
      break;

      case 'contrato':
      return <Contrato atualizaValor={this.atualizaValor} getAllJobs={this.state.trampos}></Contrato>
      break;

    }


  }


  componentDidMount(){
    this.getAllJobs()
  }

  componentDidUpdate(){
    this.getAllJobs()
  }

  getAllJobs = () =>{

    const Authorization = 'ce5895af-8d7c-488c-9062-f353648c87b8'
    const url = 'https://labeninjas.herokuapp.com/jobs'
    axios.get(url, {

      headers:{
          Authorization: Authorization
      }

    }).then((response) =>{
      // alert('Trampos')
      // console.log('trampos',response)

      this.setState({trampos: response.data.jobs})

    }).catch((error)=>{
      // alert('Erro, tente novamente !')
      // console.log(error.response)
    })



  }




  atualizaValor = (id) =>{

    this.setState({tela: id})


  }


// createKey = () =>{

// const url = 'https://labeninjas.herokuapp.com/auth'
// const body = {
//   name: 'labeninja-2'
// }

// axios.post(url, body,{

// }).then((response) =>{
//   alert('Authorization Criada')
//   console.log(response)
// }).catch((error)=>{
//   alert('Erro, tente novamente !')
// })
// }



  render() {

    return (

      <div>
        {this.trocaTela()}
      </div>
    )
  }
}

