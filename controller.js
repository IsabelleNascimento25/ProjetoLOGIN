/* FUNÇÃO PARA VERIFICAR PREENCHIMENTO DE LOGIN*/
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
    if(!loginEmail || !loginSenha) {
    alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
    }
}
// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY
var dadosLista = [];
function salvarUser(){
  let nomeUser = document.getElementById("nomeUser").value;
  if(nomeUser){
 dadosLista.push(nomeUser);
}
}