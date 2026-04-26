const form_registrar = document.getElementById("formulario_register")
const info_cadastro = document.getElementById("info_cadastro")

form_registrar.addEventListener("submit", async(e)=>{ //api para levar os dados para o backed
    e.preventDefault();

    const nome = document.getElementById("nome_registro").value
    const email = document.getElementById("email_registro").value
    const senha = document.getElementById("senha_registro").value

    const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome, email, senha})
    })

    if(response.ok){
        const data = await response.json();
        console.log(data)
    }


    if(response.status === 200){
        info_cadastro.style.display = "grid"
        info_cadastro.innerHTML = "Cadastrado Com Sucesso!!!"
        info_cadastro.style.color = "#009218"

        form_registrar.reset(); // Limpa os campos do formulário

        setTimeout(() => {
            info_cadastro.style.display = "none";
            }, 4300);
        }
    if(response.status === 400){
        info_cadastro.style.display = "grid";
        info_cadastro.innerHTML = "Por gentileza preencher todos os campos !!"
        info_cadastro.style.color = "#920000"
        setTimeout(() => {
            info_cadastro.style.display = "none";
            }, 4300);
        } 
    if(response.status === 409){
        info_cadastro.style.display = "grid";
        info_cadastro.innerHTML = "Email ja Existente"
        info_cadastro.style.color = "#920000"
        setTimeout(() => {
            info_cadastro.style.display = "none";
            }, 4300);
    }
})