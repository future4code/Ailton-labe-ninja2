# Projeto Labe Ninjas

link do surge: https://labeninja-2.surge.sh/

**Trabalharam neste projeto:** Lincoln Ribeiro, Igor Castro, Giovanna Magalhães, Sávio Ayres e Raoni Lobo.

**Proposta:** Criar uma plataforma de Marketplace: a LabeNinjas. A ideia é que a plataforma sirva a 2 tipos de clientes:

1. **Prestador de serviço:** Aquele que quer criar um anúncio para oferecer seu serviço;
2. **Contratante:** Aquele que contratará o que foi anunciado.

## Sobre o projeto

O projeto foi feito utilizando React, estilizado com styled-components e Chakra ui (framework). Trabalhamos com requisições de uma API para cadastrar, visualizar, remover e editar todos os serviços renderizados no site (documentação da API: https://documenter.getpostman.com/view/9133542/TzXukJkY)
Por ter sido um projeto feito em grupo, utilizamos o github para realizar o gerenciamento dos arquivos do projeto.

O projeto também foi feito pensando na responsividade, por isto o site é **responsivo** para dispositivos móveis (menores que 480px de largura). 

## Funcionalidades/não funcionalidades do projeto

### Página inicial (home)
#### Funciona:<br>
Dois botões que redirecionam para as páginas seguintes.

### Página Cadastrar um serviço (ao clicar no botão "Quero ser um ninja")

#### Funciona:<br>

Pequeno formulário com 5 inputs e um botão para finalizar o cadastro, que realiza uma requisição na API para criar um serviço. 

### Página para Contratar os serviços (ao clicar no botão "Contratar um ninja")

#### Funciona:<br>

Cada serviço criado na pagina de Cadastro será renderizado nesta página, todos os botões e inputs são funcionais, sendo eles: Inputs para filtrar a renderização dos serviços, botões para adicionar ao carrinho e para mostrar os detalhes do serviço e um botão para ir a página do carrinho.
Botão "adicionar ao carrinho" realiza uma requisição na API no qual muda a propriedade Taken do serviço de false para true, uma verificação é feita e quando é mudado para true e o botão é trocado por outro, impedindo o usuário de tentar adicionar ao carrinho outra vez, visto que já foi realizado.
Botão "detalhes" também faz uma requisição na API retornando todos os detalhes do serviço.

### Página detalhes do serviço (ao clicar no botão Detalhes)

#### Funciona:<br>

Dois botões funcionais, onde é possível adicionar ao carrinho ou voltar para a página anterior.

### Página Carrinho

#### Funciona:<br>

Utilizamos a propriedade Taken do serviço para renderiza-los no carrinho, caso seja true, ele será renderizado juntamene com um botão para remover (muda a propriedade taken para false utilizando a requisição da API).
Quando renderizados os serviços aparecerá um botão para finalizar compra, onde também aparece o valor total da compra até o momento. Caso remova um serviço, ele atualiza o preço total. Ao clicar no botão finalizar compra todos os serviços são removidos do carrinho (para cada serviço no carrinho é feito uma requisição na API para mudar sua propriedade para false através de um loop).

## Prints do Labe Ninjas:

<p>Página inicial</p>
<img src="https://user-images.githubusercontent.com/100432523/177011694-c24638cb-0590-4515-b133-2d6eb33a2ebb.png" alt="tela-inicial" width="350px" height="200px"/>

<p>Página Cadastrar um serviço</p>
<img src="https://user-images.githubusercontent.com/100432523/177011688-8a898185-5588-471e-934e-4418bf8350e5.png" alt="tela-cadastrar" width="350px" height="200px"/>

<p>Página Contratar um ninja</p>
<img src="https://user-images.githubusercontent.com/100432523/177011691-a9aecf22-5b67-4d07-9abc-55e6135167ee.png" alt="tela-contratar" width="350px" height="200px"/>

<p>Página Detalhes do serviço</p>
<img src="https://user-images.githubusercontent.com/100432523/177011692-404b483c-0718-47a9-a12e-3cf3b4ddf03a.png" alt="tela-detalhes" width="350px" height="200px"/>

<p>Página Carrinho</p>
<img src="https://user-images.githubusercontent.com/100432523/177011690-9109d89c-267a-4cf9-a366-1550e075aec8.png" alt="tela-carrinho" width="350px" height="200px"/>
