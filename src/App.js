import styled from "styled-components";
import axios from "axios";
import React, { Component } from "react";
import Home from "./Components/Home/Home.js";
import Cadastro from "./Components/Cadastro/Cadastro.js";
import Contrato from "./Components/Contrato/Contrato.js";
import PaginaDetalhes from "./Components/PaginaDetalhes/PaginaDetalhes.js";
import Carrinho from "./Components/Carrinho/Carrinho.js";
import { ChakraProvider } from '@chakra-ui/react'

const Authorization = "ce5895af-8d7c-488c-9062-f353648c87b8";

export default class App extends Component {
  state = {
    tela: "home",
    servicos: [],
    servicosDetalhes: [],
    // carrinho: [],
    AdicionarCarrinhoPaginaDetalhes: "",
  };

  trocaTela = () => {
    switch (this.state.tela) {
      case "home":
        return <Home atualizaValor={this.atualizaValor}></Home>;
      case "cadastro":
        return <Cadastro atualizaValor={this.atualizaValor}></Cadastro>;
      case "contrato":
        return (
          <Contrato
            removeJob={this.removeJob}
            updateJobTaken={this.updateJobTaken}
            trocaTelaCarrinho={this.trocaTelaCarrinho}
            getJobId={this.getJobId}
            atualizaValor={this.atualizaValor}
            detalheId={this.state.servicosDetalhes}
            getAllJobs={this.state.servicos}
          ></Contrato>
        );
      case "detalhe":
        return (
          <PaginaDetalhes
            AdicionarCarrinhoPaginaDetalhes={
              this.state.AdicionarCarrinhoPaginaDetalhes
            }
            servicosDetalhes={this.state.servicosDetalhes}
            atualizaValor={this.atualizaValor}
          >
            {" "}
          </PaginaDetalhes>
        );
      case "carrinho":
        return (
          <Carrinho
            updateJobNotTaken={this.updateJobNotTaken}
            servicos={this.state.servicos}
            atualizaValor={this.atualizaValor}
          />
        );
      default:
        return <Home atualizaValor={this.atualizaValor}></Home>;
    }
  };

  componentDidMount() {
    this.getAllJobs();
  }

  componentDidUpdate() {
    this.getAllJobs();
  }

  getJobId = (nome) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${nome.id}`;
    axios
      .get(url, {
        headers: {
          Authorization: "ce5895af-8d7c-488c-9062-f353648c87b8",
        },
      })
      .then((response) => {
        this.setState({ servicosDetalhes: response.data });
      })
      .catch((error) => {});
    this.atualizaValor("detalhe");
    this.setState({ AdicionarCarrinhoPaginaDetalhes: nome });
  };

  removeJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    axios
      .delete(url, {
        headers: {
          Authorization: "ce5895af-8d7c-488c-9062-f353648c87b8",
        },
      })
      .then((response) => {
        alert("Serviço removido");
        this.getAllJobs();
      })
      .catch((error) => {
        alert("Erro, tente novamente!");
      });
  };

  updateJobTaken = (id) => {
    const body = {
      taken: true,
    };
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    axios
      .post(url, body, {
        headers: {
          Authorization: "ce5895af-8d7c-488c-9062-f353648c87b8",
        },
      })
      .then((response) => {
        alert("Serviço adicionado ao carrinho");
      })
      .catch((error) => {
        alert("Erro, tente novamente!");
      });
  };

  updateJobNotTaken = (id) => {
    const body = {
      taken: false,
    };
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`;
    axios
      .post(url, body, {
        headers: {
          Authorization: "ce5895af-8d7c-488c-9062-f353648c87b8",
        },
      })
      .then((response) => {
        alert("Serviço retirado do carrinho");
      })
      .catch((error) => {
        alert("Tente novamente mais tarde.");
      });
  };

  getAllJobs = () => {
    const Authorization = "ce5895af-8d7c-488c-9062-f353648c87b8";
    const url = "https://labeninjas.herokuapp.com/jobs";
    axios
      .get(url, {
        headers: {
          Authorization: Authorization,
        },
      })
      .then((response) => {
        this.setState({ servicos: response.data.jobs });
      })
      .catch((error) => {
        alert("Erro, tente novamente !");
      });
  };

  atualizaValor = (id) => {
    this.setState({ tela: id });
    if (id === "contrato") {
      this.setState({ servicosDetalhes: [] });
    }
  };

  trocaTelaCarrinho = () => {
    this.setState({
      tela: "carrinho",
    });
  };

  render() {
    return <ChakraProvider>{this.trocaTela()}</ChakraProvider>;
  }
}
