const form_registrar = document.getElementById("formulario_register")

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

    const data = await response.json();

    console.log(data)

    if(response.ok){
        form_registrar.reset();
    }
})