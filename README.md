# Projeto Labe Ninjas

link do surge: __

**Trabalharam neste projeto:** Lincoln Ribeiro, Igor Castro, Giovanna Magalhães, Sávio Ayres e Raoni Lobo.

**Proposta:** Criar uma plataforma de Marketplace: a LabeNinjas. A ideia é que a plataforma sirva a 2 tipos de clientes:

1. **Prestador de serviço:** Aquele que quer criar um anúncio para oferecer seu serviço;
2. **Contratante:** Aquele que contratará o que foi anunciado.

## Sobre o projeto

O projeto foi feito utilizando React, estilizado com styled-components e Chakra ui (framework). Trabalhamos com requisições de uma API para cadastrar, visualizar, remover e editar todos os serviços renderizados no site (documentação da API: https://documenter.getpostman.com/view/9133542/TzXukJkY)
Por ter sido um projeto feito em grupo, utilizamos o github para realizar o gerenciamento dos arquivos do projeto.
 
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
<img src="https://user-images.githubusercontent.com/100432523/177004641-79b2c9a7-cfb1-4d5b-9b19-f4ea532ea2d8.png" alt="tela-inicial" width="350px" height="200px"/>

<p>Página Cadastrar um serviço</p>
<img src="https://user-images.githubusercontent.com/100432523/177004636-92096513-a8a9-43f5-a6d3-c85959e01ed8.png" alt="tela-cadastrar" width="350px" height="200px"/>

<p>Página Contratar um ninja</p>
<img src="https://user-images.githubusercontent.com/100432523/177004639-f12490c0-e4a5-47c4-b0cc-78da17e9a5c3.png" alt="tela-contratar" width="350px" height="200px"/>

<p>Página Detalhes do serviço</p>
<img src="https://user-images.githubusercontent.com/100432523/177004640-2e2306fe-1fc9-40cc-be4e-f0b9211962dd.png" alt="tela-detalhes" width="350px" height="200px"/>

<p>Página Carrinho</p>
<img src="https://user-images.githubusercontent.com/100432523/177004638-d5c68932-108c-49a6-a7e1-84bb1ebc14f7.png" alt="tela-carrinho" width="350px" height="200px"/>
