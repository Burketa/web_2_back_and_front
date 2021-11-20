const carregarPaginasNasDivs = (function () {
  $("#v-pills-burca").load("./pages/burca.html");
  $("#v-pills-trabalho").load("./pages/trabalho.html");
  $("#v-pills-faculdade").load("./pages/faculdade.html");
  $("#v-pills-hobby").load("./pages/hobby.html");
  $("#v-pills-contato").load("./pages/contato.html");
  $("#v-pills-donate").load("./pages/donate.html");
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

function mudarConteudoDaFaculdade(index) {
  //0 - Trailerflix
  //1 - The Cleaners

  let imagem = faculdade.imagem[index];

  let descricao = faculdade.descricao[index];
  let funcao = faculdade.funcao[index];

  document.getElementById("imagem-faculdade").src = imagem;

  document.getElementById("texto-descricao-faculdade").innerHTML = descricao;
  document.getElementById("texto-funcao-faculdade").innerHTML = funcao;
}

function mudarConteudoDeHobby(index) {
  //0 - Block Pew Pew
  //1 - Arrow Challenge

  let imagem = hobby.imagem[index];

  let descricao = hobby.descricao[index];
  let funcao = hobby.funcao[index];

  document.getElementById("imagem-hobby").src = imagem;

  document.getElementById("texto-descricao-hobby").innerHTML = descricao;
  document.getElementById("texto-funcao-hobby").innerHTML = funcao;
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

const faculdade = {
  imagem: ["assets/banner-trailerflix.png", "assets/banner-thecleaners.png"],
  descricao: [
    "É um app para ver trailers de filmes",
    "É um jogo de puzzle desenvolvido no UTFGames",
  ],
  funcao: [
    "Desenvolvedor Android nativo (utilizando Kotlin)",
    "Game Designer, Desenvolvedor Unity (utilizando C#)",
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
