const btn_cadastrar = document.getElementById("btn_cadastrar")

let contador = 0

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