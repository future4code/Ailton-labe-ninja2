import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Button, ButtonGroup, Stack, Icon } from "@chakra-ui/react";
import { GiRunningNinja } from "react-icons/gi";
import { TbArrowBackUp } from "react-icons/tb";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

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
  letter-spacing: 1px;
  font-family: "Bebas Neue";
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
  border-bottom: 1px dotted black;
`;

const Container = styled.div`
  font-size: 20px;
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

const Container2 = styled.div`
  font-size: 20px;
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
  border-top: 1px dotted black;
`;

const Box = styled.div``;

const BoxPag = styled.div`
  overflow: hidden;
  padding: 10px;
  margin: 10px auto 0;
  width: 300px;
  font-family: Tahoma;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <Header>Detalhes</Header>
        <Container>
          {this.props.servicosDetalhes.title &&
          this.props.servicosDetalhes.paymentMethods ? (
            <Container2>
              <h1>
                <strong>{this.props.servicosDetalhes.title}</strong>
              </h1>
              <p>{this.props.servicosDetalhes.description}</p>
              <hr />
              <strong>Aceita:</strong>
              <BoxPag>
                <Box>{payList}</Box>
              </BoxPag>
              <hr />
              <p>
                {this.props.servicosDetalhes.dueDate &&
                  formateData(this.props.servicosDetalhes.dueDate)}{" "}
                por <strong>R$ {this.props.servicosDetalhes.price},00</strong>
              </p>
              {this.props.servicosDetalhes.taken ? (
                <Button
                  leftIcon={<Icon as={GiRunningNinja} w={8} h={8} />}
                  variant="solid"
                  width={180}
                  h={9}
                  fontWeight="thin"
                  fontSize="18"
                  marginBottom="1"
                  marginTop="2"
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
                  // leftIcon={<Icon as={GiRunningNinja} w={8} h={8} />}
                  colorScheme="teal"
                  variant="solid"
                  width={180}
                  h={9}
                  fontWeight="thin"
                  fontSize="16"
                  marginBottom="1"
                  marginTop="2"
                >
                  Adicionar ao Carrinho
                </Button>
              )}
              <Button
                leftIcon={<Icon as={TbArrowBackUp} w={7} h={7} />}
                onClick={() => this.props.atualizaValor("contrato")}
                colorScheme="teal"
                variant="solid"
                width={180}
                h={9}
                paddingRight="12"
                fontWeight="thin"
                fontSize="16"
              >
                Voltar
              </Button>
            </Container2>
          ) : (
            <CircularProgress isIndeterminate color="green.300" />
          )}
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
