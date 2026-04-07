const btn_cadastrar = document.getElementById("btn_cadastrar")
const nome = document.getElementById("nome_registro")
const email = document.getElementById("email_registro")
const senha = document.getElementById("senha_registro")
const info_cadastro = document.getElementById("info_cadastro")

let contador = 0

//codigo simples para fazer a div com info extra ir de um lado para outro
btn_cadastrar.addEventListener('click',()=>{

    const container = document.getElementById("container_slin")
    container.classList.toggle("slin-rigth")

    const texto = document.getElementById("conteudo_p")

    contador++

    console.log(contador)

    if(contador%2 == 0){
        texto.innerHTML = "Aproveite seu software de controle financeiro, caso você ainda nao tenha se registrado, click logo em baixo"
    } else {
        texto.innerHTML = "Coloque seu nome, email e uma senha, lembrando que como o sistema é podrin nao tem sistema de esquecimento de senha, por isso guarde ela na memoria"
    }

})

//Evento para nao resetar a pagina depois do submite
document.getElementById("formulario_register").addEventListener('submit', (event)=>{
    event.preventDefault();
})

document.getElementById("formulario_login").addEventListener('submit', (event)=>{
    event.preventDefault();
})

const botao_registrar = document.getElementById("btn_registrar").addEventListener("click", ()=>{

    if(nome.value.trim() === "" || email.value.trim() === "" || senha.value.trim() === ""){
        info_cadastro.style.display = "grid";
        info_cadastro.innerHTML = "Por gentileza preencher todos os campos !!"
        info_cadastro.style.color = "#920000"
        setTimeout(() => {
            info_cadastro.style.display = "none";
        }, 4300);
    }else{

        info_cadastro.style.display = "grid"
        info_cadastro.innerHTML = "Cadastrado Com Sucesso!!!"
        info_cadastro.style.color = "#009218"

        setTimeout(() => {
            info_cadastro.style.display = "none";
        }, 4300);
    }
})