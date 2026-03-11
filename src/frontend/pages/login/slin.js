const btn_cadastrar = document.getElementById("btn_cadastrar")

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