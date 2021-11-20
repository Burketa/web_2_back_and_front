const carregarPaginasNasDivs = (function () {
  $("#v-pills-btech").load("./pages/btech.html");
  $("#v-pills-trabalhos").load("./pages/trabalhos.html");
  $("#v-pills-produtos").load("./pages/produtos.html");
  $("#v-pills-time").load("./pages/time.html");
  $("#v-pills-contato").load("./pages/contato.html");
  $("#v-pills-donate").load("./pages/donate.html");
  $("#v-pills-tecnologias").load("./pages/tecnologias.html");
  $("#v-pills-projeto").load("./pages/projeto.html");
})();

function mudarConteudoDoTrabalho(index) {
  //0 - Usend
  //1 - Com21

  let imagem = trabalhos.imagem[index];

  let descricao = trabalhos.descricao[index];
  let funcao = trabalhos.funcao[index];
  let website = trabalhos.website[index];

  document.getElementById("imagem-trabalho").src = imagem;

  document.getElementById("texto-descricao-trabalho").innerHTML = descricao;
  document.getElementById("texto-funcao-trabalho").innerHTML = funcao;
  document.getElementById("site-trabalho").innerHTML = website;
}

function mudarConteudoDeProdutos(index) {
  //0 - Consultoria
  //1 - Encomendas

  let titulo = produtos.titulo[index];
  let descricao = produtos.descricao[index];
  let preco = produtos.preco[index];

  document.getElementById("texto-titulo-produto").innerHTML = `<b>${titulo}</b>`;
  document.getElementById("texto-descricao-produto").innerHTML = descricao;
  document.getElementById("texto-preco-produto").innerHTML = preco;
}

const trabalhos = {
  trabalhos: ["Usend, Com21"],
  imagem: ["assets/banner-usend-2.png", "assets/banner-com21.png"],
  descricao: [
    "É um app para envio de dinheiro internacional, estilo TransferWise",
    "É um app para gerenciamento de condomínios e shoppings",
  ],
  funcao: [
    "Desenvolvedor Android nativo (utilizando Kotlin)",
    "Desenvolvedor Android nativo (utilizando Java)",
  ],
  website: [
    "https://usend.com.br",
    "https://www.groupsoftware.com.br/administracao-de-condominios/com21/",
  ],
};

const produtos = {
  titulo:[
    "Consultoria",
    "Software Sob Encomenda"
  ],
  descricao: [
    "Trocamos uma ideia e eu resolvo, ou no mínimo, ajudo a resolver uma dúvida sua em relação ao seu app Android, Desktop ou qualquer outra dúvida sobre T.I",
    "Você pode encomendar um aplicativo Android, com as suas especificações e nós fazemos pra você !",
  ],
  preco: [
    "A bagatela de R$100/h",
    "É necessária uma conversa prévia",
  ],
};

const hobby = {
  imagem: ["assets/banner-blockpewpew.png", "assets/banner-arrowchallenge.png"],
  descricao: [
    "É um jogo puzzle onde o jogador precisa pegar moedas e nao morrer para os obstáculos",
    "É um jogo puzzle onde voce precisa arrastar para o lado da letra no meio, não o lado da seta (é mais difícil do que parece)",
  ],
  funcao: [
    "Game Designer, Desenvolvedor Unity (utilizando C#)",
    "Game Designer, Desenvolvedor Unity (utilizando C#)",
  ],
};
