import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Button, ButtonGroup, Stack, Icon } from "@chakra-ui/react";
import { GiRunningNinja } from "react-icons/gi";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  width: 100vw;
  height: 13vh;
  background-color: #38b2ac;
  letter-spacing: 3px;
`;
const TituloHome = styled.header`
  font-size: 85px;
  font-family: "Bebas Neue";
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;

const Container = styled.div`
  font-size: 30px;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 80vh;
  background-color: #e6fffa;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px 0;
  align-items: center;
  font-family: "Tahoma";
`;
const Footer = styled.div`
  height: 7vh;
  background-color: #38b2ac;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: small;
  font-family: "Tahoma";
`;

const Box = styled.div`

`;

const BoxPag = styled.div`
  overflow: hidden;
  padding: 10px;
  margin: 22px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  justify-items: center;
`;

export default class PaginaDetalhes extends React.Component {
  render() {
    const payList = this.props.servicosDetalhes.paymentMethods?.map((list) => {
      return <div key={list}> {list} </div>;
    });

    function formateData(data) {
      const dia = data.slice(8, 10);
      const mes = data.slice(5, 7);
      const ano = data.slice(0, 4);

      return `Até: ${dia} / ${mes} / ${ano}`;
    }

    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <Header>
          <TituloHome> LABENINJAS </TituloHome>
        </Header>
        <Container>
          {this.props.servicosDetalhes.title &&
          this.props.servicosDetalhes.paymentMethods ? (
            <Container>
              <h1>
                <strong>{this.props.servicosDetalhes.title}</strong>
              </h1>
              <p>{this.props.servicosDetalhes.description}</p>
              <hr/>
              <strong>Aceita:</strong>
              <BoxPag>
                
                <Box>{payList}</Box>
              </BoxPag>
              <hr/>
              <p>
                {this.props.servicosDetalhes.dueDate &&
                  formateData(this.props.servicosDetalhes.dueDate)}{" "}
                por <strong>R$ {this.props.servicosDetalhes.price},00</strong>
              </p>

              {/* <Button onClick={() => this.props.updateJobTaken(this.props.AdicionarCarrinhoPaginaDetalhes.id)}> Adicionar ao carrinho</Button> */}

              {this.props.servicosDetalhes.taken ? (
                <Button
                  leftIcon={<Icon as={GiRunningNinja} w={8} h={8} />}
                  colorScheme="teal"
                  variant="solid"
                  width={220}
                  h={16}
                  fontWeight="thin"
                  fontSize="18"
                >
                  Adicionado
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    this.props.updateJobTaken(
                      this.props.AdicionarCarrinhoPaginaDetalhes
                    )
                  }
                  leftIcon={<Icon as={GiRunningNinja} w={8} h={8} />}
                  colorScheme="teal"
                  variant="solid"
                  width={220}
                  h={16}
                  fontWeight="thin"
                  fontSize="18"
                >
                  Adicionar ao Carrinho
                </Button>
              )}
              <Button
                onClick={() => this.props.atualizaValor("contrato")}
                leftIcon={<Icon as={GiRunningNinja} w={8} h={8} />}
                colorScheme="teal"
                variant="solid"
                width={180}
                h={12}
                fontWeight="thin"
                fontSize="18"
              >
                Voltar
              </Button>
              
            </Container>
          ) : (
            <CircularProgress isIndeterminate color='green.300' />
          )}
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
