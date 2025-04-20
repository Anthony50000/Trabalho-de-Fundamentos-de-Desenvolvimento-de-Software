const botao = document.querySelector("#botao");
const mensagemParagrafo = document.querySelector("#mostrasrMensagem");
botao.addEventListener ("click", mensagem);

function mensagem(){
    mensagemParagrafo.innerHTML = "Seja bem-vindo ao meu blog pessoal!";
}