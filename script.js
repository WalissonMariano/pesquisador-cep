let btn = document.querySelector("#send");

function abrirRastreio(){

}

btn.addEventListener("click", function(e){
    e.preventDefault();

    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    if(login == "admin" && senha == "admin"){
        location.href = "rastreio.html";
    }else{
        alert('Login e/ou senha incorretos!');
    }

})

function consultarCep(){
    let cep = document.getElementById('cep').value;

    if(cep.length != 8){
        alert('Cep invalido!')
        return;
    }

    let url = "https://viacep.com.br/ws/" + cep + "/json/";


    fetch(url).then(
        function(response){
            response.json().then(monstrarEndereco);
        }
    );
}

function monstrarEndereco(dados){

    let resultado = document.getElementById('resultado');

    if(dados.erro){
        resultado.innerHTML = "Não foi possivel localizar o cep.";
    }else {
        resultado.innerHTML = "<p><b>Rua:</b> " + dados.logradouro + 
        "<p>" +
        "<b>Bairro:</b> " + dados.bairro + 
        "<p>" +
        "<b>Cidade:</b> " + dados.localidade +
        "<p>" +
        "<b>Estado:</b> " + dados.uf;
        }

}
