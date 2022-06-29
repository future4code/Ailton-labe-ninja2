import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
`;
const TituloHome = styled.header`
  font-size: 320%;
  text-align: center;
  justify-content: center;
  font-family: "Bebas Neue";
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 80vh;
  background-color: #ffe599;
`;
const Footer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #ffd966;
`;

const Button = styled.button`
  background-color: #ffd966;
  border: 1px solid black;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #b9d3f8;
  }
`;

const Box = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 4px;
`;

const BoxPag = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export default class PaginaDetalhes extends React.Component {
  render() {
    const payList = this.props.tramposDetalhes.paymentMethods?.map((list) => {
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
          <TituloHome>
            {" "}
            LABENINJAS{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/94/94390.png?w=360"
              alt="logo"
              height="40px"
              width="40px"
            />
          </TituloHome>
        </Header>
        <Container>
          {this.props.tramposDetalhes.title &&
          this.props.tramposDetalhes.paymentMethods ? (
            <Container>
              <h1>{this.props.tramposDetalhes.title}</h1>
              <BoxPag>
                <strong>Aceita:</strong>
                <Box>{payList}</Box>
              </BoxPag>
              <p>
                {this.props.tramposDetalhes.dueDate &&
                  formateData(this.props.tramposDetalhes.dueDate)}{" "}
                por <strong>R$ {this.props.tramposDetalhes.price},00</strong>
              </p>
              <p>{this.props.tramposDetalhes.description}</p>
              <Button> Adicionar ao carrinho</Button>
              <Button onClick={() => this.props.atualizaValor("contrato")}>
                Voltar
              </Button>
            </Container>
          ) : (
            <p>Carregando...</p>
          )}
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
