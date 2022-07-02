import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  Button,
  ButtonGroup,
  Stack,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { SiVerizon } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
  height: 100vh;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 13vh;
  background-color: #38b2ac;
  letter-spacing: 1px;
  font-family: "Bebas Neue";
  display: flex;
  padding-left: 15px;
  align-items: center;
  justify-content: space-between;
  font-size: 35px;
  padding-right: 20px;
  border-bottom: 1px dotted black;


  @media screen and (max-width: 480px) {
    display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 45px;
}
`;

const Main = styled.div`
  height: 100%;
  min-height: 80vh;
  background-color: #e6fffa;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  height: 10vh;
  background-color: #38b2ac;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  font-size: small;
  font-family: "Tahoma";
  border-top: 1px dotted black;`
;
const DivCard = styled.div`
  overflow: hidden;
  padding: 0 0 15px;
  margin: 22px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  &:hover {
    position: relative;
    top: -5px;
  }
`;

const TitleCard = styled.h2`
  font-weight: bold;
  margin-top: 6px;
`;
const PriceCard = styled.p`
  margin-top: 2px;
  display: inline;
`;

const DivSomatoria = styled.div`
  overflow: hidden;
  height: 80px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  &:hover {
    position: relative;
    top: -5px;
  }
`;
const DivContainer2 = styled.div`
  width: 100vw;
  align-items: center;
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;
const DivCarVazio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 15px;
`;
const TextVazio = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const ContainerCarrinhos = styled.div`
  height: 100%;
`

const DivTamanhoCarrinho = styled.div`

  @media screen and (max-width: 480px){
    display: none;
  }
`

const DivTamanhoCarrinho2 = styled.div`

@media screen and (min-width: 480px){
    display: none;
  }

`




export default class Carrinho extends Component {
  removerFinalizandoCompra = (array) => {
    for (let job of array) {
      this.props.updateMultipleJobNotTaken(job.id);
    }
    alert("Compra finalizada!");
  };

  render() {
    const arrayServicosCarrinho = this.props.servicos
      .filter((job) => {
        return job.taken;
      })
      .map((job) => {
        return job;
      });

    const somaPrecos = this.props.servicos
      .filter((itens) => {
        return itens.taken;
      })
      .map((job) => {
        return job.price;
      })
      .reduce((prev, curr) => prev + curr, 0);

    const itensCarrinho = this.props.servicos
      .filter((itens) => {
        return itens.taken;
      })
      .map((itens, index) => {
        return (
            <DivCard key={index}>
              <TitleCard>{itens.title}</TitleCard>
                 <PriceCard><strong>Preço:</strong>{" "}R${itens.price},00</PriceCard> 

               
              
              <Button
                leftIcon={<Icon as={FaTrash} />}
                colorScheme="teal"
                variant="solid"
                width={105}
                h={8}
                fontWeight="thin"
                fontSize="16"
                onClick={() => this.props.updateJobNotTaken(itens.id)}
              >
                Remover
              </Button>
            </DivCard>
        );
      });

    return (
      <div>
        <Header>
          <a onClick={() => this.props.atualizaValor("home")}>Carrinho</a>
        </Header>
        <GlobalStyle></GlobalStyle>
        <Main>
          {itensCarrinho.length === 0 ? (
            <DivContainer2>
              <DivCarVazio>
                <TextVazio>Carrinho Vazio</TextVazio>
                <DivTamanhoCarrinho>
                <Icon
                  as={AiOutlineShoppingCart}
                  width={230}
                  height={230}
                  marginRight="5"
                />
                </DivTamanhoCarrinho>
                <DivTamanhoCarrinho2>
                <Icon
                  as={AiOutlineShoppingCart}
                  width='150px'
                  height='150px'
                  marginRight="5"
                />
                </DivTamanhoCarrinho2>

              </DivCarVazio>
            </DivContainer2>
          ) : (
            <ContainerCarrinhos>
              {itensCarrinho}
              <DivSomatoria>
                
                  <PriceCard>
                  A soma dos produtos é:{" "}
                    <strong>
                      
                      R$ {somaPrecos},00
                      </strong>
                    </PriceCard>
            
                <Button
                  leftIcon={<Icon as={BiCheck} w={5} h={5} />}
                  colorScheme="teal"
                  variant="solid"
                  width={165}
                  h={6}
                  fontWeight="thin"
                  fontSize="16"
                  marginTop="2"
                  onClick={() =>
                    this.removerFinalizandoCompra(arrayServicosCarrinho)
                  }
                >
                  Finalizar Compra
                </Button>
              </DivSomatoria>
            </ContainerCarrinhos>
          )}
        </Main>
        <Footer></Footer>
      </div>
    );
  }
}
